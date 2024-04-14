import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppRoutes from './routes/Routes';

import { ThemeProvider } from './context/ThemeContext';

import MainLayout from './components/MainLayout';

import { store } from './store';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Provider store={store}>
			<ThemeProvider>
				<MainLayout>
					<AppRoutes />
				</MainLayout>
			</ThemeProvider>
		</Provider>
	</BrowserRouter>
);
