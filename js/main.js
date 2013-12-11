$(document).ready(function(){
    $(".sidebar select").selectBoxIt({
        autoWidth: false
    });
    $(".collection-controls select").selectBoxIt({});
    $(".cart-form select").selectBoxIt({
        autoWidth: false
    });

    $('input').iCheck({
        checkboxClass: 'icheckbox_minimal-blue',
        radioClass: 'iradio_minimal-blue',
        increaseArea: '20%' // optional
    });

    $("#priceFiter").slider({
        from: 20,
        to: 3000,
        heterogeneity: ['40/250', '80/1000'],
        step: 20,
        format: { format: '##.0', locale: 'de' },
        dimension: '&nbsp;&euro;'
    });

    $("#priceDetailsButton").fancybox({});
    $(".gallery a").fancybox({});
    $("a[data-target='popup']").fancybox({});

    $('body > header .main-menu').dropdownMenu();
});
