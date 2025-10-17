$(document).ready(function() {
    // --- Preloader Logic ---
    $('body').css('overflow', 'hidden'); // Prevent scrolling during animation
    
    // Fade out the preloader after the animation has had time to run
    setTimeout(function() {
        $('#preloader').fadeOut(500, function() {
            $('body').css('overflow', 'auto'); // Restore scrolling
        });
    }, 2500); // Adjust time as needed

    // --- Menu Logic ---
    // Open menu
    $('#menu-btn').on('click', function() {
        $('#menu-overlay').removeClass('translate-x-full');
    });

    // Close menu **(This was the missing piece)**
    $('#close-btn').on('click', function() {
        $('#menu-overlay').addClass('translate-x-full');
    });

    // Menu hover logic **(This logic is now fixed and more robust)**
    const mainLinks = $('#menu-overlay .w-1/3 a');
    const subMenus = $('.submenu-content');

    mainLinks.on('mouseenter', function() {
        // Get the data-target attribute from the link being hovered
        const targetId = $(this).data('target');
        
        // Hide all submenus and fade them out
        subMenus.addClass('hidden opacity-0');
        
        // Find the specific submenu that matches the data-target and show it with a fade-in
        if (targetId) {
            $('#' + targetId).removeClass('hidden').delay(50).queue(function(next){
                $(this).removeClass('opacity-0');
                next();
            });
        }
    });



    // --- Swiper Slider Initialization ---
var swiper = new Swiper('.swiper-container', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    // ** This is the updated part **
    navigation: {
        nextEl: '.hero-next-btn', // Connects to our custom "NEXT" button
        prevEl: '.hero-prev-btn', // Connects to our custom "BACK" button
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    // This is important for our CSS animation to work reliably
    watchSlidesProgress: true,
});
});