import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from 'axios';

export const getUserMsg = async () => {
  const res = await axios.post('http://localhost:3001/userMsg')
  return res.data;
}

const useGetMsg = () => {
  return useQuery("msg", getUserMsg);
}

const updateMsg = async (newMsg) => {
  const res = await axios.post('http://localhost:3001/userMsg', newMsg)
  return res.data;
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