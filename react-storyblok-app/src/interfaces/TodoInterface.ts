export type ToDoResponse = {
  id: string;
  name: string;
  isFinish: boolean;
};

export type ToDoCreateRequest = {
  name: string;
  isFinish: boolean;
};

export type ToDoUpdateRequest = {
  id: string;
  isFinish: boolean;
};

export type ToDoSliceInterface = {
  toDoList: ToDoResponse[];
};
