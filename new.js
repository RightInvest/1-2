$(function () {
  
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = 0;     
    
    /* Smoth Scroll */
    
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
    
        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;
        
        $("#nav a"). removeClass("active");
        $this.addClass("active");
   
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
        
        });
    
    
    /* Menu nav toggle */
    
    $("#nav_toggle").on("click", function(event){
        event.preventDefault();
        
        $(this).toggleClass("active");
        $("nav").toggleClass("active");
    })
    
    
    /* Collapse */
    
    $("[data-collapse]").on("click", function(event){
        event.preventDefault();
        
        var $this = $(this),
            blockId = $this.data('collapse');
        
        $this.toggleClass("active"); 
    });
    
    
    /* Slider */
    
    $("[data-slider]").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
   
    
    /* Sending From */
     document.getElementById('intro_btm').addEventListener('click', function(){
        document.querySelector('.bg_modal').style.display = 'flex';
    }); 


     document.querySelector('.modal_close').addEventListener('click',function(){
        
         document.querySelector('.bg_modal').style.display = 'none';
    })
    
    
    /*  Lang change  */
    
    document.getElementById('lang').addEventListener('click', function(){
        document.querySelector('.lang_modal').style.display = 'flex';
    }); 
    
    
    
    });


    

