import { deserialize } from '@lib/utils';
import { serializeTodo as serialize } from './serializers';

export function todosRepo(api) {
  return {
    async getAll() {
      const { data } = await api.get('todos');

      return deserialize(data);
    },

    async create(params) {
      const { data } = await api.post('todos', serialize(params));

      return deserialize(data);
    },

    async update(params) {
      const { data } = await api.patch(`todos`, serialize(params));

      return deserialize(data);
    },

    async delete(id) {
      return await api.delete(`todos/${id}`);
    }
  };
}
