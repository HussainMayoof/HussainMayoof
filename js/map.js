/*
 @license
 Copyright 2019 Google LLC. All Rights Reserved.
 SPDX-License-Identifier: Apache-2.0
*/

//This JavaScript is from Google. Get the code from https://developers.google.com/maps/documentation/javascript/adding-a-google-map#maps_add_map-javascript

// Initialize and add the map
function initMap() {
    // The location of pisa
    const pisa = { lat: 43.7230, lng: 10.3966 };
    // The map, centered at pisa
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: pisa,
    });
    // The marker, positioned at pisa
    const marker = new google.maps.Marker({
      position: pisa,
      map: map,
    });
  }
  
window.initMap = initMap;