module.exports = `
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { IonApp, IonPage } from '@ionic/react';
import './App.css';
import Tabs from './pages/Tabs/Tabs';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';


class App extends Component {

    state = {};

    render() {
        return (
            <Router>
                <IonApp>
                    <IonPage id="main">
                        <Route path="/" component={Tabs} />
                    </IonPage>
                </IonApp>
            </Router>
        );
    }
}


export default App;
`;