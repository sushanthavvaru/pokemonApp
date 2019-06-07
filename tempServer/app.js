const express = require('express')
const axios = require('axios')
const cors = require('cors')

let app = express();
app.use(cors())
app.get('/getLoc/:id', (req, res) => {
	let id = req.params.id

	axios.get(`https://api.craft-demo.net/pokemon/${id}` ,{ headers: 
		{'x-api-key': 'HHko9Fuxf293b3w56zAJ89s3IcO9D5enaEPIg86l',
		'Access-Control-Allow-Origin': '*'}
	}).then((response) => {

		res.send(response.data)

	})

})



app.listen(4000, () => {
	console.log('server started 4000')
})