import {useState, useRef, useEffect} from 'react';
import {Map, TileLayer} from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapComponent():JSX.Element {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  const mapRef = useRef(null);


  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map (mapRef.current, {
        center: {
          lat: 52.3909553943508,
          lng: 4.85309666406198
        },
        zoom: 10
      });

      const layer = new TileLayer (
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png)',
        {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        })

      instance.addLayer(layer);
      setMap(instance);
    }

  },[mapRef]);

return(
  <section className="cities__map map" ref={mapRef}>

  </section>
)
}
