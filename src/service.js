import axios from "axios";
const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};
export const addTransaction = async (body) => {
  try {
    var response = await axios.post(
      `http://localhost:8080/api/v1/addtransaction`,
      { body },
      { headers }
    );
    return response.data.message;
  } catch (error) {
    console.log(error);
  }
};
export const getAllTransactions = async (name) => {
  try {
    console.log(name);
    var response = await axios.get(
      `http://localhost:8080/api/v1/getAllTransactions/${name}`,
      { headers }
    );

    return [response.data.data, response.data.secondData];
  } catch (error) {
    console.log(error);
  }
};
