const Pilha = require('./pilhas');

describe('Pilhas', () => {

  let pilha;

  beforeEach(() => {
    pilha = new Pilha();
  });

  test('Se a pilha começa vazia', () => {
    expect(pilha.isEmpty()).toBe(true);
    expect(pilha.size()).toBe(0);
  });

  test('Se está adicionando na pilha corretamente', () => {
    pilha.push('João');
    
    expect(pilha.isEmpty()).toBe(false);
    expect(pilha.size()).toBe(1);

    pilha.push('Maria');
    
    expect(pilha.isEmpty()).toBe(false);
    expect(pilha.size()).toBe(2);
  });

  test('Se está retirando da pilha corretamente', () => {
    pilha.push('Maria');
    pilha.push('João');
    pilha.push('José');
    
    expect(pilha.pop()).toBe('José');
    expect(pilha.size()).toBe(2);
    
    expect(pilha.pop()).toBe('João');
    expect(pilha.size()).toBe(1);
    
    expect(pilha.pop()).toBe('Maria');
    expect(pilha.size()).toBe(0);
  });

  test('Se está verificando o topo da pilha corretamente', () => {
    pilha.push('Maria');
    pilha.push('João');
    pilha.push('José');
    
    expect(pilha.top()).toBe('José');
    expect(pilha.top()).toBe('José');
    expect(pilha.size()).toBe(3);
    
    pilha.pop(); // Retirando José da pilha

    expect(pilha.top()).toBe('João');
  });

  test('Se está lidando com valores repetidos adequadamente.', () => {
    pilha.push('Maria');
    pilha.push('João');
    pilha.push('José');
    pilha.push('João');
    pilha.push('José');
    pilha.push('Maria');
    
    expect(pilha.pop()).toBe('Maria');
    expect(pilha.pop()).toBe('José');
    expect(pilha.pop()).toBe('João');
    expect(pilha.pop()).toBe('José');
    expect(pilha.pop()).toBe('João');
    expect(pilha.pop()).toBe('Maria');
    expect(pilha.size()).toBe(0);
  });

  test('Se retirar um valor da pilha vazia é tratado adequadamente', () => {
    expect(pilha.pop()).toBe(null);
  });

  test('Se verificar o topo da pilha vazia é tratado adequadamente', () => {
    expect(pilha.top()).toBe(null);
  });

});
