export interface Todolist {
  addedDate: Date;
  id: string;
  order: number;
  title: string;
}

export interface BaseResponse<T = {}> {
  data: T;
  messages: string[];
  fieldsErrors: any[];
  resultCode: number;
}
