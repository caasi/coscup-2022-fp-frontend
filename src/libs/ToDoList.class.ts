import * as TDL from './ToDoList'

export default class ToDoList {
  private _toDoList: TDL.ToDoList

  constructor() {
    this._toDoList = TDL.create()
  }

  append(title: string) {
    this._toDoList = TDL.append(title)(this._toDoList)
  }

  updateById(id: string, done: boolean) {
    this._toDoList = TDL.updateById(id, done)(this._toDoList)
  }
}
