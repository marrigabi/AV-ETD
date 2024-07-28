// ListaEncadeada.js

/**
 * Classe que representa um nó na lista encadeada.
 */
class Nodo {
    /**
     * @param {*} valor - O valor armazenado no nó.
     */
    constructor(valor) {
      this.valor = valor;
      this.proximo = null;
    }
  }
  
  /**
   * Classe para gerenciar uma lista encadeada simples.
   */
  class ListaEncadeada {
    constructor() {
      this.cabeca = null;
    }
  
    /**
     * Adiciona um elemento ao final da lista.
     * @param {*} valor - O valor a ser adicionado.
     */
    adicionar(valor) {
      const novoNodo = new Nodo(valor);
      if (!this.cabeca) {
        this.cabeca = novoNodo;
      } else {
        let atual = this.cabeca;
        while (atual.proximo) {
          atual = atual.proximo;
        }
        atual.proximo = novoNodo;
      }
      console.log(`Adicionado: ${valor}`);
    }
  
    /**
     * Remove o elemento do início da lista.
     * @returns {*} O valor do elemento removido ou null se a lista estiver vazia.
     */
    removerInicio() {
      if (!this.cabeca) {
        console.log('A lista está vazia');
        return null;
      }
      const removido = this.cabeca.valor;
      this.cabeca = this.cabeca.proximo;
      console.log(`Removido do início: ${removido}`);
      return removido;
    }
  
    /**
     * Busca um elemento por valor na lista.
     * @param {*} valor - O valor a ser buscado.
     * @returns {Nodo|null} O nó com o valor buscado ou null se não for encontrado.
     */
    buscar(valor) {
      let atual = this.cabeca;
      while (atual) {
        if (atual.valor === valor) {
          console.log(`Encontrado: ${valor}`);
          return atual;
        }
        atual = atual.proximo;
      }
      console.log(`Não encontrado: ${valor}`);
      return null;
    }
  
    /**
     * Exibe todos os elementos da lista.
     * @returns {void}
     */
    exibir() {
      let atual = this.cabeca;
      const elementos = [];
      while (atual) {
        elementos.push(atual.valor);
        atual = atual.proximo;
      }
      console.log('Elementos da lista:', elementos);
    }
  
    /**
     * Insere um elemento em uma posição específica.
     * @param {*} valor - O valor a ser inserido.
     * @param {number} posicao - A posição onde o valor será inserido.
     */
    inserirNaPosicao(valor, posicao) {
      const novoNodo = new Nodo(valor);
      if (posicao === 0) {
        novoNodo.proximo = this.cabeca;
        this.cabeca = novoNodo;
        console.log(`Inserido ${valor} na posição ${posicao}`);
        return;
      }
  
      let atual = this.cabeca;
      let anterior = null;
      let index = 0;
  
      while (atual && index < posicao) {
        anterior = atual;
        atual = atual.proximo;
        index++;
      }
  
      if (anterior) {
        novoNodo.proximo = atual;
        anterior.proximo = novoNodo;
        console.log(`Inserido ${valor} na posição ${posicao}`);
      } else {
        console.log(`Posição ${posicao} fora do alcance`);
      }
    }
  
    /**
     * Remove um elemento por valor na lista.
     * @param {*} valor - O valor a ser removido.
     * @returns {boolean} Verdadeiro se o elemento foi removido, falso caso contrário.
     */
    removerPorValor(valor) {
      if (!this.cabeca) {
        console.log('A lista está vazia');
        return false;
      }
  
      if (this.cabeca.valor === valor) {
        this.cabeca = this.cabeca.proximo;
        console.log(`Removido: ${valor}`);
        return true;
      }
  
      let atual = this.cabeca;
      let anterior = null;
  
      while (atual && atual.valor !== valor) {
        anterior = atual;
        atual = atual.proximo;
      }
  
      if (atual) {
        anterior.proximo = atual.proximo;
        console.log(`Removido: ${valor}`);
        return true;
      }
  
      console.log(`Não encontrado: ${valor}`);
      return false;
    }
  }
  
  module.exports = ListaEncadeada;
  