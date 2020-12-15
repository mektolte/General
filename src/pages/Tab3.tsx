import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonIcon, IonLabel, IonToggle, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg} from "@ionic/react";
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
            <IonItem class="ion-text-center">
              <IonLabel>About</IonLabel>
            </IonItem>
          </IonList>
          <IonContent class="ion-text-center">
            <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>Head Developer</IonCardSubtitle>
                  <IonCardTitle>Kritmetee Wong Ngern</IonCardTitle>
                  <IonCardSubtitle>201800219</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>Developer</IonCardSubtitle>
                  <IonCardTitle>Rakai Gersom</IonCardTitle>
                  <IonCardSubtitle>201800240</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonContent>
          {/* <ExploreContainer /> */}
        </IonContent>
      </IonPage>
    );
  };


export default Tab3;
