(function() {
    function navBarInit() {
        document.addEventListener('DOMContentLoaded', () => {

            // Get all "navbar-burger" elements
            const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
            
            // Check if there are any navbar burgers
            if ($navbarBurgers.length > 0) {
              // Add a click event on each of them
              $navbarBurgers.forEach( el => {
                  console.log(el)
                el.addEventListener('click', () => {
          
                  // Get the target from the "data-target" attribute
                  const target = el.dataset.target;
                  const $target = document.getElementById(target);
    
                  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                  el.classList.toggle('is-active');
                  $target.classList.toggle('is-active');
                });
              });
            }
        });
    }

    function mapInit() {
        const tileUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'
        const accessToken = 'pk.eyJ1IjoibWFya2pzenkiLCJhIjoiY2s1aGw3bWF3MDUzNTNrcGYwNDFxOXN0MyJ9.vGDTKjbN3Q5FevBtz_Ptpw'
        const maxZoom = 18
        const mapId  = 'mapbox/satellite-v9'
        const attributionNotice = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        const myMap = L.map('mapid').setView([42.2621627, -85.6155495], 15)
    
        L.tileLayer(tileUrl, {
            attribution: attributionNotice,
            maxZoom: maxZoom,
            id: mapId,
            accessToken: accessToken
        }).addTo(myMap);
    
        const woodsLakePark = L.marker([42.262488, -85.612571]).addTo(myMap)
        const kensington = L.marker([42.261047, -85.619223]).addTo(myMap)
        const oakwood = L.marker([42.260812, -85.615439]).addTo(myMap)
    
        woodsLakePark.bindPopup('<strong>Woods Lake</strong>')
        kensington.bindPopup('<strong>Kensington Park</strong>')
        oakwood.bindPopup('<strong>Oakwood Memorial Beach</strong>')
    }

    navBarInit();
    mapInit();
}());