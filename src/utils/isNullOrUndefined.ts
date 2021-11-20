export function isNullOrUndefined<T>(
	value: T | undefined | null
): value is null | undefined {
	return typeof value === 'undefined' || value === null;
}
