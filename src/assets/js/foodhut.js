/*!
=========================================================
* FoodHut Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
function initMap() {
    const mapDiv = document.getElementById('map');
    if (mapDiv) {
      const map = new google.maps.Map(mapDiv, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
      });
    } else {
      console.error('Map div not found');
    }
  }


// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 700, function(){
          window.location.hash = hash;
        });
      } 
    });
  });

new WOW().init();

function initMap() {
    var uluru = {lat: 37.227837, lng: -95.700513};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
 }
