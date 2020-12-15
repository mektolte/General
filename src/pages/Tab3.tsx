import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonIcon, IonLabel, IonToggle} from "@ionic/react";
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { moon } from "ionicons/icons";

const toggleMode = () => {
  document.body.classList.toggle("dark");
};



const Tab3: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList className="ion-margin-top">
            <IonItem>
              <IonIcon
                slot="start"
                icon={moon}
                className="component-icon component-icon-dark"
              />
              <IonLabel>Dark Mode</IonLabel>
              <IonToggle
                slot="end"
                name="darkMode"
                onIonChange={toggleMode}
              />
            </IonItem>
          </IonList>
          {/* <ExploreContainer /> */}
        </IonContent>
      </IonPage>
    );
  };


export default Tab3;
