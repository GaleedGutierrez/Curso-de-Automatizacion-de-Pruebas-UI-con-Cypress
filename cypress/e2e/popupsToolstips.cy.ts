Cypress.on('uncaught:exception', () => false);

describe('Interacting with modals and popups', function () {
	it('Interacting with modals', function () {
		cy.visit('/modal-dialogs');
		cy.get('#showSmallModal').click();
		cy.get('#closeSmallModal').click();
	});

	it('Interacting with popups', function () {
		const stub = cy.stub();

		cy.visit('/alerts');
		cy.on('window:confirm', stub);
		cy.get('#confirmButton').click();
		cy.then(() => {
			expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?');
		});
		cy.contains('You selected Ok').should('exist');
	});

	it('Interacting with popups 2', function () {
		cy.visit('/alerts');
		cy.get('#confirmButton').click();
		cy.on('window:confirm', (confirm) => {
			expect(confirm).to.equal('Do you confirm action?');
		});
	});

	it('Interacting with popups cancel', function () {
		cy.visit('/alerts');
		cy.get('#confirmButton').click();
		cy.on('window:confirm', (confirm) => {
			expect(confirm).to.equal('Do you confirm action?');

			return false;
		});
		cy.contains('You selected Cancel').should('exist');
	});

	it('Interacting with tooltips', function () {
		cy.visit('/tool-tips');
		cy.get('#toolTipButton').trigger('mouseover');
		cy.contains('You hovered over the Button').should('exist');
		cy.get('#toolTipButton').trigger('mouseout');
		cy.contains('You hovered over the Button').should('not.exist');
	});
});
