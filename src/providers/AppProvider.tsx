import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { queryClient } from '@/lib/react-query';
import { ErrorFallback, Fallback } from '@/components/layouts';
import AppRouter from '@/routes/AppRouter';

type AppProviderProps = {
	children: React.ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
	return (
		<React.Suspense fallback={Fallback}>
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<HelmetProvider>
					<QueryClientProvider client={queryClient}>
						{process.env.NODE_ENV !== 'test' && (
							<ReactQueryDevtools />
						)}
						<AppRouter>{children}</AppRouter>
					</QueryClientProvider>
				</HelmetProvider>
			</ErrorBoundary>
		</React.Suspense>
	);
}
