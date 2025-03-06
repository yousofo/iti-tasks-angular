import { IItem } from "../types/item";

export function addTodoItem(newItem: IItem) {
  const todo = getLSItem('todo');

  if (todo) {
    localStorage.setItem('todo', JSON.stringify([...todo, newItem]));
    return;
  }
  
  localStorage.setItem('todo', JSON.stringify([newItem]));
}

export function getLSItem(key: string) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

export function editTodoItem(item: IItem) {
    const todo = getLSItem('todo');
    
    if (todo) {
        localStorage.setItem('todo', JSON.stringify(todo.map((i: IItem) => i.id === item.id ? item : i)));
    }
}
export function removeTodoItem(key: string) {
    const todo = getLSItem('todo');
    
    if (todo) {
        localStorage.setItem('todo', JSON.stringify(todo.filter((item: IItem) => item.id !== key)));
    }
}

export function clearLS() {
  localStorage.clear();
}
