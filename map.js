'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoicmNob3U4MSIsImEiOiJjanNjcG43Z2UwNGRwNDNwZWN0NTB0MW04In0.L5P48cRwORYjZkyPJ44quQ'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/rchou81/cjswmizqt0jbt1fnu5papg2sq',
    center: [-73.96216,40.80779],
    zoom: 16
})

let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})
map.addControl(navigation, 'top-left')

let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})
map.addControl(geolocate, 'top-left')

geolocate.on('geolocate', function(event) {

})