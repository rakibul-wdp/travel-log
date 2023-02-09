"use client";

import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { useMap } from "react-leaflet";

import type { TravelLogWithId } from "@/models/TravelLog/TravelLogs";
import { useLayoutEffect } from "react";

const DefaultIcon = L.icon({
  iconUrl: icon.src,
  shadowUrl: iconShadow.src,
  iconSize: [25, 41],
  iconAnchor: [25 / 2, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface TravelLogMapProps {
  logs: TravelLogWithId[];
}

const InitMap = ({ logs }: TravelLogMapProps) => {
  const map = useMap();
  useLayoutEffect(() => {
    map.invalidateSize();
    if (logs.length) {
      const bounds = new L.LatLngBounds(
        logs.map((log) => [log.latitude, log.longitude])
      );
      map.fitBounds(bounds);
    } else {
      map.setZoom(3);
      map.setView([34.85480922648911, -41.89881501280613]);
    }
  }, [map, logs]);
  return null;
};
