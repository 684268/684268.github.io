var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var lyr_OrtofotoIDEAragon_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms-inspire/pnoa-ma?",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofoto, IDEAragon.",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OrtofotoIDEAragon_0, 0]);var format_MapaForestalTorlaOrdesa_1 = new ol.format.GeoJSON();
var features_MapaForestalTorlaOrdesa_1 = format_MapaForestalTorlaOrdesa_1.readFeatures(json_MapaForestalTorlaOrdesa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MapaForestalTorlaOrdesa_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MapaForestalTorlaOrdesa_1.addFeatures(features_MapaForestalTorlaOrdesa_1);var lyr_MapaForestalTorlaOrdesa_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MapaForestalTorlaOrdesa_1, 
                style: style_MapaForestalTorlaOrdesa_1,
                title: '<img src="styles/legend/MapaForestalTorlaOrdesa_1.png" /> Mapa Forestal, Torla-Ordesa.'
            });

lyr_OrtofotoIDEAragon_0.setVisible(true);lyr_MapaForestalTorlaOrdesa_1.setVisible(true);
var layersList = [baseLayer,lyr_OrtofotoIDEAragon_0,lyr_MapaForestalTorlaOrdesa_1];
lyr_MapaForestalTorlaOrdesa_1.set('fieldAliases', {'ArcIds': 'ArcIds', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'IFN3220': 'IFN3220', 'ifn322_ESP': 'ifn322_ESP', 'tablas_ifn': 'tablas_ifn', });
lyr_MapaForestalTorlaOrdesa_1.set('fieldImages', {'ArcIds': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'IFN3220': 'TextEdit', 'ifn322_ESP': 'TextEdit', 'tablas_ifn': 'TextEdit', });
lyr_MapaForestalTorlaOrdesa_1.set('fieldLabels', {'ArcIds': 'no label', 'AREA': 'inline label', 'PERIMETER': 'no label', 'IFN3220': 'no label', 'ifn322_ESP': 'no label', 'tablas_ifn': 'header label', });
lyr_MapaForestalTorlaOrdesa_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});