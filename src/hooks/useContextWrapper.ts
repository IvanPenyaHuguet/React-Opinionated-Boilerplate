import { useContext } from 'react';

export default function useContextWrapper<T>(
	contextValue: React.Context<T>
): T {
	return useContext(contextValue);
}
