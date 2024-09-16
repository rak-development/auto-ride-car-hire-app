import { http, HttpResponse } from 'msw'
import { STATUS } from '../constants'

export const handlers = [
  http.get('http://localhost:8000/api/getStatus', () => {
    return HttpResponse.json({
      isActive: STATUS.ACTIVE,
    })
  }),
  http.get('/api/users', () => {
    return HttpResponse.json([
      {
        id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
        firstName: 'John',
        lastName: 'Maverick',
      },
    ])
  }),
  http.post('/api/messages', async ({ request }) => {
    const authToken = request.headers.get('Authorization')
    if (!authToken) {
      return HttpResponse.json({ msg: 'Unauthorized' }, { status: 401 })
    }
    const requestBody = await request.json()
    return HttpResponse.json({ msg: 'Hello World' }, { status: 200 })
  }),
]
