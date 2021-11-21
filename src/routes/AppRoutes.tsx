import { Route, ReactLocation } from 'react-location';
import { MainPage } from '@/features/MainPage';

export const AppRoutes: Route[] = [
	{
		path: '/',
		element: <MainPage />
	}
];

export const location = new ReactLocation();
