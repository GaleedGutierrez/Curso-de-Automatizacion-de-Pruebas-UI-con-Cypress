import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		excludeSpecPattern: [
			'**/1-getting-started/*.js',
			'**/2-advanced-examples/*.js',
		],
	},
	viewportWidth: 1280,
	viewportHeight: 720,
});
