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
    const submitButton = document.querySelector('.contact-btn');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('comment');

        let valid = true;

        if (!nameInput.value) {
            nameInput.nextElementSibling.style.display = 'block';
            valid = false;
        } else {
            nameInput.nextElementSibling.style.display = 'none';
        }

        if (!emailInput.value) {
            emailInput.nextElementSibling.style.display = 'block';
            valid = false;
        } else {
            emailInput.nextElementSibling.style.display = 'none';
        }

        if (!subjectInput.value) {
            subjectInput.nextElementSibling.style.display = 'block';
            valid = false;
        } else {
            subjectInput.nextElementSibling.style.display = 'none';
        }

        if (!messageInput.value) {
            messageInput.nextElementSibling.style.display = 'block';
            valid = false;
        } else {
            messageInput.nextElementSibling.style.display = 'none';
        }

        if (valid) {
            submitButton.disabled = true;
            submitButton.innerHTML = "Submitting...";

            const formData = new FormData(form);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            result.innerHTML = "Please wait...";
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                try {
                    let jsonResponse = await response.json();
                    if (response.status === 200) {
                        result.innerHTML = "Form submitted successfully";
                    } else {
                        result.innerHTML = jsonResponse.message;
                    }
                } catch (error) {
                    result.innerHTML = "Error processing response.";
                }
            })
            .catch(error => {
                result.innerHTML = "Something went wrong!";
            })
            .finally(() => {
                submitButton.disabled = false;
                submitButton.innerHTML = "Submit";
                form.reset();
                setTimeout(() => {
                    result.style.display = "none";
                }, 5000);
            });
        }
    });

});	


				//Certifications

				function toggleCertifications() {
				const certSection = document.getElementById('certifications');
				if (certSection.style.display === 'none' || certSection.style.display === '') {
					certSection.style.display = 'block'; // Show the section
					window.scrollTo({
					top: certSection.offsetTop,
					behavior: 'smooth' // Smooth scroll to the section
					});
				} else {
					certSection.style.display = 'none'; // Hide the section
					}
				}

				// Carousel Navigation
				let scrollAmount = 0;

				function nextCert() {
					const wrapper = document.querySelector('.cert-wrapper');
					const cardWidth = wrapper.querySelector('.cert-card').offsetWidth;
					scrollAmount += cardWidth + 20; // Card width + gap
					wrapper.scrollTo({
					left: scrollAmount,
					behavior: 'smooth'
					});
				}

				function prevCert() {
					const wrapper = document.querySelector('.cert-wrapper');
					const cardWidth = wrapper.querySelector('.cert-card').offsetWidth;
					scrollAmount -= cardWidth + 20; // Card width + gap
					wrapper.scrollTo({
					left: scrollAmount,
					behavior: 'smooth'
					});
				}
				function scrollCertifications(direction) {
					const wrapper = document.querySelector('.carousel-wrapper');
					const cardWidth = wrapper.querySelector('.cert-card').offsetWidth + 20; // Card width + gap
					const scrollAmount = direction * cardWidth; // Direction can be -1 (left) or 1 (right)

					wrapper.scrollBy({
						left: scrollAmount,
						behavior: 'smooth',
						});
					}
