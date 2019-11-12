

const app = require('../src/app');

describe('App', () => {
	it('GET / responds with 200 containing "Welcome to Hitchcocktober &#127875"', () => {
		return supertest(app)
		.get('/')
		.expect(200, 'Welcome to Hitchcocktober &#127875')
	})
})