$( document ).ready(function() {
    $.material.init();

    $('.opositaTabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    })

    //Popovers
    $('[data-toggle="popover"]').popover({trigger:'focus'});


    // Estilos acordeon
    $('.grupo_acordeon a[role="button"]').click(function(){
        var panelId = $(this).closest('.panel-group').attr('id');
        if ($(this).closest('.panel-heading').hasClass('active')){
            $(this).closest('.panel-heading').removeClass('active')
        }else{
            $('#'+panelId +" .panel-heading.active").removeClass("active");
            $(this).closest('.panel-heading').addClass('active')
        }
    });
    
    // Estilos acordeon

    $("[data-js='failed_questions']").on('show.bs.collapse', function(e){
        $(e.target).parent().find('.panel-heading').addClass('active');

    });

    $("[data-js='failed_questions']").on('hide.bs.collapse', function(e){
        $(e.target).parent().find('.panel-heading').removeClass('active');
    });
    
    //Navegador de oposiciones
    $('#oposicion_nav').on('change', function () {
        var url = $(this).val();
        if (url) { 
            window.location = url; 
        }
        return false;
    });

    //Css custom
    if ($('.area-personal').length) alturaBtn();
    if ($('.row.paneles').length) alturaPaneles();
    if ($('.plan-duracion-wrapper .duracion-item').length) alturaPanelesPrecios();

    $( window ).resize(function() {
        if ($('.area-personal').length) alturaBtn();
        if ($('.row.paneles').length) alturaPaneles();
        if ($('.plan-duracion-wrapper .duracion-item').length) alturaPanelesPrecios();
    });

    //Datepicker
//    $( ".datepicker" ).datepicker();
//    $(function($){
//        $.datepicker.regional['es'] = {
//            closeText: 'Cerrar',
//            prevText: '<Ant',
//            nextText: 'Sig>',
//            currentText: 'Hoy',
//            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
//            monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
//            dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
//            dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
//            dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
//            weekHeader: 'Sm',
//            dateFormat: 'dd/mm/yy',
//            firstDay: 1,
//            isRTL: false,
//            showMonthAfterYear: false,
//            yearSuffix: ''
//        };
//        $.datepicker.setDefaults($.datepicker.regional['es']);
//    });
    $('.form-buscador-fechas .link_delete_filter').click(function(){
        $(".form-buscador-fechas .datepicker").val("");
    });

    //Submenu area personal
    $('.haschild a.dropdown').click(function(e){
        e.preventDefault();
        if ($(this).parent('li').hasClass('collapsed')){
            $(this).siblings('.area-personal-submenu').slideDown('slow');
            $(this).parent('li').removeClass('collapsed');
        }else{
            $(this).siblings('.area-personal-submenu').slideUp('slow');
            $(this).parent('li').addClass('collapsed');
        }
    });
    
    //Paneles duracion
    $('.duracion-item').click(function(){
        var activo = $(this).hasClass('active');
        if (!activo){
            $('.duracion-item').removeClass('active');
            $(this).addClass('active');
        }
    });


    // Menu sticky
    menuStickyPortada();

    // Header Tests sticky
    headerTestsSticky();
                            
    //Menu mobile
    $('.header-hamburger').click(function(){
        if ($('body').hasClass('show-menu')){
            $('body').removeClass('show-menu');
        }
        else{
            $('body').addClass('show-menu');
        }
    });
    $('.close-menu').click(function(){
        $('body').removeClass('show-menu');
    });

    $('img.show-calendar').click(function(){
        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            $('.buscador_fechas').slideUp('slow');
        }else{
            $(this).addClass('on');
            $('.buscador_fechas').slideDown('slow');
        }
    });

    //Submenu contenido
    $(".mostrar-menu-contenido").click(function(){
        var menu_id = '#'+$(this).attr('rel');
        if ($(menu_id).hasClass('open')){
            $(menu_id).removeClass('open');
            $(menu_id+" li").not(".active").slideUp('slow');
        }else{
            $(menu_id).addClass('open');
            $(menu_id+" li").not(".active").slideDown('slow');
        }
    });
    
    
    //Respuestas de examenes
//This code now is not necesary, it damage page of view exam and not navigate from table resumen to question
//    $(".aciertos-test .ver-pregunta").click(function(e) {
//        e.preventDefault();
//        var id = $(this).attr('rel');
//        console.log('id '+id);
//        $('html, body').animate({
//            scrollTop: $('#'+id).offset().top - 150
//        }, 1000);
//    });

    //recomendation bar
    $('#hide_recomendation_bar').click(function(){
        $('.recomendation_bar').hide("slide", { direction: "right" }, 1000);
        $('.recomendation_alert').delay().show(1000);
    });

    $('#hide_recomendation_alert').click(function(){
        $('.recomendation_alert').delay().hide(1000);
        $('.recomendation_bar').show("slide", { direction: "right" }, 1000);
    });
});
function alturaBtn() {
    var altura = $('#avisocaducidad_data').height();
    $('#avisocaducidad_button').css({'height':altura,'line-height':altura+'px'});
}
function alturaPaneles(){
    var altura = Math.max($("#panel-izqdo").height(), $("#panel-dcho").height());
    if ( $(window).width() > 769) {
        $("#panel-izqdo").height(altura);
        $("#panel-dcho").height(altura);
    }
}
function alturaPanelesPrecios(){
    var altura = Math.max($("#duracion-1").height(), $("#duracion-6").height(), $("#duracion-12").height());
    if ( $(window).width() > 769) $(".duracion-item").height(altura);

}
function menuStickyPortada() {
    jQuery(window).scroll(function(e) {
        if ( $( ".home" ).length ) {
            var docViewTop = jQuery(window).scrollTop();
            //console.log('docViewTop: '+docViewTop);
            if (docViewTop > 1) {
                jQuery('.menu-wrapper').addClass('fixed');
//                jQuery('.wrapper-menu-principal .header-logo img').attr('src','images/opositatest_logo.png');
            } else {
                jQuery('.menu-wrapper').removeClass('fixed');
//                jQuery('.wrapper-menu-principal .header-logo img').attr('src','images/opositatest_logo_contratipo.png');
            }
        }
    });
}

function headerTestsSticky() {
    if ( $( ".test-2" ).length ) {
        var menuHeight = jQuery('.wrapper-menus').height();
        //console.log('menuHeight: '+menuHeight);
        jQuery(window).scroll(function(e) {
                var docViewTop = jQuery(window).scrollTop();
                //console.log('docViewTop: '+docViewTop);
                if (docViewTop >= menuHeight) {
                    jQuery('body').addClass('fixed');
                } else {
                    jQuery('body').removeClass('fixed');
                }
        });
    }
}
