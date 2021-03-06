import { useCallback, useState } from 'react';

type TStatus = 'IDLE' | 'PROCESSING' | 'ERROR' | 'SUCCESS';

export default function useAsyncTask<T extends unknown[], R = unknown>(
	task: (...args: T) => Promise<R>
) {
	const [status, setStatus] = useState<TStatus>('IDLE');
	const [message, setMessage] = useState('');

	const run = useCallback(
		async (...arg: T) => {
			setStatus('PROCESSING');
			try {
				const resp: R = await task(...arg);
				setStatus('SUCCESS');
				return resp;
			} catch (error) {
				const message =
					error?.response?.data?.error?.message || error.message;
				setMessage(message);
				setStatus('ERROR');
				throw error;
			}
		},
		[task]
	);

	const reset = useCallback(() => {
		setMessage('');
		setStatus('IDLE');
	}, []);

	return {
		run,
		status,
		message,
		reset
	};
}
