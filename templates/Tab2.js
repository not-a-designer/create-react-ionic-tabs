module.exports = `
import React, { Component } from 'react';
import { IonPage,
         IonHeader,
         IonToolbar,
         IonTitle,
         IonContent } from '@ionic/react';

class Tab2 extends Component {
    state = {};

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Tab 2</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent padding>
                    Tab 2 content
                </IonContent>
            </IonPage>
        );
    }
}


export default Tab2;
`;