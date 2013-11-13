$(document).ready(function(){
    $(".sidebar select").selectBoxIt({
        autoWidth: false
    });
    $(".collection-controls select").selectBoxIt({});

    $('input').iCheck({
        checkboxClass: 'icheckbox_minimal-blue',
        radioClass: 'iradio_minimal-blue',
        increaseArea: '20%' // optional
    });
});
