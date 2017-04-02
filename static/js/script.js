(function(){
    $(document).ready(function(){
        $(".dropdown-toggle").dropdown();
        $(".show-scroll").hide();
    });
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if(scroll >= 300) {
            $(".navbar").addClass("navbar-fixed-top").fadeIn();
            $(".contact").addClass("contact-appear");
            $(".company").css("margin-left","0px");
            $(".navbar").addClass("fixed-bg").fadeIn();
            $("#navgrad").removeClass("navbar-gradient").fadeOut();
            $(".show-scroll").show();
            $(".hide-scroll").hide();
        } else {
            $(".navbar").removeClass("fixed-bg").fadeOut();
            $(".navbar").removeClass("navbar-fixed-top").fadeOut();
            $(".contact").removeClass("contact-appear");
            $(".company").css("margin-left","10vh");
            $("#navgrad").addClass("navbar-gradient").fadeIn();
            $(".show-scroll").hide();
            $(".hide-scroll").show();
        }
    });
    $(document).ready(function(){
        $('.bounce').hover(
        function(){ $(this).addClass('hover-bounce') },
        function(){ $(this).removeClass('hover-bounce') }
        )
    });
    $(document).ready(function(){
        $('.button-logos-action').hover(function(){
            $('#logos').addClass('shrinkblur');
            /*$("#buttonaction").addClass('logobuttonappear');*/ },
            function(){
            $('#logos').removeClass('shrinkblur'); }
            /*function(){ $('#buttonaction').addClass('logobuttonappear') }*/
            /*function(){ $(this).removeClass('logoblur') }*/
            /*function(){ $('#logobutton').removeClass('logobuttonappear') }*/
        )
    });
    $('.panelheading').on('click', function(){
        $(this).toggleClass('panelheading-open');
        /*$('.panelheading').removeClass('panelheading-open');*/

    });
    $(document).ready(function(){
        $('#prevservice').hover(
            function(){ $(this).addClass('moveup') },
            function(){ $(this).removeClass('moveup') }
        )
    });
    $(document).ready(function(){
        $('#nextservice').hover(
            function(){ $(this).addClass('moveup') },
            function(){ $(this).removeClass('moveup') }
        )
    });
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if(scroll >= 1000) {
            $(".epintercom").addClass("epintercom-appear");
        } else {
            /*$(".epintercom").removeClass("epintercom-appear");*/
        }
    });
    $(document).ready(function(){
        $("#service-boxes").fadeIn();
    });
})();