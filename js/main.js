// Start manu first

function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

// End manu first

// START Swiper PREVIEW
var galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: 20,
	slidesPerView: 4,
	loop: true,
	freeMode: true,
	loopedSlides: 5, //looped slides should be the same
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
	spaceBetween: 10,
	loop: true,
	loopedSlides: 5, //looped slides should be the same
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: galleryThumbs,
	},
});

// START Swiper PREVIEW

// Start Tab Menu

function tabMenu(evt, tabName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

// End Tab Menu

// START Swiper ITEMS 

var swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	spaceBetween: 10,
	// init: false,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		prevEl: '.button-prev',
		nextEl: '.button-next',
	},
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 5,
			spaceBetween: 50,
		},
	}
});

// END Swiper ITEMS

// Start Counter

$(document).ready(function () {
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
});

// End Counter