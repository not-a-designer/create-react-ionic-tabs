module.exports = `
import React, { Component } from 'react';
import { IonPage,
         IonHeader,
         IonToolbar,
         IonTitle,
         IonContent } from '@ionic/react';

class Tab3 extends Component {
    state = {};

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Tab 3</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent padding>
                    Tab 3 content
                </IonContent>
            </IonPage>
        );
    }
}


export default Tab3;
`;