import {useRef, useEffect} from 'react';
import {Marker,Icon,layerGroup} from 'leaflet';
import useMap from '../../hooks/use-map';

import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';
import { store } from '../../store/store';

import { useSelector } from 'react-redux/es/hooks/useSelector';

type MapProps = {
  selectedPointId: string | null ;
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

export default function Map({selectedPointId} : MapProps) : JSX.Element {

  const currentState = store.getState();
  const cityName = useSelector(() => store.getState().city);
  const currentOffersByCity = currentState.offers.filter((itemCard) => itemCard.city.name === cityName);
  const currentCity = currentOffersByCity[0].city;

  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      currentOffersByCity.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedPointId !== undefined && offer.id === selectedPointId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, currentOffersByCity, selectedPointId]);

  return(
    <section className="cities__map map" ref={mapRef} id={cityName}>
    </section>
  );
}
