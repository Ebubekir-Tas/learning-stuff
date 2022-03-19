import { useQuery } from "react-query";

const getUserMsg = async () => {
  const res = await fetch('http://localhost:3001/userMsg')
  return res.json();
}

export default function useMsg() {
  return useQuery("msg", getUserMsg);
}
