Cypress.on('uncaught:exception', () => false);

describe('Interacting with dates pickers', function () {
	beforeEach(function () {
		cy.visit('https://material.angular.io/components/datepicker/overview');
	});

	it('should select a date', function () {
		cy.get('datepicker-overview-example input');
		cy.get('datepicker-overview-example').find('label');
		cy.get('datepicker-overview-example label').click();
		cy.get('datepicker-overview-example label').type('11/11/1971');

		// cy.get(
		// 	'datepicker-overview-example mat-datepicker-toggle button',
		// ).click();
		cy.get('datepicker-overview-example')
			.find('mat-datepicker-toggle')
			.find('button')
			.click();
	});
});
