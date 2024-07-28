// MensageriaPrioridade.js

/**
 * Representa uma mensagem com prioridade.
 * @typedef {Object} Mensagem
 * @property {string} conteudo - O conteúdo da mensagem.
 * @property {number} prioridade - A prioridade da mensagem.
 */

/**
 * Classe para gerenciar uma fila de mensagens com prioridade.
 */
class MensageriaPrioridade {
    constructor() {
      this.fila = [];
    }
  
    /**
     * Adiciona uma mensagem à fila com uma prioridade específica.
     * @param {string} conteudo - O conteúdo da mensagem.
     * @param {number} prioridade - A prioridade da mensagem (número maior indica maior prioridade).
     */
    adicionarMensagem(conteudo, prioridade) {
      const mensagem = { conteudo, prioridade };
      this.fila.push(mensagem);
      this.fila.sort((a, b) => b.prioridade - a.prioridade);
      console.log(`Mensagem adicionada: ${conteudo} com prioridade ${prioridade}`);
    }
  
    /**
     * Processa a próxima mensagem na fila, removendo-a.
     * @returns {Mensagem|null} A mensagem processada ou null se a fila estiver vazia.
     */
    processarMensagem() {
      if (this.fila.length === 0) {
        console.log('Nenhuma mensagem para processar.');
        return null;
      }
      const mensagem = this.fila.shift();
      console.log(`Processando mensagem: ${mensagem.conteudo}`);
      return mensagem;
    }
  
    /**
     * Retorna o estado atual da fila de mensagens.
     * @returns {Mensagem[]} A fila de mensagens.
     */
    estadoFila() {
      console.log('Estado atual da fila:', this.fila);
      return this.fila;
    }
  }
  
  module.exports = MensageriaPrioridade;
  