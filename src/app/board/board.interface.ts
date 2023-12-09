import { TodoStatusEnum } from "../enums/todo-status.enum";
import { ITodos } from "../interfaces/todo/todo-item.interface";

export interface IBoard<T> {
    code: T;
    title: string;
    tasks: ITodos;
}

export type IBoards<T> = Array<IBoard<T>>;

export type IBoardDefault = keyof typeof TodoStatusEnum;

export interface IBoardHead<T> {
    code: T;
    name: string;
};

export type IBoardsHead<T> = Array<IBoardHead<T>>;

export const INITIAL_BOARD: IBoardHead<IBoardDefault> = {
    code: 'BackLog',
    name: 'BackLog'
}