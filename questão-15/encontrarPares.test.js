// encontrarPares.test.js

const encontrarPares = require('./encontrarPares');

test('Deve encontrar todos os pares cuja soma é igual ao número alvo', () => {
  expect(encontrarPares([1, 2, 3, 4, 3, 5], 6)).toEqual([
    [4, 2],
    [3, 3]
  ]);
});

test('Deve retornar uma matriz vazia se nenhum par for encontrado', () => {
  expect(encontrarPares([1, 2, 3, 4, 5], 10)).toEqual([]);
});

test('Deve encontrar pares em arrays com números negativos', () => {
  expect(encontrarPares([-1, -2, -3, -4, -5], -6)).toEqual([
    [-1, -5],
    [-2, -4]
  ]);
});

test('Deve retornar uma matriz vazia para um array vazio', () => {
  expect(encontrarPares([], 0)).toEqual([]);
});

test('Deve retornar uma matriz vazia se o alvo não for um par possível', () => {
  expect(encontrarPares([1, 2, 3, 4, 5], 20)).toEqual([]);
});
