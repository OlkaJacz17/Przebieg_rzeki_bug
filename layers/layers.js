var wms_layers = [];

var lyr_Raster_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/StandardResolution",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Raster",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Raster',
                            popuplayertitle: 'Raster',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Raster_0, 0]);
var format_sentinel_his_1 = new ol.format.GeoJSON();
var features_sentinel_his_1 = format_sentinel_his_1.readFeatures(json_sentinel_his_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sentinel_his_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sentinel_his_1.addFeatures(features_sentinel_his_1);
var lyr_sentinel_his_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sentinel_his_1, 
                style: style_sentinel_his_1,
                popuplayertitle: 'sentinel_his',
                interactive: true,
    title: 'sentinel_his<br />\
    <img src="styles/legend/sentinel_his_1_0.png" /> -93 - -55<br />\
    <img src="styles/legend/sentinel_his_1_1.png" /> -55 - -16<br />\
    <img src="styles/legend/sentinel_his_1_2.png" /> -16 - 22<br />\
    <img src="styles/legend/sentinel_his_1_3.png" /> 22 - 61<br />\
    <img src="styles/legend/sentinel_his_1_4.png" /> 61 - 100<br />' });
var format_vmap_his_2 = new ol.format.GeoJSON();
var features_vmap_his_2 = format_vmap_his_2.readFeatures(json_vmap_his_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vmap_his_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vmap_his_2.addFeatures(features_vmap_his_2);
var lyr_vmap_his_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vmap_his_2, 
                style: style_vmap_his_2,
                popuplayertitle: 'vmap_his',
                interactive: true,
    title: 'vmap_his<br />\
    <img src="styles/legend/vmap_his_2_0.png" /> -92 - -53<br />\
    <img src="styles/legend/vmap_his_2_1.png" /> -53 - -15<br />\
    <img src="styles/legend/vmap_his_2_2.png" /> -15 - 23<br />\
    <img src="styles/legend/vmap_his_2_3.png" /> 23 - 61<br />\
    <img src="styles/legend/vmap_his_2_4.png" /> 61 - 100<br />' });
var format_sentinel_vmap_3 = new ol.format.GeoJSON();
var features_sentinel_vmap_3 = format_sentinel_vmap_3.readFeatures(json_sentinel_vmap_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sentinel_vmap_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sentinel_vmap_3.addFeatures(features_sentinel_vmap_3);
var lyr_sentinel_vmap_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sentinel_vmap_3, 
                style: style_sentinel_vmap_3,
                popuplayertitle: 'sentinel_vmap',
                interactive: true,
    title: 'sentinel_vmap<br />\
    <img src="styles/legend/sentinel_vmap_3_0.png" /> -88 - -65<br />\
    <img src="styles/legend/sentinel_vmap_3_1.png" /> -65 - -41<br />\
    <img src="styles/legend/sentinel_vmap_3_2.png" /> -41 - -18<br />\
    <img src="styles/legend/sentinel_vmap_3_3.png" /> -18 - 6<br />\
    <img src="styles/legend/sentinel_vmap_3_4.png" /> 6 - 29<br />' });
var format_mapa_his_export_4 = new ol.format.GeoJSON();
var features_mapa_his_export_4 = format_mapa_his_export_4.readFeatures(json_mapa_his_export_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mapa_his_export_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapa_his_export_4.addFeatures(features_mapa_his_export_4);
var lyr_mapa_his_export_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mapa_his_export_4, 
                style: style_mapa_his_export_4,
                popuplayertitle: 'mapa_his_export',
                interactive: true,
                title: '<img src="styles/legend/mapa_his_export_4.png" /> mapa_his_export'
            });
