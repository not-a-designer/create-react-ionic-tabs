module.exports = `
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { IonTabs, 
         IonTabBar, 
         IonTabButton, 
         IonIcon, 
         IonLabel, 
         IonRouterOutlet } from '@ionic/react';

import Tab1 from '../Tab1/Tab1';
import Tab2 from '../Tab2/Tab2';
import Tab3 from '../Tab3/Tab3';


class Tabs extends Component {
    
    state = {};

    render() {
        return (
            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/:tab(tab1)" component={Tab1} exact />
                    <Route path="/:tab(tab2)" component={Tab2} exact />
                    <Route path="/:tab(tab3)" component={Tab3} exact />
                    <Route path="/" render={() => <Redirect to="/tab1" />} />
                </IonRouterOutlet>

                <IonTabBar slot="bottom">
                    <IonTabButton tab="components" href="/tab1">
                        <IonIcon name="home" />
                        <IonLabel>Tab One</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="overlays" href="/tab2">
                        <IonIcon name="apps" />
                        <IonLabel>Tab Two</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab3" href="/tab3">
                        <IonIcon name="send" />
                        <IonLabel>Tab Three</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        );
    }
}


export default Tabs;
`;