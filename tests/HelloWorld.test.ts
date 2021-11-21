test('sumar 1 + 2 es igual a 3', () => {
	function suma(a: number, b: number) {
		return a + b;
	}
	expect(suma(1, 2)).toBeNumber();
	expect(suma(1, 2)).toBe(3);
});
