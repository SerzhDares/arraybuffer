import ArrayBufferConverter, {getBuffer} from '../app';

test('Проверка метода load()', () => {
  const converter = new ArrayBufferConverter();
  const bufferData = getBuffer();
  converter.load(bufferData);
  expect(converter.bufferView).toEqual(new Uint16Array(bufferData));
})

test('Проверка метода toString()', () => {
  const converter = new ArrayBufferConverter();
  const bufferData = getBuffer();
  converter.load(bufferData);
  expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
})
