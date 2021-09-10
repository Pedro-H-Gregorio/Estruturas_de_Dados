const Fila = require('./filas');

describe('Filas', () => {

  let fila;

  beforeEach(() => {
    fila = new Fila();
  });

  test('Se a fila começa vazia', () => {
    expect(fila.isEmpty()).toBe(true);
    expect(fila.size()).toBe(0);
  });

  test('Se está adicionando na fila corretamente', () => {
    fila.enqueue('João');
    
    expect(fila.isEmpty()).toBe(false);
    expect(fila.size()).toBe(1);

    fila.enqueue('Maria');
    
    expect(fila.isEmpty()).toBe(false);
    expect(fila.size()).toBe(2);
  });

  test('Se está retirando da fila corretamente', () => {
    fila.enqueue('Maria');
    fila.enqueue('João');
    fila.enqueue('José'); // 1. Maria, 2. João, 3. José
    
    expect(fila.dequeue()).toBe('Maria');
    expect(fila.size()).toBe(2);
    
    expect(fila.dequeue()).toBe('João');
    expect(fila.size()).toBe(1);
    
    expect(fila.dequeue()).toBe('José');
    expect(fila.size()).toBe(0);
  });

  test('Se está verificando o início da fila corretamente', () => {
    fila.enqueue('Maria');
    fila.enqueue('João');
    fila.enqueue('José');
    
    expect(fila.front()).toBe('Maria');
    expect(fila.front()).toBe('Maria');
    expect(fila.size()).toBe(3);
    
    fila.dequeue(); // Retirando Maria da fila

    expect(fila.front()).toBe('João');
  });

  test('Se está lidando com valores repetidos adequadamente.', () => {
    fila.enqueue('Maria');
    fila.enqueue('João');
    fila.enqueue('José');
    fila.enqueue('João');
    fila.enqueue('José');
    fila.enqueue('Maria');
    
    expect(fila.dequeue()).toBe('Maria');
    expect(fila.dequeue()).toBe('João');
    expect(fila.dequeue()).toBe('José');
    expect(fila.dequeue()).toBe('João');
    expect(fila.dequeue()).toBe('José');
    expect(fila.dequeue()).toBe('Maria');
    expect(fila.size()).toBe(0);
  });

  test('Se retirar um valor da fila vazia é tratado adequadamente', () => {
    expect(fila.dequeue()).toBe(null);
  });

  test('Se verificar o início fila vazia é tratado adequadamente', () => {
    expect(fila.front()).toBe(null);
  });

});
