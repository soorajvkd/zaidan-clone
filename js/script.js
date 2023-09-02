// Code hide 

// Disable right-click

// document.addEventListener('contextmenu', (e) => e.preventDefault());

// function ctrlShiftKey(e, keyCode) {
//     return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
// }

// document.onkeydown = (e) => {
//     // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
//     if (
//         event.keyCode === 123 ||
//         ctrlShiftKey(e, 'I') ||
//         ctrlShiftKey(e, 'J') ||
//         ctrlShiftKey(e, 'C') ||
//         (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
//     )
//         return false;
// };




// mobileMenu

let one = document.getElementById("menu-icon");
one.addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.add("active")
  for (x of document.getElementsByClassName("overlay")) {
    x.classList.add("active")
  }
})

$('.overlay').on('click', function () {
  $(this).removeClass('active')
  $('#mobile-menu').removeClass('active')
})
let two = document.getElementsByClassName("close");
for (x of two) {
  x.addEventListener('click', () => {
    for (x of document.getElementsByClassName("overlay")) {
      x.classList.remove("active")
    }
    document.getElementById("mobile-menu").classList.remove("active")
  })
}



// *About Page Count Increse* //

let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});



// *slick slider //

$('.slide').slick({
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 900,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});

// *Team Slider //

$('.teamslide').slick({
  autoplay: true,
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  prevArrow: ".slick-prev",
  nextArrow: ".slick-next",
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1081,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 641,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 330,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  
  ]
})

// Testimonial //

$('.testimonial').slick({
  autoplay: true,
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  arrows: false,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1081,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
})
// *Location Map Script* //

var map = L.map('map').setView([21.338529, 39.196980], 13);

var myIcon = L.icon({
  iconUrl: '../images/icons/location icon.png',
  iconSize: [34],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -89],
})

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: ' '
}).addTo(map);

L.marker([21.338529, 39.196980], { icon: myIcon }).addTo(map)
  .bindPopup('Zaidan Toyota Is here')
  .openPopup();


// *Contact Map Layout* //

var cities = L.layerGroup();

var mLittleton = L.marker([21.33864861657539, 39.19701172175992]).bindPopup('Zaidan Toyota Branch 1').addTo(cities);
var mDenver = L.marker([21.62404340309467, 39.18582769667276]).bindPopup('Zaidan Toyota  Branch 2.').addTo(cities);
// var mAurora = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(cities);
// var mGolden = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(cities);

var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
var mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var streets = L.tileLayer(mbUrl, { id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr });

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});


var baseLayers = {
  'OpenStreetMap': osm,
  'Streets': streets
};

var overlays = {
  'Cities': cities
};

var satellite = L.tileLayer(mbUrl, { id: 'mapbox/satellite-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr });


// *Animation Text* //

const txts = document.querySelector(".animate-text").children, txtsLen = txts.length;

let index = 0;
const textInTimer = 3000,
  textOutTimer = 2800;

function animateText() {
  for (let i = 0; i < txtsLen; i++) {
    txts[i].classList.remove("text-in", "text-out");
  }
  txts[index].classList.add("text-in");

  setTimeout(function () {
    txts[index].classList.add("text-out");
  }, textOutTimer)

  setTimeout(function () {

    if (index == txtsLen - 1) {
      index = 0;
    }
    else {
      index++;
    }
    animateText();
  }, textInTimer);
}

window.onload = animateText;




