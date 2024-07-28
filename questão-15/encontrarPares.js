// encontrarPares.js

/**
 * Encontra todos os pares de elementos em um array cuja soma seja igual ao número alvo.
 * @param {number[]} array - O array de números a ser pesquisado.
 * @param {number} alvo - O número alvo cuja soma deve ser igual à soma dos pares.
 * @returns {number[][]} - Uma matriz contendo todos os pares de elementos cuja soma é igual ao número alvo.
 */
function encontrarPares(array, alvo) {
    const pares = [];
    const vistos = new Set();
  
    for (const num of array) {
      const complemento = alvo - num;
      if (vistos.has(complemento)) {
        pares.push([complemento, num]);
      }
      vistos.add(num);
    }
  
    return pares;
  }
  
  module.exports = encontrarPares;
  