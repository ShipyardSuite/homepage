'use strict';

const expect = require('chai').expect;
const fetch = require('node-fetch');

describe('Get status of service', () => {
	it('should return true', async () => {
		await fetch(`http://localhost:8080/homepage/api/status`)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				expect(res.success).to.equal(true);
			});
	});
});
