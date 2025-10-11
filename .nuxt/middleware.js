const middleware = {}

middleware['utm'] = require('../middleware/utm.js')
middleware['utm'] = middleware['utm'].default || middleware['utm']

export default middleware
