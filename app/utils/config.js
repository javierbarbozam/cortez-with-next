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
    reality: 'Lectura que cobra vida: Descubre la Realidad Aumentada',
  }
  return data[current]
};

export const appNavigation = [
  { href: "/", text: "Inicio" },
  { href: "/nosotros", text: "Sobre Nosotros" },
  { href: "/metodologia", text: "Metodología" },
  { href: "/contacto", text: "Contacto" },
  { href: "/libros/nos-conocemos", text: "¿Nos Conocemos?" },
];

export const contactData = [
  { title: 'instagram', link: 'https://www.instagram.com/cortezamarillo_cr/' },
  { title: 'phone', link: 'tel:88381532' },
  { title: 'email', link: 'mailto:hola@cortezamarillo-cr.com' }
];