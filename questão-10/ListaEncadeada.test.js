// ListaEncadeada.test.js

const ListaEncadeada = require('./ListaEncadeada');

test('Deve adicionar elementos ao final da lista e exibir os elementos', () => {
  const lista = new ListaEncadeada();
  lista.adicionar(10);
  lista.adicionar(20);
  lista.adicionar(30);
  expect(lista.cabeca.valor).toBe(10);
  expect(lista.cabeca.proximo.valor).toBe(20);
  expect(lista.cabeca.proximo.proximo.valor).toBe(30);
});

test('Deve remover elementos do início da lista', () => {
  const lista = new ListaEncadeada();
  lista.adicionar(10);
  lista.adicionar(20);
  lista.removerInicio();
  expect(lista.cabeca.valor).toBe(20);
  lista.removerInicio();
  expect(lista.cabeca).toBe(null);
});

test('Deve buscar elementos por valor na lista', () => {
  const lista = new ListaEncadeada();
  lista.adicionar(10);
  lista.adicionar(20);
  lista.adicionar(30);
  expect(lista.buscar(20).valor).toBe(20);
  expect(lista.buscar(40)).toBe(null);
});

test('Deve inserir elementos em posições específicas', () => {
  const lista = new ListaEncadeada();
  lista.adicionar(10);
  lista.adicionar(30);
  lista.inserirNaPosicao(20, 1);
  expect(lista.cabeca.valor).toBe(10);
  expect(lista.cabeca.proximo.valor).toBe(20);
  expect(lista.cabeca.proximo.proximo.valor).toBe(30);
});

test('Deve remover elementos por valor', () => {
  const lista = new ListaEncadeada();
  lista.adicionar(10);
  lista.adicionar(20);
  lista.adicionar(30);
  lista.removerPorValor(20);
  expect(lista.buscar(20)).toBe(null);
  expect(lista.cabeca.valor).toBe(10);
  expect(lista.cabeca.proximo.valor).toBe(30);
});
