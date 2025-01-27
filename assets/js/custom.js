$(document).ready(function(){
	"use strict";
    
        /*==================================
* Author        : "ThemeSine"
* Template Name : Khanas HTML Template
* Version       : 1.0
==================================== */



/*=========== TABLE OF CONTENTS ===========
1. Scroll To Top 
2. Smooth Scroll spy
3. Progress-bar
4. owl carousel
5. welcome animation support
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	
	
	
	// 2. Smooth Scroll spy
		
		$('.header-area').sticky({
           topSpacing:0
        });
		
		//=============

		$('li.smooth-menu a').bind("click", function(event) {
			event.preventDefault();
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 0
			}, 1200,'easeInOutExpo');
		});
		
		$('body').scrollspy({
			target:'.navbar-collapse',
			offset:0
		});

	// 3. Progress-bar
	
		var dataToggleTooTip = $('[data-toggle="tooltip"]');
		var progressBar = $(".progress-bar");
		if (progressBar.length) {
			progressBar.appear(function () {
				dataToggleTooTip.tooltip({
					trigger: 'manual'
				}).tooltip('show');
				progressBar.each(function () {
					var each_bar_width = $(this).attr('aria-valuenow');
					$(this).width(each_bar_width + '%');
				});
			});
		}
	
	// 4. owl carousel
	
		// i. client (carousel)
		
			$('#client').owlCarousel({
				items:7,
				loop:true,
				smartSpeed: 1000,
				autoplay:true,
				dots:false,
				autoplayHoverPause:true,
				responsive:{
						0:{
							items:2
						},
						415:{
							items:2
						},
						600:{
							items:4

						},
						1199:{
							items:4
						},
						1200:{
							items:7
						}
					}
				});
				
				
				$('.play').on('click',function(){
					owl.trigger('play.owl.autoplay',[1000])
				})
				$('.stop').on('click',function(){
					owl.trigger('stop.owl.autoplay')
				})


    // 5. welcome animation support

        $(window).load(function(){
        	$(".header-text h2,.header-text p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".header-text h2,.header-text p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").addClass("animated fadeInDown").css({'opacity':'0'});
        });
		
	//contact Form	
		/*const form  = document.querySelector('form');
		const Name  = document.getElementById('name');
		const email  = document.getElementById('email');
		const subject  = document.getElementById('subject');
		const message  = document.getElementById('comment');
		
		
		function sendEmail(){
			const bodymessage  = 'Full Name: ${Name.value}<br> Email: ${email.value}<br> subject: ${subject.value}<br> Message: ${message.value}';

			Email.send({
				Host : "smtp.mailendo.com",
				Username : "username",
				Password : "password",
				To : 'them@website.com',
				From : "you@isp.com",
				Subject : subject.value,
				Body : bodymessage
				}).then(
				message => alert(message)
				);
				}
				form.addEventListener("submit", (e) => { 
				e.preventDefault();
				sendEmail();*/
   
				const form = document.getElementById('form');
				const result = document.getElementById('result');
				form.addEventListener('submit', function(e) {
					e.preventDefault();
					 console.log("Form submitted!"); // Check if the event listener is working

				const formData = new FormData(form);
				console.log("FormData:", formData); // Check if FormData is populated

				const object = Object.fromEntries(formData);
				console.log("Object:", object); // Check the object

				const json = JSON.stringify(object);
				console.log("JSON:", json); // Check the JSON
					
					result.innerHTML = "Please wait..."
					fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
			    console.log("Full Response:", response); // Log the full response object
    try {

            let json = await response.json();
			console.log("JSON Response:", json);
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
	}catch (error) {
        console.error("Error parsing JSON:", error);
        result.innerHTML = "Error processing response.";
    }
        })
        .catch(error => {
           console.error("Fetch Error:", error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});

});	
	