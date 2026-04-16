var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 0.340000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'ถนน',
                interactive: true,
    title: 'ถนน<br />\
    <img src="styles/legend/_1_0.png" /> ถนนจรัญสนิทวงศ์<br />' });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'อาคาร',
                interactive: true,
    title: 'อาคาร<br />\
    <img src="styles/legend/_2_0.png" /> <br />\
    <img src="styles/legend/_2_1.png" /> อาคารใช้งาน<br />\
    <img src="styles/legend/_2_2.png" /> อาคารร้าง<br />' });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'ตำเเหน่งอาคารร้าง',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> ตำเเหน่งอาคารร้าง'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'พิกัดจริง',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> พิกัดจริง'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: 'พิกัดที่โมเดลทำนาย',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> พิกัดที่โมเดลทำนาย'
            });
var format_vectordistanceerror_6 = new ol.format.GeoJSON();
var features_vectordistanceerror_6 = format_vectordistanceerror_6.readFeatures(json_vectordistanceerror_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vectordistanceerror_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vectordistanceerror_6.addFeatures(features_vectordistanceerror_6);
var lyr_vectordistanceerror_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vectordistanceerror_6, 
                style: style_vectordistanceerror_6,
                popuplayertitle: 'vector distance error',
                interactive: true,
                title: '<img src="styles/legend/vectordistanceerror_6.png" /> vector distance error'
            });

lyr_GoogleRoad_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr_vectordistanceerror_6.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr_vectordistanceerror_6];
lyr__1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'ref': 'ref', 'tunnel': 'tunnel', 'bridge': 'bridge', 'level': 'level', });
lyr__2.set('fieldAliases', {'id': 'id', 'การ�': 'การ�', 'binarly': 'binarly', });
lyr__3.set('fieldAliases', {'lat': 'lat', 'lon': 'lon', });
lyr__4.set('fieldAliases', {'lat': 'lat', 'lon': 'lon', });
lyr__5.set('fieldAliases', {'lat': 'lat', 'lon': 'lon', });
lyr_vectordistanceerror_6.set('fieldAliases', {'fid': 'fid', 'lat': 'lat', 'lon': 'lon', 'HubName': 'HubName', 'HubDist': 'HubDist', });
lyr__1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'ref': 'TextEdit', 'tunnel': 'TextEdit', 'bridge': 'TextEdit', 'level': 'TextEdit', });
lyr__2.set('fieldImages', {'id': 'TextEdit', 'การ�': 'TextEdit', 'binarly': 'Range', });
lyr__3.set('fieldImages', {'lat': 'TextEdit', 'lon': 'TextEdit', });
lyr__4.set('fieldImages', {'lat': 'TextEdit', 'lon': 'TextEdit', });
lyr__5.set('fieldImages', {'lat': 'TextEdit', 'lon': 'TextEdit', });
lyr_vectordistanceerror_6.set('fieldImages', {'fid': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'HubName': 'TextEdit', 'HubDist': 'TextEdit', });
lyr__1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'name': 'no label', 'surface': 'no label', 'ref': 'no label', 'tunnel': 'no label', 'bridge': 'no label', 'level': 'no label', });
lyr__2.set('fieldLabels', {'id': 'no label', 'การ�': 'no label', 'binarly': 'no label', });
lyr__3.set('fieldLabels', {'lat': 'no label', 'lon': 'no label', });
lyr__4.set('fieldLabels', {'lat': 'no label', 'lon': 'no label', });
lyr__5.set('fieldLabels', {'lat': 'no label', 'lon': 'no label', });
lyr_vectordistanceerror_6.set('fieldLabels', {'fid': 'no label', 'lat': 'no label', 'lon': 'no label', 'HubName': 'no label', 'HubDist': 'no label', });
lyr_vectordistanceerror_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});