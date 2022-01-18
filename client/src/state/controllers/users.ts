import axios from "axios";

export const getAllUsers = async () => {
  try {
    return await axios
      .get(`http://192.168.115.51:8083/v1/admin/user?page=0&size=20`)
      .then((response) => response.data.content);
  } catch (error) {
    console.log(error);
  }
};
