import { createServer } from 'miragejs'

const makeServer = () => {
	createServer({
		routes() {
			this.get('/api/feedback', () => ({
				feedback: [{
					"id": 1,
					"rating": 10,
					"text": "This is feedback item 1 coming from the backend"
				},
				{
					"id": 2,
					"rating": 8,
					"text": "This is feedback item 2 coming from the backend"
				},
				{
					"text": "This is feedback item 3 coming from the backend",
					"rating": 10,
					"id": 3
				}],
			}))

			this.post('/api/feedback', (schema, request) => {
				const data = JSON.parse(request.requestBody)

				return {
					...data
				}
			})
		}
	})
}

export default makeServer