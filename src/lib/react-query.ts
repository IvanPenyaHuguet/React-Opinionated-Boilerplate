import {
	QueryClient,
	UseQueryOptions,
	UseMutationOptions,
	DefaultOptions
} from 'react-query';
import { PromiseValue } from 'type-fest';

const queryConfig: DefaultOptions = {
	queries: {
		useErrorBoundary: true,
		refetchOnWindowFocus: false,
		retry: false
	}
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

export type QueryConfig<FetcherFnType extends (...args: unknown[]) => unknown> =
	UseQueryOptions<PromiseValue<ReturnType<FetcherFnType>>>;

export type MutationConfig<
	FetcherFnType extends (...args: unknown[]) => unknown
> = UseMutationOptions<
	PromiseValue<ReturnType<FetcherFnType>>,
	Parameters<FetcherFnType>[0]
>;
