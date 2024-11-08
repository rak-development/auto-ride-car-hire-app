import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { render } from '../../utils/test-utils'
import { Introduction, introductionDataSchema } from './introduction.component'
import { renderHook, waitFor } from '@testing-library/react'
import axios from 'axios'
import { screen } from '@testing-library/dom'

const useIntroductionDataQuery = () => {
  return useQuery({
    queryKey: ['introductionData', 'en'],
    queryFn: () =>
      axios
        .get(`assets/db/introduction-data-en.json`)
        .then((res) => res.data)
        .then((data) => introductionDataSchema.parse(data)),
  })
}

const queryClient = new QueryClient()

interface wrapperProps {
  children: React.ReactNode
}

describe('Introduction Data', () => {
  it('receives a mocked response to a REST API request', async () => {
    const response = await fetch(
      'http://localhost:8000/assets/db/introduction-data-en.json',
    )
    expect(response.status).toBe(200)
    expect(response.statusText).toBe('OK')
    expect(await response.json()).toEqual({
      title: 'From Sedans \nto Coach \nBuses.',
      content: [
        {
          id: 1,
          title: 'Expect the Best',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus nibh. Suspendisse imperdiet, nulla ut dictum venenatis, nunc velit rhoncus neque, eu commodo augue sapien quis ipsum.',
        },
        {
          id: 2,
          title: 'Travel in Comfort',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus nibh. Suspendisse imperdiet, nulla ut dictum venenatis, nunc velit rhoncus neque, eu commodo augue sapien quis ipsum. Vivamus pharetra sagittis dolor sit amet malesuada. Morbi consequat aliquet dignissim.',
        },
      ],
      images: [
        {
          id: 1,
          title: 'Welcome',
          image: '/assets/images/AutoRide-Introduction-01.jpeg',
        },
        {
          id: 2,
          title: 'Car',
          image: '/assets/images/AutoRide-Introduction-02.jpeg',
        },
      ],
      quote: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum eros et tellus aliquet tincidunt.',
        author: 'ANNA CRIADO - CHAIRMAN & CEO',
      },
    })
  })

  it('test', async () => {
    const wrapper: React.FC<wrapperProps> = ({ children }) => (
      <QueryClientProvider client={queryClient}>
        <Introduction />
      </QueryClientProvider>
    )

    const { result } = renderHook(() => useIntroductionDataQuery(), { wrapper })
    await waitFor(() => {
      console.log(result)
    })
  })

  // it('test 2', async () => {
  //   const { result } = renderHook(() => useCustomHook(), { wrapper })
  //   await waitFor(() => {
  //     expect(result.current.isSuccess).toBe(true)
  //     // render(<Introduction />)
  //   })

  //   screen.debug()

  //   // await waitFor(() => expect(result.current.isSuccess).toBe(true))
  // })
})
