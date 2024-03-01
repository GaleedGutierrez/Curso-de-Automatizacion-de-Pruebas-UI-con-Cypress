describe('Navigation', () => {
	it('Navigate to our fist page', () => {
		cy.visit('https://platzi.com/');
	});
	it('Reload page', () => {
		cy.reload();
	});
	it('Force reload', () => {
		cy.visit('https://platzi.com/');
		cy.reload(true);
	});
	it.only('Go back', () => {
		cy.visit('https://www.google.com/');
		cy.visit(
			'https://www.google.com/search?q=platzi&sca_esv=ba63e9e5b9d099c8&sxsrf=ACQVn09jzSlw3Uncr8ygrdKgzEtXc1JeQg%3A1709318704198&source=hp&ei=MCLiZZyPCdTK1sQPu5a6oAk&iflsig=ANes7DEAAAAAZeIwQPdyGhPq_nLherUZzUcdWkVBIuKZ&ved=0ahUKEwic56yx3NOEAxVUpZUCHTuLDpQQ4dUDCBU&uact=5&oq=platzi&gs_lp=Egdnd3Mtd2l6IgZwbGF0emkyChAjGIAEGIoFGCcyBBAjGCcyBBAjGCcyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyBRAAGIAEMgoQABiABBiKBRhDMgoQLhiABBiKBRhDMggQLhiABBixAzIKEAAYgAQYigUYQ0i-EFDJBVi6EHABeACQAQCYAXWgAcQDqgEDMC40uAEDyAEA-AEBmAIFoALUA6gCCsICBxAjGOoCGCfCAgsQABiABBixAxiDAcICDhAuGIAEGIoFGLEDGIMBwgIOEC4YgAQYsQMYxwEY0QPCAgwQIxiABBiKBRgTGCfCAggQABiABBixA5gDBpIHAzEuNA&sclient=gws-wiz',
		);
		// cy.go('back');
		// cy.go('forward');
		cy.go(-1);
		cy.go(1);
	});
});
