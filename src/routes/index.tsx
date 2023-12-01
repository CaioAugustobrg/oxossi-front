import {
	BrowserRouter
	as Router,
	Route,
	Routes,
	Navigate
} from 'react-router-dom';
import Home from '../pages/home';
import ResultPage from '../pages/resultPage';


const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path="/search" element={ <ResultPage /> } />
				<Route path="*" element={<Navigate replace to="/"/>} />
				
			</Routes>
		</Router>
	);
};
export default AppRoutes;