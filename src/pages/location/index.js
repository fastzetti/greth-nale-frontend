import Layout from "../../components/Layout";

import Map from "../../components/Map";

import styles from "../../../styles/Location.module.css";

const DEFAULT_CENTER = [47.99279, 7.8405];

export default function Location() {
  return (
    <Layout title="Weg zur Grether Nach(t)lese">
      <h1>Weg zur Grether Nach(t)lese</h1>
      <p>Kleiner Grether Innenhof</p>
      <p>Adlerstraße 12a · neben dem Neubau … Zugang Faulerstraße 14</p>
      <p>79098 Freiburg</p>
      <Map className={styles.homeMap} center={DEFAULT_CENTER} zoom={16}>
        {({ TileLayer, Marker, Popup }) => (
          <>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={DEFAULT_CENTER}>
              <Popup>
                Kleiner Grether Innehof <br />
                Zugang Faulerstraße
              </Popup>
            </Marker>
          </>
        )}
      </Map>
    </Layout>
  );
}
