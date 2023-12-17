import {
	BrowserRouter
	as Router,
	Route,
	Routes,
	Navigate
} from 'react-router-dom';
//import Home from '../pages/home';
import ResultPage from '../pages/resultPage';
import NewForm from '../pages/home/newform';
import HelpPage from '../pages/HelpPage';


const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<NewForm />} />
				<Route path="/search" element={ <ResultPage /> } />
				<Route path="/help/search" element={ <HelpPage /> }/>
				<Route path="*" element={<Navigate replace to="/"/>} />

				
			</Routes>
		</Router>
	);
};
export default AppRoutes;