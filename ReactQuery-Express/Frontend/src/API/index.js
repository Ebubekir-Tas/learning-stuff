import axios from 'axios';

export const userMsgUrl = 'http://localhost:3001/userMsg';

export const getUserMsg = async () => {
  const res = await axios.post(userMsgUrl);
  return res.data;
};

export const updateMsg = async (newMsg) => {
  const res = await axios.post(userMsgUrl, newMsg);
  return res.data;
};
