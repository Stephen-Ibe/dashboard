import axios from "./axios";

export const GetDashboardDataApi = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const res = await axios.get("/");
    return res.data;
  } catch (err: unknown) {
    throw err;
  }
};