var format_vmap_1990_export_5 = new ol.format.GeoJSON();
var features_vmap_1990_export_5 = format_vmap_1990_export_5.readFeatures(json_vmap_1990_export_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vmap_1990_export_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vmap_1990_export_5.addFeatures(features_vmap_1990_export_5);
var lyr_vmap_1990_export_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vmap_1990_export_5, 
                style: style_vmap_1990_export_5,
                popuplayertitle: 'vmap_1990_export',
                interactive: true,
                title: '<img src="styles/legend/vmap_1990_export_5.png" /> vmap_1990_export'
            });
var format_sentinel_2024_export_6 = new ol.format.GeoJSON();
var features_sentinel_2024_export_6 = format_sentinel_2024_export_6.readFeatures(json_sentinel_2024_export_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sentinel_2024_export_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sentinel_2024_export_6.addFeatures(features_sentinel_2024_export_6);
var lyr_sentinel_2024_export_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sentinel_2024_export_6, 
                style: style_sentinel_2024_export_6,
                popuplayertitle: 'sentinel_2024_export',
                interactive: true,
                title: '<img src="styles/legend/sentinel_2024_export_6.png" /> sentinel_2024_export'
            });
var format_union_export_7 = new ol.format.GeoJSON();
var features_union_export_7 = format_union_export_7.readFeatures(json_union_export_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_union_export_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_union_export_7.addFeatures(features_union_export_7);
var lyr_union_export_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_union_export_7, 
                style: style_union_export_7,
                popuplayertitle: 'union_export',
                interactive: true,
                title: '<img src="styles/legend/union_export_7.png" /> union_export'
            });
var format_rzeka_plynie_zawsze_8 = new ol.format.GeoJSON();
var features_rzeka_plynie_zawsze_8 = format_rzeka_plynie_zawsze_8.readFeatures(json_rzeka_plynie_zawsze_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rzeka_plynie_zawsze_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rzeka_plynie_zawsze_8.addFeatures(features_rzeka_plynie_zawsze_8);
var lyr_rzeka_plynie_zawsze_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rzeka_plynie_zawsze_8, 
                style: style_rzeka_plynie_zawsze_8,
                popuplayertitle: 'rzeka_plynie_zawsze',
                interactive: true,
                title: '<img src="styles/legend/rzeka_plynie_zawsze_8.png" /> rzeka_plynie_zawsze'
            });

