// Exercício 8 - Crie uma função para mostrar o tamanho de um objeto.

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const showObjectSize = (obj) => {
  return Object.keys(obj).length;
};

console.table(showObjectSize(lesson1));
