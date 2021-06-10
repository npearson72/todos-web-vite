import { Serializer } from 'jsonapi-serializer';

const TodoSerializer = new Serializer('todos', {
  attributes: ['title', 'completed']
});

export function serializeTodo(data) {
  return TodoSerializer.serialize(data);
}
