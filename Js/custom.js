

$(".khadamat-cardjs ").mouseleave(function (e) {

    var selectedcard = $(this).find(".khadamat-iconjs");
    $(selectedcard).addClass("khadamat-icon-transformed");
    setTimeout(function () {

        $(selectedcard).removeClass('khadamat-icon-transformed');
    }, 2000);
});




$(".card-Staff").hover(function () {
    var selectedStaff = $(this).find(".image-Staff");
    $(selectedStaff).addClass('scaleStaff');

    setTimeout(function () {

        $(selectedStaff).removeClass('notscaleStaff');
    }, 100);


}, function () {

    $(".image-Staff").addClass('notscaleStaff');
    setTimeout(function () {

        $(".image-Staff").removeClass('scaleStaff');
    }, 100);

}
);


$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                loop: true,
                margin: 40,
                autoplay: true,
                autoplayTimeout: 3000,

            },
            768: {
                items: 3,
                loop: true,
                margin: 20,
                autoplay: true,
                autoplayTimeout: 3000,
            },
            900: {
                items: 4,
                loop: true,
                margin: 17,
                autoplay: true,
                autoplayTimeout: 3000,
                margin: 30
            }
        }
    });
    $('.owl-carouselComment').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                margin: 40,
                autoplay: true,
                autoplayTimeout: 5000,

            },
            768: {
                items: 2,
                loop: true,
                margin: 5,
                autoplay: true,
                autoplayTimeout: 5000,
            },
            900: {
                items: 2,
                loop: true,
                margin: 17,
                autoplay: true,
                autoplayTimeout: 5000,
            }
        }
    });
    $('.owl-carouselCustomerBrand').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                margin: 40,
                autoplay: true,
                autoplayTimeout: 5000,

            },
           480: {
               items: 2,
               loop: true,
               margin: 5,
               autoplay: true,
               autoplayTimeout: 5000,
            },
            768:{
                items: 3,
                loop: true,
                margin: 5,
                autoplay: true,
                autoplayTimeout: 5000,
            },
            900: {
                items: 5,
                loop: true,
                margin: 17,
                autoplay: true,
                autoplayTimeout: 5000,
            }
        }
    });

    $(function(){
        $('#Container').mixItUp({
            load: {
                filter: '.category-1'
            }
        });
    });
});



jQuery(document).ready(function ($) {
    // AOS.init({
    //     disable: 'mobile',
    //     duration: 800,
    //     anchorPlacement: 'center-bottom'
    // });

    var owl =$('.fadeOutSlider')
    owl.owlCarousel({
        items: 1,
        animateOut: 'fadeOut',
        loop: true,
        // margin: 10,
        autoplay: true,
        autoplayTimeout: 4000,
        onInitialized: adjustStretchHeader,
        onTranslated: refreshAos,
    });
    owl.on('changed.owl.carousel', function(event) {
        console.log('ffffffffff')
        refreshAos();
    })
    $('.fadeOut').owlCarousel({
        items: 1,
        animateOut: 'fadeOut',
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
    });
    $('.fadeOut3').owlCarousel({
        items: 1,
        animateOut: 'fadeOut',
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
    });
    $('.fadeOutKadamat').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                loop: true,
                margin: 40,
                autoplay: true,
                autoplayTimeout: 3000,

            },
            768: {
                items: 3,
                loop: true,
                margin: 20,
                autoplay: true,
                autoplayTimeout: 3000,
            },
            900: {
                items: 4,
                loop: true,
                margin: 17,
                autoplay: true,
                autoplayTimeout: 3000,
                margin: 30
            }
        }
    });
});


function adjustStretchHeader () {
    AOS.init({
        disable: 'mobile',
        duration: 800,
        anchorPlacement: 'center-bottom'
    });
    console.log('ddddddddddd')
}

function refreshAos () {
    AOS.refresh();
}

var isProgressStarted=false;
$(window).scroll(function () { 
 
    c=1;
    if ($(document).scrollTop() > 500) {

if(isProgressStarted==false){
    isProgressStarted=true;
    var progressBarStepConter = 0;
    var finalProgress1 = 98;
    var finalProgress2 = 100;
    var finalProgress3 = 95;
    var finalProgress4 = 90;
    var finalProgress5 = 97;
    var time = setInterval(function () {
        // progress1
        if (progressBarStepConter <= finalProgress1) {
            $("#progress-bar1").progressbar({
                value: progressBarStepConter
            });
            $(".progress-count1").html(progressBarStepConter);
            
            $(".progress-count1").css("margin-right", progressBarStepConter-5 + "%");
        }
        // progress2
        if (progressBarStepConter <= finalProgress2) {
            $("#progress-bar2").progressbar({
                value: progressBarStepConter
            });
            $(".progress-count2").html(progressBarStepConter);
           
            $(".progress-count2").css("margin-right", progressBarStepConter-7 + "%");
        }
        // progress3
        if (progressBarStepConter <= finalProgress3) {
            $("#progress-bar3").progressbar({
                value: progressBarStepConter
            });
            $(".progress-count3").html(progressBarStepConter);
            $(".progress-count3").css("margin-right", progressBarStepConter-5 + "%");  
        }
        // progress4
        if (progressBarStepConter <= finalProgress4) {
            $("#progress-bar4").progressbar({
                value: progressBarStepConter
            });
            $(".progress-count4").html(progressBarStepConter);
        
            $(".progress-count4").css("margin-right", progressBarStepConter-5 + "%");
        }
        // progress5
        if (progressBarStepConter <= finalProgress5) {
            $("#progress-bar5").progressbar({
                value: progressBarStepConter
            });
            $(".progress-count5").html(progressBarStepConter);
           
            $(".progress-count5").css("margin-right", progressBarStepConter-5 + "%");
        }

        if (  progressBarStepConter==100){
            clearInterval(time);  
            console.log("else");
        }

        progressBarStepConter++;
    }, 20);

    $('.head_adad').animationCounter({
        start: 0,
        end: 15,
        step: 1,
        delay: 100,
    });
    $('.head_adad2').animationCounter({
        start: 0,
        end: 15,
        step: 1,
        delay: 80,
    });
    $('.head_adad3').animationCounter({
        start: 0,
        end: 15,
        step: 1,
        delay: 70,
    });
    $('.head_adad4').animationCounter({
        start: 0,
        end: 500,
        step: 1,
        delay: 5,
    });

}
    }
});

$('.linkTop').on('click',function () {
    $("html, body").animate({ scrollTop: "0" });
})



$(selector).on(events, function () {
    
});

















