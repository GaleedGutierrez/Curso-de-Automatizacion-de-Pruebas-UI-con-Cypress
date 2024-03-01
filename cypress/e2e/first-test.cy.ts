describe('First test', () => {
	it('Navigate to our fist page', () => {
		cy.visit('https://platzi.com/');
	});
	it('Navigate to our second page', () => {
		cy.visit('https://google.com/');
	});
});
