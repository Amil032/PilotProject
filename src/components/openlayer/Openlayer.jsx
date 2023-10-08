import React, { useEffect } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Vector from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import LineString from 'ol/geom/LineString';
import Feature from 'ol/Feature';
import { fromLonLat } from 'ol/proj';
import { easeOut } from 'ol/easing';
import { Style, Stroke } from 'ol/style';

export const OpenLayersMap = () => {
  useEffect(() => {
    const initialCoordinates = fromLonLat([50.32495169140619, 40.38989085252759]);

    const map = new Map({
      target: 'mymap1',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: initialCoordinates,
        zoom: 15,
      }),
    });

    const vectorSource = new VectorSource({
      features: [
        new Feature({
          geometry: new LineString([
            [50.32489718460863, 40.3897112495751],
            [50.32500619720577, 40.39007045577375],
          ]),
        }),
      ],
    });

    const vectorLayer = new Vector({
      source: vectorSource,
      style: new Style({
        stroke: new Stroke({
          color: 'red', // Red border color
          width: 2, // Border width
        }),
      }),
    });

    map.addLayer(vectorLayer);

    // Fly to the specified geometry
    map.getView().animate({
      center: fromLonLat([50.32495169140619, 40.38989085252759]),
      duration: 2000,
      easing: easeOut,
      zoom: 16,
    });
  }, []);

  return <div id="mymap1" style={{ width: '400px', height: '200px' }}></div>;
};


