var ourLoc;
var view;
var map;

// We should initialize our variables!
function init() {
  ourLoc = ol.proj.fromLonLat([-13.163141, -72.544963]);

  view = new ol.View({center: ourLoc, zoom: 6});

  map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    loadTilesWhileAnimating: true,
    view: view
  });
}

window.onload = init;
