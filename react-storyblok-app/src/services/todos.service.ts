import { AxiosResponse } from "axios";

import {
  ToDoCreateRequest,
  ToDoResponse,
  ToDoUpdateRequest,
} from "../interfaces/TodoInterface";
import { ApiClient } from "./axios.service";

export const getAllToDoAsync = async (): Promise<
  AxiosResponse<ToDoResponse[]>
> => {
  return ApiClient.get("/todos");
};

export const createToDoAsync = async (
  payload: ToDoCreateRequest
): Promise<AxiosResponse> => {
  return ApiClient.post("/todos", payload);
};

export const updateToDoAsync = async (payload: ToDoUpdateRequest) => {
  return ApiClient.put(`/todos/${payload.id}`, payload);
};

export const deleteToDoAsync = async (id: string) => {
  return ApiClient.delete(`/todos/${id}`);
};
