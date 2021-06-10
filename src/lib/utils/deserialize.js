import { Deserializer } from 'jsonapi-serializer';

const deserializer = new Deserializer({ keyForAttribute: 'camelCase' });

export function deserialize(data, callback) {
  return deserializer.deserialize(data, callback);
}
