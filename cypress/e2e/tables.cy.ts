Cypress.on('uncaught:exception', () => false);

describe('Interacting with tables', function () {
	beforeEach(function () {
		cy.visit('https://www.w3schools.com/html/html_tables.asp');
	});

	it('Select', function () {
		cy.get('#customers')
			.find('th')
			.each(($th) => {
				cy.log($th.text());
			});

		cy.get('#customers')
			.find('th')
			.first()
			.invoke('text')
			.should('equal', 'Company');

		cy.get('#customers')
			.find('th')
			.eq(1)
			.invoke('text')
			.should('equal', 'Contact');

		cy.get('#customers')
			.find('th')
			.eq(2)
			.invoke('text')
			.should('equal', 'Country');
		cy.get('#customers').find('tr').should('have.length', 7);

		cy.get('#customers')
			.find('tr')
			.eq(1)
			.find('td')
			.eq(1)
			.invoke('text')
			.should('equal', 'Maria Anders');

		cy.get('#customers')
			.find('tr')
			.eq(1)
			.find('td')
			.eq(1)
			.then(($td) => {
				const TEXT = $td.text();

				expect(TEXT).to.equal('Maria Anders');
			});
	});
});
