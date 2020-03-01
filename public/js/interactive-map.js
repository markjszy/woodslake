(function() {
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
    
        woodsLakePark.bindPopup('<strong>Woods Lake</strong>')
        kensington.bindPopup('<strong>Kensington Park</strong>')
    }

    mapInit();
})()