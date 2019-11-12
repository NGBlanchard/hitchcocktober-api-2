// See the setup.js file where these globals are set
// and use the: 'npm t -- --watch' to load this configuration

const app = require('../src/app');

describe('App', () => {
	it('GET / responds with 200 containing "Welcome to Hitchcocktober &#127875"', () => {
		return supertest(app)
		.get('/')
		.expect(200, 'Welcome to Hitchcocktober &#127875')
	})
})