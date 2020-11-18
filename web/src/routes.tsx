import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import i_Landing from './pages/landing/i_Landing';
import i_OrphanagesMap from './pages/orphanagesMap/i_OrphanagesMap';

function Routes() {
    return (
        <BrowserRouter>
            <switch>
                <Route path="/" exact component={i_Landing} />
                <Route path="/app" component={i_OrphanagesMap} />
            </switch>
        </BrowserRouter>
    );
}

export default Routes;