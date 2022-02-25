import axios from 'axios';

const getMsgList = async () => {
  try {
    return await axios.get('http://localhost:7001');
  } catch (error) {
    console.error(error);
  }
};

const postMsg = async message => {
  try {
    return await axios.post('http://localhost:7001/add', message);
  } catch (error) {
    console.error(error);
  }
};

const getMsgcontent = async id => {
  try {
    return await axios.get(`http://localhost:7001/${id}`);
  } catch (error) {
    console.error(error);
  }
};
export { getMsgList, postMsg, getMsgcontent };
