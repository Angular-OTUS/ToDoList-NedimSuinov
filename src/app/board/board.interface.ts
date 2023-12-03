import { ITodos } from "../interfaces/todo/todo-item.interface";

export interface IBoard {
    id: number;
    title: string;
    tasks: ITodos;
}

export type IBoards = Array<IBoard>;