var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_magelang_DISSOLVE_1 = new ol.format.GeoJSON();
var features_magelang_DISSOLVE_1 = format_magelang_DISSOLVE_1.readFeatures(json_magelang_DISSOLVE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_magelang_DISSOLVE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_magelang_DISSOLVE_1.addFeatures(features_magelang_DISSOLVE_1);
var lyr_magelang_DISSOLVE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_magelang_DISSOLVE_1, 
                style: style_magelang_DISSOLVE_1,
                popuplayertitle: 'magelang_DISSOLVE',
                interactive: true,
    title: 'magelang_DISSOLVE<br />\
    <img src="styles/legend/magelang_DISSOLVE_1_0.png" /> agak curam<br />\
    <img src="styles/legend/magelang_DISSOLVE_1_1.png" /> curam<br />\
    <img src="styles/legend/magelang_DISSOLVE_1_2.png" /> datar<br />\
    <img src="styles/legend/magelang_DISSOLVE_1_3.png" /> landai<br />\
    <img src="styles/legend/magelang_DISSOLVE_1_4.png" /> sangat curam<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_magelang_DISSOLVE_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_magelang_DISSOLVE_1];
lyr_magelang_DISSOLVE_1.set('fieldAliases', {'gridcode': 'gridcode', 'Kemiringan': 'Kemiringan', 'Klasifikas': 'Klasifikas', });
lyr_magelang_DISSOLVE_1.set('fieldImages', {'gridcode': 'TextEdit', 'Kemiringan': 'TextEdit', 'Klasifikas': 'TextEdit', });
lyr_magelang_DISSOLVE_1.set('fieldLabels', {'gridcode': 'no label', 'Kemiringan': 'no label', 'Klasifikas': 'no label', });
lyr_magelang_DISSOLVE_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});