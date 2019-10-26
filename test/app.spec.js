// See the setup.js file where these globals are set
// and use the: 'npm t -- --watch' to load this configuration

const app = require('../src/app');

describe('App', () => {
	it('GET / responds with 200 containing "With a little help from my friends!"', () => {
		return supertest(app)
		.get('/')
		.expect(200, 'With a little help from my friends!')
	})
})