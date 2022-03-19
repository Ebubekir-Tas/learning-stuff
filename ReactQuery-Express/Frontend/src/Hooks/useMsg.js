import { useQuery } from "react-query";
import axios from 'axios';

const getUserMsg = async () => {
  const res = await axios.get('http://localhost:3001/userMsg')
  return res.data;
}

export default function useMsg() {
  return useQuery("msg", getUserMsg);
}
