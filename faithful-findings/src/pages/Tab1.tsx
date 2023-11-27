import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer: React.FC = () => {
  const mapStyles: React.CSSProperties = {
    height: '100vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 40.712776,
    lng: -74.005974,
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Maps</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <LoadScript googleMapsApiKey="AIzaSyBnPO1DPagh3DSjh9Tc73MjkuM0bLRl7ks">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
          />
        </LoadScript>
      </IonContent>
    </IonPage>
  );
};

export default MapContainer;

