// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {
    };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
/**
 * Dropdown menu
 *
 * @param {type} $
 * @returns {undefined}
 */
(function ($) {
    var defaults = {
    };

    var DropdownMenu = {
        container: null,
        options: defaults,
        items: [],
        dropdownOrItemIsHovered: false,
        hideAll: function (ignoreHover) {
            if (!ignoreHover && this.dropdownOrItemIsHovered) {
                return false
            }
            this.container.find('.dropdown-content').hide(0);
        },
        showItemContent: function (item) {
            $(item).children('.dropdown-content').show(0);
        },
        bindUserActions: function () {
            var self = this;
            // Items mouseenter. Pretty simple.
            this.items.on('mouseenter', function () {
                self.hideAll(true);
                self.dropdownOrItemIsHovered = true;
                self.showItemContent(this);
            });
            // Items mouseleave is a bit more tricky
            this.items.on('mouseleave', function (event) {
                self.dropdownOrItemIsHovered = false;
                setTimeout(function () {
                    self.hideAll();
                }, 50);
            });
            // Dropdown mouseenter
            this.container.find('.dropdown-content').on('mouseenter', function () {
                self.dropdownOrItemIsHovered = true;
            });
            // Dropdown mouseleave
            this.container.find('.dropdown-content').on('mouseleave', function () {
                self.dropdownOrItemIsHovered = false;
                self.hideAll();
            });
        },
        init: function (container, options) {
            var self = this;
            // Store options
            $.extend(this.options, options);
            // Store container
            this.container = $(container);
            // Store items
            this.items = this.container.children('li');
            // Bind events
            this.bindUserActions();

            return this;
        }
    }

    var storage = [];

    $.fn.dropdownMenu = function (options) {
        return this.each(function () {
            storage.push(DropdownMenu.init(this, options));
        });
    };
})(jQuery);