import {useRef, useEffect} from 'react';
import useMap from '../../hooks/use-map';

import {Marker,Icon,layerGroup} from 'leaflet';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';

import type {CityDestination,OfferPreview } from '../../types';
import { useAppSelector } from '../../hooks';

type MapProps = {
  currentCity: CityDestination;
  currentOffers: OfferPreview[];
  typeMap : string;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export default function Map({currentCity, currentOffers, typeMap} : MapProps) : JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);
  const geolocation: [number,number] = [currentCity.location.latitude,currentCity.location.longitude];
  const cardActiveId = useAppSelector((state) => state.cardActiveId);
  const classNameByTypeMap = `${typeMap} map`

  useEffect(() => {
    if (map) {
      map.setView(geolocation);
      const markerLayer = layerGroup().addTo(map);
      currentOffers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            cardActiveId !== undefined && offer.id === cardActiveId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, currentCity, cardActiveId]);

  return(
    <section className={classNameByTypeMap} ref={mapRef} id={currentCity.name}>
    </section>
  );
}

// <section className="offer__map map" ref={mapRef} ></section>
