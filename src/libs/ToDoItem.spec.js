import { create, id, title, done, update } from './ToDoItem'

describe('ToDoItem', () => {
  describe('create', () => {
    it('should create a new ToDoItem', () => {
      const item = create('0', 'create a module', false)
      expect(item.id).toBe('0')
      expect(item.title).toBe('create a module')
      expect(item.done).toBe(false)
    })
  })

  describe('id', () => {
    it('should get the id of a ToDoItem', () => {
      const item = create('0', 'drive to Yokohama', false)
      expect(item |> id).toBe('0')
    })
  })

  describe('title', () => {
    it('should get the title of a ToDoItem', () => {
      const item = create('0', 'drive to Yokohama', false)
      expect(item |> title).toBe('drive to Yokohama')
    })
  })

  describe('done', () => {
    it('should check if this ToDoItem is done', () => {
      const item = create('0', 'drive to Yokohama', false)
      expect(item |> done).toBe(false)
    })
  })

  describe('update', () => {
    it('should update the given ToDoItem', () => {
      const item = create('0', 'drive to Yokohama', false)
      expect(item |> update(true) |> done).toBe(true)
    })
  })
})