lyr_Raster_0.setVisible(true);lyr_sentinel_his_1.setVisible(true);lyr_vmap_his_2.setVisible(true);lyr_sentinel_vmap_3.setVisible(true);lyr_mapa_his_export_4.setVisible(true);lyr_vmap_1990_export_5.setVisible(true);lyr_sentinel_2024_export_6.setVisible(true);lyr_union_export_7.setVisible(true);lyr_rzeka_plynie_zawsze_8.setVisible(true);
var layersList = [lyr_Raster_0,lyr_sentinel_his_1,lyr_vmap_his_2,lyr_sentinel_vmap_3,lyr_mapa_his_export_4,lyr_vmap_1990_export_5,lyr_sentinel_2024_export_6,lyr_union_export_7,lyr_rzeka_plynie_zawsze_8];
lyr_sentinel_his_1.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'grid_id': 'grid_id', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'sen_his': 'sen_his', 'sen_vmap': 'sen_vmap', 'vmap_his': 'vmap_his', 'objectid_1': 'objectid_1', 'objectid_2': 'objectid_2', 'area': 'area', 'percentage': 'percentage', 'objectid_3': 'objectid_3', 'objectid_4': 'objectid_4', 'area_1': 'area_1', 'percenta_1': 'percenta_1', 'objectid_5': 'objectid_5', 'objectid_6': 'objectid_6', 'area_12': 'area_12', 'percenta_2': 'percenta_2', });
lyr_vmap_his_2.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'grid_id': 'grid_id', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'sen_his': 'sen_his', 'sen_vmap': 'sen_vmap', 'vmap_his': 'vmap_his', 'objectid_1': 'objectid_1', 'objectid_2': 'objectid_2', 'area': 'area', 'percentage': 'percentage', 'objectid_3': 'objectid_3', 'objectid_4': 'objectid_4', 'area_1': 'area_1', 'percenta_1': 'percenta_1', 'objectid_5': 'objectid_5', 'objectid_6': 'objectid_6', 'area_12': 'area_12', 'percenta_2': 'percenta_2', });
lyr_sentinel_vmap_3.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'grid_id': 'grid_id', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'sen_his': 'sen_his', 'sen_vmap': 'sen_vmap', 'vmap_his': 'vmap_his', 'objectid_1': 'objectid_1', 'objectid_2': 'objectid_2', 'area': 'area', 'percentage': 'percentage', 'objectid_3': 'objectid_3', 'objectid_4': 'objectid_4', 'area_1': 'area_1', 'percenta_1': 'percenta_1', 'objectid_5': 'objectid_5', 'objectid_6': 'objectid_6', 'area_12': 'area_12', 'percenta_2': 'percenta_2', });
lyr_mapa_his_export_4.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_vmap_1990_export_5.set('fieldAliases', {'qc_id': 'qc_id', 'dlug_brzeg': 'dlug_brzeg', 'dlugosc': 'dlugosc', 'dokladnosc': 'dokladnosc', 'dostepnosc': 'dostepnosc', 'glebokosc': 'glebokosc', 'istnienie': 'istnienie', 'kat_hydro': 'kat_hydro', 'kat_plywu': 'kat_plywu', 'kat_pojemn': 'kat_pojemn', 'kat_poloz': 'kat_poloz', 'kat_wody': 'kat_wody', 'najw_wys': 'najw_wys', 'nazwa': 'nazwa', 'obiekt': 'obiekt', 'opr_upust': 'opr_upust', 'opr_zburz': 'opr_zburz', 'poch_hydro': 'poch_hydro', 'pred_przep': 'pred_przep', 'srednia_gl': 'srednia_gl', 'stat_ekspl': 'stat_ekspl', 'szerokosc': 'szerokosc', 'tajnosc': 'tajnosc', 'typ_akwed': 'typ_akwed', 'typ_wybrz': 'typ_wybrz', 'zn_orient': 'zn_orient', 'powierzchn': 'powierzchn', 'id': 'id', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_sentinel_2024_export_6.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'gridcode': 'gridcode', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_union_export_7.set('fieldAliases', {'qc_id': 'qc_id', 'fid_raster': 'fid_raster', 'id': 'id', 'gridcode': 'gridcode', 'fid_bug_me': 'fid_bug_me', 'id_1': 'id_1', 'fid_hydro_': 'fid_hydro_', 'dlug_brzeg': 'dlug_brzeg', 'dlugosc': 'dlugosc', 'dokladnosc': 'dokladnosc', 'dostepnosc': 'dostepnosc', 'glebokosc': 'glebokosc', 'istnienie': 'istnienie', 'kat_hydro': 'kat_hydro', 'kat_plywu': 'kat_plywu', 'kat_pojemn': 'kat_pojemn', 'kat_poloz': 'kat_poloz', 'kat_wody': 'kat_wody', 'najw_wys': 'najw_wys', 'nazwa': 'nazwa', 'obiekt': 'obiekt', 'opr_upust': 'opr_upust', 'opr_zburz': 'opr_zburz', 'poch_hydro': 'poch_hydro', 'pred_przep': 'pred_przep', 'srednia_gl': 'srednia_gl', 'stat_ekspl': 'stat_ekspl', 'szerokosc': 'szerokosc', 'tajnosc': 'tajnosc', 'typ_akwed': 'typ_akwed', 'typ_wybrz': 'typ_wybrz', 'zn_orient': 'zn_orient', 'powierzchn': 'powierzchn', 'id_12': 'id_12', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_rzeka_plynie_zawsze_8.set('fieldAliases', {'qc_id': 'qc_id', 'fid_raster': 'fid_raster', 'id': 'id', 'gridcode': 'gridcode', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'fid_hydro_': 'fid_hydro_', 'dlug_brzeg': 'dlug_brzeg', 'dlugosc': 'dlugosc', 'dokladnosc': 'dokladnosc', 'dostepnosc': 'dostepnosc', 'glebokosc': 'glebokosc', 'istnienie': 'istnienie', 'kat_hydro': 'kat_hydro', 'kat_plywu': 'kat_plywu', 'kat_pojemn': 'kat_pojemn', 'kat_poloz': 'kat_poloz', 'kat_wody': 'kat_wody', 'najw_wys': 'najw_wys', 'nazwa': 'nazwa', 'obiekt': 'obiekt', 'opr_upust': 'opr_upust', 'opr_zburz': 'opr_zburz', 'poch_hydro': 'poch_hydro', 'pred_przep': 'pred_przep', 'srednia_gl': 'srednia_gl', 'stat_ekspl': 'stat_ekspl', 'szerokosc': 'szerokosc', 'tajnosc': 'tajnosc', 'typ_akwed': 'typ_akwed', 'typ_wybrz': 'typ_wybrz', 'zn_orient': 'zn_orient', 'powierzchn': 'powierzchn', 'id_1': 'id_1', 'shape_le_1': 'shape_le_1', 'shape_ar_1': 'shape_ar_1', 'fid_bug_me': 'fid_bug_me', 'id_12': 'id_12', 'shape_le_2': 'shape_le_2', 'shape_ar_2': 'shape_ar_2', });
lyr_sentinel_his_1.set('fieldImages', {'qc_id': 'TextEdit', 'fid': 'TextEdit', 'grid_id': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'sen_his': 'TextEdit', 'sen_vmap': 'TextEdit', 'vmap_his': 'TextEdit', 'objectid_1': 'Range', 'objectid_2': 'TextEdit', 'area': 'TextEdit', 'percentage': 'TextEdit', 'objectid_3': 'Range', 'objectid_4': 'TextEdit', 'area_1': 'TextEdit', 'percenta_1': 'TextEdit', 'objectid_5': 'Range', 'objectid_6': 'TextEdit', 'area_12': 'TextEdit', 'percenta_2': 'TextEdit', });
lyr_vmap_his_2.set('fieldImages', {'qc_id': '', 'fid': '', 'grid_id': '', 'shape_leng': '', 'shape_area': '', 'sen_his': '', 'sen_vmap': '', 'vmap_his': 'TextEdit', 'objectid_1': '', 'objectid_2': '', 'area': '', 'percentage': '', 'objectid_3': '', 'objectid_4': '', 'area_1': '', 'percenta_1': '', 'objectid_5': '', 'objectid_6': '', 'area_12': '', 'percenta_2': '', });
lyr_sentinel_vmap_3.set('fieldImages', {'qc_id': '', 'fid': '', 'grid_id': '', 'shape_leng': '', 'shape_area': '', 'sen_his': '', 'sen_vmap': '', 'vmap_his': 'TextEdit', 'objectid_1': '', 'objectid_2': '', 'area': '', 'percentage': '', 'objectid_3': '', 'objectid_4': '', 'area_1': '', 'percenta_1': '', 'objectid_5': '', 'objectid_6': '', 'area_12': '', 'percenta_2': '', });
lyr_mapa_his_export_4.set('fieldImages', {'qc_id': '', 'id': '', 'shape_leng': '', 'shape_area': '', });
lyr_vmap_1990_export_5.set('fieldImages', {'qc_id': '', 'dlug_brzeg': '', 'dlugosc': '', 'dokladnosc': '', 'dostepnosc': '', 'glebokosc': '', 'istnienie': '', 'kat_hydro': '', 'kat_plywu': '', 'kat_pojemn': '', 'kat_poloz': '', 'kat_wody': '', 'najw_wys': '', 'nazwa': '', 'obiekt': '', 'opr_upust': '', 'opr_zburz': '', 'poch_hydro': '', 'pred_przep': '', 'srednia_gl': '', 'stat_ekspl': '', 'szerokosc': '', 'tajnosc': '', 'typ_akwed': '', 'typ_wybrz': '', 'zn_orient': '', 'powierzchn': '', 'id': '', 'shape_leng': '', 'shape_area': '', });
lyr_sentinel_2024_export_6.set('fieldImages', {'qc_id': '', 'id': '', 'gridcode': 'TextEdit', 'shape_leng': '', 'shape_area': '', });
lyr_union_export_7.set('fieldImages', {'qc_id': '', 'fid_raster': '', 'id': '', 'gridcode': 'TextEdit', 'fid_bug_me': '', 'id_1': '', 'fid_hydro_': '', 'dlug_brzeg': '', 'dlugosc': '', 'dokladnosc': '', 'dostepnosc': '', 'glebokosc': '', 'istnienie': '', 'kat_hydro': '', 'kat_plywu': '', 'kat_pojemn': '', 'kat_poloz': '', 'kat_wody': '', 'najw_wys': '', 'nazwa': '', 'obiekt': '', 'opr_upust': '', 'opr_zburz': '', 'poch_hydro': '', 'pred_przep': '', 'srednia_gl': '', 'stat_ekspl': '', 'szerokosc': '', 'tajnosc': '', 'typ_akwed': '', 'typ_wybrz': '', 'zn_orient': '', 'powierzchn': '', 'id_12': '', 'shape_leng': '', 'shape_area': '', });
lyr_rzeka_plynie_zawsze_8.set('fieldImages', {'qc_id': '', 'fid_raster': '', 'id': '', 'gridcode': 'TextEdit', 'shape_leng': '', 'shape_area': '', 'fid_hydro_': '', 'dlug_brzeg': '', 'dlugosc': '', 'dokladnosc': '', 'dostepnosc': '', 'glebokosc': '', 'istnienie': '', 'kat_hydro': '', 'kat_plywu': '', 'kat_pojemn': '', 'kat_poloz': '', 'kat_wody': '', 'najw_wys': '', 'nazwa': '', 'obiekt': '', 'opr_upust': '', 'opr_zburz': '', 'poch_hydro': '', 'pred_przep': '', 'srednia_gl': '', 'stat_ekspl': '', 'szerokosc': '', 'tajnosc': '', 'typ_akwed': '', 'typ_wybrz': '', 'zn_orient': '', 'powierzchn': '', 'id_1': '', 'shape_le_1': '', 'shape_ar_1': '', 'fid_bug_me': '', 'id_12': '', 'shape_le_2': '', 'shape_ar_2': '', });
lyr_sentinel_his_1.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'grid_id': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'sen_his': 'no label', 'sen_vmap': 'no label', 'vmap_his': 'no label', 'objectid_1': 'no label', 'objectid_2': 'no label', 'area': 'no label', 'percentage': 'no label', 'objectid_3': 'no label', 'objectid_4': 'no label', 'area_1': 'no label', 'percenta_1': 'no label', 'objectid_5': 'no label', 'objectid_6': 'no label', 'area_12': 'no label', 'percenta_2': 'no label', });
lyr_vmap_his_2.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'grid_id': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'sen_his': 'no label', 'sen_vmap': 'no label', 'vmap_his': 'no label', 'objectid_1': 'no label', 'objectid_2': 'no label', 'area': 'no label', 'percentage': 'no label', 'objectid_3': 'no label', 'objectid_4': 'no label', 'area_1': 'no label', 'percenta_1': 'no label', 'objectid_5': 'no label', 'objectid_6': 'no label', 'area_12': 'no label', 'percenta_2': 'no label', });
lyr_sentinel_vmap_3.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'grid_id': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'sen_his': 'no label', 'sen_vmap': 'no label', 'vmap_his': 'no label', 'objectid_1': 'no label', 'objectid_2': 'no label', 'area': 'no label', 'percentage': 'no label', 'objectid_3': 'no label', 'objectid_4': 'no label', 'area_1': 'no label', 'percenta_1': 'no label', 'objectid_5': 'no label', 'objectid_6': 'no label', 'area_12': 'no label', 'percenta_2': 'no label', });
lyr_mapa_his_export_4.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_vmap_1990_export_5.set('fieldLabels', {'qc_id': 'no label', 'dlug_brzeg': 'no label', 'dlugosc': 'no label', 'dokladnosc': 'no label', 'dostepnosc': 'no label', 'glebokosc': 'no label', 'istnienie': 'no label', 'kat_hydro': 'no label', 'kat_plywu': 'no label', 'kat_pojemn': 'no label', 'kat_poloz': 'no label', 'kat_wody': 'no label', 'najw_wys': 'no label', 'nazwa': 'no label', 'obiekt': 'no label', 'opr_upust': 'no label', 'opr_zburz': 'no label', 'poch_hydro': 'no label', 'pred_przep': 'no label', 'srednia_gl': 'no label', 'stat_ekspl': 'no label', 'szerokosc': 'no label', 'tajnosc': 'no label', 'typ_akwed': 'no label', 'typ_wybrz': 'no label', 'zn_orient': 'no label', 'powierzchn': 'no label', 'id': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_sentinel_2024_export_6.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'gridcode': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_union_export_7.set('fieldLabels', {'qc_id': 'no label', 'fid_raster': 'no label', 'id': 'no label', 'gridcode': 'no label', 'fid_bug_me': 'no label', 'id_1': 'no label', 'fid_hydro_': 'no label', 'dlug_brzeg': 'no label', 'dlugosc': 'no label', 'dokladnosc': 'no label', 'dostepnosc': 'no label', 'glebokosc': 'no label', 'istnienie': 'no label', 'kat_hydro': 'no label', 'kat_plywu': 'no label', 'kat_pojemn': 'no label', 'kat_poloz': 'no label', 'kat_wody': 'no label', 'najw_wys': 'no label', 'nazwa': 'no label', 'obiekt': 'no label', 'opr_upust': 'no label', 'opr_zburz': 'no label', 'poch_hydro': 'no label', 'pred_przep': 'no label', 'srednia_gl': 'no label', 'stat_ekspl': 'no label', 'szerokosc': 'no label', 'tajnosc': 'no label', 'typ_akwed': 'no label', 'typ_wybrz': 'no label', 'zn_orient': 'no label', 'powierzchn': 'no label', 'id_12': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_rzeka_plynie_zawsze_8.set('fieldLabels', {'qc_id': 'no label', 'fid_raster': 'no label', 'id': 'no label', 'gridcode': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'fid_hydro_': 'no label', 'dlug_brzeg': 'no label', 'dlugosc': 'no label', 'dokladnosc': 'no label', 'dostepnosc': 'no label', 'glebokosc': 'no label', 'istnienie': 'no label', 'kat_hydro': 'no label', 'kat_plywu': 'no label', 'kat_pojemn': 'no label', 'kat_poloz': 'no label', 'kat_wody': 'no label', 'najw_wys': 'no label', 'nazwa': 'no label', 'obiekt': 'no label', 'opr_upust': 'no label', 'opr_zburz': 'no label', 'poch_hydro': 'no label', 'pred_przep': 'no label', 'srednia_gl': 'no label', 'stat_ekspl': 'no label', 'szerokosc': 'no label', 'tajnosc': 'no label', 'typ_akwed': 'no label', 'typ_wybrz': 'no label', 'zn_orient': 'no label', 'powierzchn': 'no label', 'id_1': 'no label', 'shape_le_1': 'no label', 'shape_ar_1': 'no label', 'fid_bug_me': 'no label', 'id_12': 'no label', 'shape_le_2': 'no label', 'shape_ar_2': 'no label', });
lyr_rzeka_plynie_zawsze_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});