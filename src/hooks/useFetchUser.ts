import { useSuspenseQuery } from "@tanstack/react-query"
import { HttpClient } from "../lib/axios"
import type { GetUserResponse } from "../types/UserEntity"
import type { AxiosResponse } from "axios"

export const useFetchUser = (
  queryKey: string,
) => {
  return useSuspenseQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      return fetchUser()
    },
    retry: 1
  })
}

// use https://designer.mocky.io/design to generate mock api response
export const fetchUser = async (): Promise<GetUserResponse> => {
  const response: AxiosResponse<GetUserResponse> = await HttpClient().get('/d25cf465-fda7-42e8-bd57-55fe6a295dc6'); // change id here to see error ui
  return response.data;
};
