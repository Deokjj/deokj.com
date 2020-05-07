import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {useRoutes} from 'hookrouter';
import App from './App';
// import OldApp from './version0/App';
const OldApp = () => {
    const Component = React.lazy(() => import('./version0/App'));
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Component/>
        </React.Suspense>
    )
};

const routes = {
    '/': () => <App />,
    '/v0': () => <OldApp />
};

const Router = () => {
    const Routes = useRoutes(routes);

    return Routes || <App />
}

ReactDOM.render(<Router/>, document.getElementById('root'));
