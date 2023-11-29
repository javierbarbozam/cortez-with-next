export const books = [
  {
    id: "nos-conocemos",
    title: "¿Nos conocemos?",
    description: "This is the description",
  },
  {
    id: "prueba",
    title: "¿Nos conocemos?",
    description: "This is the description",
  },
];

export const methodologyTitles = (current) => {
  const data = {
    doman: 'Explora nuestro método de enseñanza: Aprende sobre el Método Doman',
    reality: 'Lectura que Cobre Vida: Descubre la Realidad Aumentada',
  }
  return data[current]
};