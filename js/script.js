$(document).ready(function() {
	var owl = $('.owl-carousel');
	$('.logoSlider').owlCarousel({
		loop:true,
		autoplay:true,
		margin:15,
		nav:true,
		dots:false,
		responsive:{

			0:{

				items:1
			},
			768:{

				items:3
			},
			1024:{

				items:5,
				margin:50
			}
		}
	});
	
});

$(document).ready(function() {
	var owl = $('.owl-carousel');
	$('.logoSlider2').owlCarousel({
		loop:true,
		autoplay:true,
		margin:15,
		nav:true,
		dots:false,
		responsive:{

			0:{

				items:1
			},
			768:{

				items:3
			},
			1024:{

				items:3,
				margin:50
			}
		}
	});
	
});

$(document).ready(function() {
	var owl = $('.owl-carousel');
	$('.logoSlider3').owlCarousel({
		loop:true,
		autoplay:true,
		margin:15,
		nav:true,
		dots:false,
		responsive:{

			0:{

				items:1
			},
			768:{

				items:3
			},
			1024:{

				items:6,
				margin:50
			}
		}
	});
	
});

//Countdown timer js start//
(function () {
	const second = 1000,
		  minute = second * 60,
		  hour = minute * 60,
		  day = hour * 24;
  
	//I'm adding this section so I don't have to keep updating this pen every year :-)
	//remove this if you don't need it
	let today = new Date(),
		dd = String(today.getDate()).padStart(2, "0"),
		mm = String(today.getMonth() + 1).padStart(2, "0"),
		yyyy = today.getFullYear(),
		nextYear = yyyy + 1,
		dayMonth = "09/30/",
		birthday = dayMonth + yyyy;
	
	today = mm + "/" + dd + "/" + yyyy;
	if (today > birthday) {
	  birthday = dayMonth + nextYear;
	}
	//end
	
	const countDown = new Date(birthday).getTime(),
		x = setInterval(function() {    
  
		  const now = new Date().getTime(),
				distance = countDown - now;
  
		  document.getElementById("days").innerText = Math.floor(distance / (day)),
			document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
			document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
			document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
		  //do something later when date is reached
		  if (distance < 0) {
			document.getElementById("headline").innerText = "It's my birthday!";
			document.getElementById("countdown").style.display = "none";
			document.getElementById("content").style.display = "block";
			clearInterval(x);
		  }
		  //seconds
		}, 0)
	}());




	var target_date = new Date().getTime() + (1000*3600*48); // set the countdown date
var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;

	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}




