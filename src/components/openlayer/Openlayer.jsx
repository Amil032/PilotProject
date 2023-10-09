import React, { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import { LineString } from "ol/geom";
import { Stroke, Style } from "ol/style";
import { fromLonLat } from "ol/proj";
import { easeOut } from "ol/easing";
import WKT from "ol/format/WKT";
import { parseLinestring } from "../utils/parseLinestring ";

export const OpenLayersMap = ({ lineString }) => {
  const [layer, setLayer] = useState(null);
  const isFirst = useRef(true);
  const ref = useRef(null);

  useEffect(() => {
    // Create a map
    if (ref.current != null && isFirst.current === true) {
      isFirst.current = false;
      const map = new Map({
        target: ref.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
      });

      // Create a WKT format parser
      const wktFormat = new WKT();

      // Parse the WKT linestring
      const wktString = lineString;
      const feature = wktFormat.readFeature(wktString);

      // Style the linestring with a red color
      feature.setStyle(
        new Style({
          stroke: new Stroke({
            color: "red",
            width: "10px",
          }),
        })
      );
      if (layer) {
        map.removeLayer(layer);
      }

      // Create a vector layer and add the linestring feature to it
      const vectorLayer = new VectorLayer({
        source: new VectorSource({
          features: [feature],
        }),
      });

      // Add the vector layer to the map

      map.addLayer(vectorLayer);
      map.getView().animate({
        center: fromLonLat(parseLinestring(lineString)),
        duration: 2000,
        easing: easeOut,
        zoom: 16,
      });
      setLayer(vectorLayer);
    }
  }, [lineString]);

  return (
    <div
      ref={ref}
      style={{ width: "100%", height: "355px", marginTop: "20px" }}
    ></div>
  );
};
