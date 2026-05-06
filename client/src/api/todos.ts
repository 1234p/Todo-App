import axios from "axios";

const BASE_URL = "http://localhost:3001/MyTodos";

export const getTodos = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return { ok: true, data: res.data };
  } catch (err: any) {
    console.log(err);
    return {
      ok: false,
      error:
        err.response?.data?.message ||
        "An error occur while fetching the todos",
    };
  }
};

export const createTodo = async (todo: string) => {
  try {
    const res = await axios.post(BASE_URL, { todo });
    return { ok: true, data: res.data };
  } catch (err: any) {
    console.log(err);
    return {
      ok: false,
      error:
        err.response?.data?.message || "An error occur while creating the todo",
    };
  }
};
