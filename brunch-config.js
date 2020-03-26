module.exports = {
	files: {
		javascripts: {
			joinTo: {
				'/homepage/vendor.js': /^(?!app)/,
				'/homepage/app.js': /^app/
			}
		},
		stylesheets: { joinTo: '/homepage/app.css' }
	},

	plugins: {
		babel: {
			presets: [ 'latest', 'react' ]
		},
		autoReload: { enabled: true }
	}
};
