export default function ({ route, app }) {

	if (typeof route.query.source !== 'undefined') {
		app.$cookies.set('source', route.query.source, {
			path: '/',
			maxAge: 60 * 60 * 24 * 365
		})
	}
	
}