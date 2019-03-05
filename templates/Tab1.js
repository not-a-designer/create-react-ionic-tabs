module.exports = `
import React, { Component } from 'react';
import { IonPage, 
         IonContent, 
         IonHeader, 
         IonTitle, 
         IonToolbar, 
         IonButtons, 
         IonMenuButton, 
         IonCard,
         IonImg,
         IonCardHeader,
         IonCardSubtitle,
         IonCardTitle,
         IonCardContent,
         IonList,
         IonListHeader,
         IonLabel,
         IonItem,
         IonIcon} from '@ionic/react';

import shapes from '../../assets/shapes.svg';


class Tab1 extends Component {
    state = {};

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Home</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent padding>
                    <IonCard>
                        <IonImg style={{ maxHeight: '35vh', overflow: 'hidden'}} src={shapes} />
                        <IonCardHeader>
                            <IonCardSubtitle>Get Started</IonCardSubtitle>
                            <IonCardTitle>Welcome to Ionic</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <p>Now that your app has been created, you'll want to start building features and components. Checkout some of the resources below for the next steps.</p>
                        </IonCardContent>
                    </IonCard>
                    <IonList>
                        <IonListHeader>
                            <IonLabel>Resources</IonLabel>
                        </IonListHeader>
                        <IonItem href="https://ionicframework.com/docs/">
                            <IonIcon slot="start" name="book" color="medium" />
                            <IonLabel>Ionic Documentation</IonLabel>
                        </IonItem>
                        <IonItem href="https://ionicframework.com/docs/building/scaffolding">
                            <IonIcon slot="start" name="build" color="medium" />
                            <IonLabel>Scaffold Out Your App</IonLabel>
                        </IonItem>
                        <IonItem href="https://ionicframework.com/docs/layout/structure">
                            <IonIcon slot="start" name="grid" color="medium" />
                            <IonLabel>Change Your App Layout</IonLabel>
                        </IonItem>
                        <IonItem href="https://ionicframework.com/docs/theming/basics">
                            <IonIcon slot="start" name="color-fill" color="medium" />
                            <IonLabel>Theme Your App</IonLabel>
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonPage>
        );
    }
}


export default Tab1;
`;