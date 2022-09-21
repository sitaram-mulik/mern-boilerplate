import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './features/home/Home';

const AppRouter = (): JSX.Element => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
