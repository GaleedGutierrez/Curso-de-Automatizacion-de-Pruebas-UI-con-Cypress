Cypress.on('uncaught:exception', () => false);

describe('Extract info from form', function () {
	beforeEach(function () {
		cy.visit('/automation-practice-form');
	});

	it('Extraction info', function () {
		cy.get('#firstName').as('name');
		cy.get('@name').type('Galeed');
		cy.get('@name').then(($name) => {
			expect($name.val()).to.equal('Galeed');
		});
		// Esta última linea funciona igual que lo que tenemos arriba
		// cy.get('@name').invoke('val').should('equal', 'Galeed');
		// cy.get('@name').invoke('val').as('globalName');
	});

	it('Invoke', function () {
		cy.get('#firstName').as('name');
		cy.get('@name').type('Galeed');
		cy.get('@name').invoke('val').should('equal', 'Galeed');
		cy.get('@name').invoke('val').as('globalName');
	});

	it('Share info between assertions', function () {
		// El código funciona pero tenemos ese error con typescript.
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		cy.get('#firstName').type(this.globalName);
	});
});
