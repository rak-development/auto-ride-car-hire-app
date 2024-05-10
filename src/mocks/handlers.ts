import { http, HttpResponse } from 'msw'

export const handlers = [
  /**
   * Example of a request handler—function that captures a request
   * and declares which mocked response to return upon match.
   * @see https://mswjs.io/docs/basics/request-handler
   */
  http.get('https://github.com/octocat', ({ request, params, cookies }) => {
    return HttpResponse.json(
      {
        message: 'Mocked response',
      },
      {
        status: 202,
        statusText: 'Mocked status',
      },
    )
  }),
]
