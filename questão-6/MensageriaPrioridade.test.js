// MensageriaPrioridade.test.js

const MensageriaPrioridade = require('./MensageriaPrioridade');

test('Deve adicionar mensagens com diferentes prioridades e processá-las na ordem correta', () => {
  const mensageria = new MensageriaPrioridade();

  mensageria.adicionarMensagem('Mensagem 1', 1);
  mensageria.adicionarMensagem('Mensagem 2', 3);
  mensageria.adicionarMensagem('Mensagem 3', 2);

  expect(mensageria.processarMensagem().conteudo).toBe('Mensagem 2');
  expect(mensageria.processarMensagem().conteudo).toBe('Mensagem 3');
  expect(mensageria.processarMensagem().conteudo).toBe('Mensagem 1');
  expect(mensageria.processarMensagem()).toBe(null);
});
