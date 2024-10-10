import { render } from '../../utils/test-utils'
import { Introduction } from './introduction.component'

import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  http.get('assets/db/introduction-data-en.json', () => {
    return HttpResponse.json({ greeting: 'hello there' })
  }),
)

describe('Introduction Data', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('displays data from backend', async () => {
    server.use(
      http.get('assets/db/introduction-data-en.json', () => {
        return new HttpResponse(null, { status: 404 })
      }),
    )

    //   render(<Introduction />)
    console.log('server: ', server.listen())
  })
})
