import { useQuery, useMutation, useQueryClient } from "react-query";
import { getUserMsg, updateMsg } from '../API';

const useGetMsg = () => {
  return useQuery("msg", getUserMsg);
}

const useMutateMsg = () => {
  const queryClient = useQueryClient();
  
  return useMutation(updateMsg, {
    onMutate: (data) => {
      queryClient.setQueryData('msg', data)
    },
  })
}

export { useGetMsg, useMutateMsg }