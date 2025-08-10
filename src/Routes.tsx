import { BrowserRouter as Router, Routes as RouterRoutes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home/index';

const Routes = () => {
    return (
        <Router>
            <RouterRoutes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </RouterRoutes>
        </Router>
    );
}

export default Routes;