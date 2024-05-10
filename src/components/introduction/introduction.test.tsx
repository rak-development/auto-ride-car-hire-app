import { render } from '../../utils/test-utils'

import { Introduction } from './introduction.component'

import { http, HttpResponse } from 'msw'
import { setupWorker } from 'msw/browser'

// const worker = setupWorker(
//   http.get('https://github.com/octocat', ({ request, params, cookies }) => {
//     return HttpResponse.json(
//       {
//         message: 'Mocked response',
//       },
//       {
//         status: 202,
//         statusText: 'Mocked status',
//       },
//     )
//   }),
// )

// await worker.start()

// describe('Introduction Data', () => {
//   // beforeEach(() => {
//   //   render(<Introduction />)
//   // })

//   it('should fetch introduction data', async () => {
//     // render(<Introduction />)
//   })
// })
