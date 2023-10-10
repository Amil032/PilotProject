import React, { useEffect, useRef } from "react";
import "ol/ol.css"; // Import OpenLayers CSS
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature";
import { LineString } from "ol/geom";
import { Style, Stroke } from "ol/style";
import WKT from "ol/format/WKT";
import { parseLineString } from "../utils/parseLineString";
const LineStringMap = ({ coordinatesString }) => {
  const mapRef = useRef(null);
  const vectorLayerRef = useRef(null);

  useEffect(() => {
    // Parse the WKT LineString
    const coordsString = parseLineString(coordinatesString);
    const coordinates = coordsString.coordinates.map((coords) =>
      fromLonLat(coords)
    );
    const lineString = new LineString(coordinates);
    console.log(lineString);
    const wkt = lineString;
    const format = new WKT();
    const feature = new Feature({
      geometry: lineString,
    });
    // const feature = format.readFeature(wkt);

    // Create a VectorSource and VectorLayer for the LineString
    const vectorSource = new VectorSource({
      features: [feature],
    });

    vectorLayerRef.current = new VectorLayer({
      source: vectorSource,
      style: new Style({
        stroke: new Stroke({
          color: "red", // Set the color to red
          width: 10,
        }),
      }),
    });

    // Create a map
    mapRef.current = new Map({
      target: "map", // The ID of the div element to render the map
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayerRef.current,
      ],
      view: new View({
        center: fromLonLat(coordsString.center), // Center of the map
        zoom: 16, // Zoom level
      }),
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.setTarget(null);
      }
    };
  }, [coordinatesString]);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        backgroundColor: "#555555",
        height: "358px",
        padding: "10px",
        marginTop: "20px",
      }}
    ></div>
  );
};

export default LineStringMap;
