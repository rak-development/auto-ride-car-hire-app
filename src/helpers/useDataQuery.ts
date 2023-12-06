import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useDataQuery = (queryKey: string, dataUrl: string, dataScheme: any) =>
  useQuery({
    queryKey: [queryKey],
    queryFn: () =>
      axios
        .get(dataUrl)
        .then((res) => res.data)
        .then((data) => dataScheme.parse(data)),
  })
