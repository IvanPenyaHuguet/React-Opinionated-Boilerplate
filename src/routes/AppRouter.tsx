import { Router, Outlet } from 'react-location';
import { AppRoutes, location } from './AppRoutes';
import { ReactLocationDevtools } from 'react-location-devtools';

type AppRouterProps = {
	children: React.ReactNode;
};

export default function AppRouter({ children }: AppRouterProps) {
	return (
		<Router location={location} routes={AppRoutes}>
			{children}
			<Outlet />
			{process.env.NODE_ENV !== 'test' && (
				<ReactLocationDevtools
					initialIsOpen={false}
					position="bottom-right"
				/>
			)}
		</Router>
	);
}
