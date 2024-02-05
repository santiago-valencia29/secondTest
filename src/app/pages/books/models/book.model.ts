export class Book {
  id: number
  title: string
  author: string
  publicationDate: string
  pages: number
  isbn: string
  stock: number
  description?: string
  price?: number
  salesCount: number
  country?: string
  imageLink: string
}

export const mockBook: Book[] = [
  {
    id: 1,
    title: 'Pedro Páramo',
    author: 'Juan Rulfo',
    publicationDate: '1955-10-18',
    pages: 124,
    isbn: '968411321X',
    stock: 120,
    description:
      'Novela que cuenta la historia de un hijo en busca de su padre, Pedro Páramo, en un pueblo desolado.',
    price: 29.99,
    salesCount: 300,
    country: 'México',
    imageLink: 'https://covers.openlibrary.org/b/id/7226924-L.jpg'
  },
  {
    id: 2,
    title: 'Como agua para chocolate',
    author: 'Laura Esquivel',
    publicationDate: '1989-05-01',
    pages: 256,
    isbn: '0385721234',
    stock: 150,
    description:
      'Novela romántica y gastronómica que combina amor y recetas en el México del siglo XX.',
    price: 24.99,
    salesCount: 250,
    country: 'México',
    imageLink: 'https://covers.openlibrary.org/b/id/7080854-L.jpg'
  },
  {
    id: 3,
    title: 'Los detectives salvajes',
    author: 'Roberto Bolaño',
    publicationDate: '1998-11-09',
    pages: 656,
    isbn: '9788433969193',
    stock: 180,
    description:
      'Epopeya literaria que sigue las vidas de un grupo de jóvenes poetas en México y otros lugares.',
    price: 34.99,
    salesCount: 200,
    country: 'Chile',
    imageLink: 'https://covers.openlibrary.org/b/id/8263141-L.jpg'
  },
  {
    id: 4,
    title: 'La región más transparente',
    author: 'Carlos Fuentes',
    publicationDate: '1958-11-06',
    pages: 600,
    isbn: '968411304X',
    stock: 200,
    description:
      'Novela que presenta una visión crítica de la sociedad mexicana en la década de 1940.',
    price: 27.99,
    salesCount: 180,
    country: 'Argentina',
    imageLink: 'https://covers.openlibrary.org/b/id/8263332-L.jpg'
  },
  {
    id: 5,
    title: 'Aura',
    author: 'Carlos Fuentes',
    publicationDate: '1962-05-09',
    pages: 160,
    isbn: '968411321X',
    stock: 100,
    description:
      'Novela corta que explora temas de misticismo y amor en el México del siglo XIX.',
    price: 19.99,
    salesCount: 150,
    country: 'Perú',
    imageLink: 'https://covers.openlibrary.org/b/id/7226924-L.jpg'
  },
  {
    id: 6,
    title: 'La sombra del caudillo',
    author: 'Martín Luis Guzmán',
    publicationDate: '1929-01-01',
    pages: 300,
    isbn: '968411321X',
    stock: 120,
    description:
      'Novela que critica el régimen del presidente Plutarco Elías Calles durante la Revolución Mexicana.',
    price: 22.99,
    salesCount: 120,
    country: 'Colombia',
    imageLink: 'https://covers.openlibrary.org/b/id/7226924-L.jpg'
  },
  {
    id: 7,
    title: 'El laberinto de la soledad',
    author: 'Octavio Paz',
    publicationDate: '1950-01-01',
    pages: 320,
    isbn: '968411321X',
    stock: 180,
    description: 'Ensayo que explora la identidad y la soledad del mexicano.',
    price: 26.99,
    salesCount: 300,
    country: 'Brasil',
    imageLink: 'https://covers.openlibrary.org/b/id/7226924-L.jpg'
  },
  {
    id: 8,
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    publicationDate: '1967-05-30',
    pages: 417,
    isbn: '0061120081',
    stock: 250,
    description:
      'Obra maestra de la literatura que narra la historia de la familia Buendía en el ficticio Macondo.',
    price: 39.99,
    salesCount: 500,
    country: 'Colombia',
    imageLink: 'https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg'
  },
  {
    id: 9,
    title: 'Arráncame la vida',
    author: 'Ángeles Mastretta',
    publicationDate: '1985-01-01',
    pages: 403,
    isbn: '9786071131519',
    stock: 200,
    description:
      'Novela que sigue la vida de Catalina Guzmán, una mujer en el México posrevolucionario.',
    price: 31.99,
    salesCount: 250,
    country: 'Perú',
    imageLink: 'https://covers.openlibrary.org/b/id/7867009-L.jpg'
  },
  {
    id: 10,
    title: 'La fiesta del chivo',
    author: 'Mario Vargas Llosa',
    publicationDate: '2000-01-01',
    pages: 475,
    isbn: '9788433969223',
    stock: 220,
    description:
      'Novela histórica que recrea los últimos días del dictador dominicano Rafael Trujillo.',
    price: 36.99,
    salesCount: 300,
    country: 'Colombia',
    imageLink: 'https://covers.openlibrary.org/b/id/7883699-L.jpg'
  },
  {
    id: 11,
    title: 'Don Quijote de la Mancha',
    author: 'Miguel de Cervantes',
    publicationDate: '1605-01-16',
    pages: 863,
    isbn: '9788420412146',
    stock: 300,
    description:
      'Obra cumbre de la literatura española que sigue las aventuras del caballero Alonso Quijano.',
    price: 45.99,
    salesCount: 800,
    country: 'España',
    imageLink: 'https://images.cdn1.buscalibre.com/fit-in/360x360/56/f3/56f3ff7925abbd80a5fc35b1eab1dcde.jpg'
  },
  {
    id: 12,
    title: 'El túnel',
    author: 'Ernesto Sabato',
    publicationDate: '1948-01-01',
    pages: 118,
    isbn: '9788433969193',
    stock: 120,
    description:
      'Novela existencialista que sigue los pensamientos obsesivos de un pintor hacia una mujer.',
    price: 21.99,
    salesCount: 120,
    country: 'Uruguay',
    imageLink: 'https://covers.openlibrary.org/b/id/8035759-L.jpg'
  },
  {
    id: 13,
    title: 'La muerte de Artemio Cruz',
    author: 'Carlos Fuentes',
    publicationDate: '1962-01-01',
    pages: 240,
    isbn: '968411321X',
    stock: 150,
    description:
      'Novela que narra la vida de Artemio Cruz, un político y militar mexicano.',
    price: 28.99,
    salesCount: 250,
    country: 'Venezuela',
    imageLink: 'https://covers.openlibrary.org/b/id/8035760-L.jpg'
  },
  {
    id: 14,
    title: 'Santa',
    author: 'Federico Gamboa',
    publicationDate: '1903-01-01',
    pages: 252,
    isbn: '968411321X',
    stock: 100,
    description:
      'Novela que aborda temas de prostitución y moralidad en la Ciudad de México.',
    price: 20.99,
    salesCount: 100,
    country: 'Argentina',
    imageLink: 'https://covers.openlibrary.org/b/id/8035761-L.jpg'
  },
  {
    id: 15,
    title: 'Bajo el volcán',
    author: 'Malcolm Lowry',
    publicationDate: '1947-01-01',
    pages: 400,
    isbn: '9788433969223',
    stock: 200,
    description:
      'Novela que se desarrolla durante un solo día en la vida del cónsul británico en Cuernavaca.',
    price: 32.99,
    salesCount: 180,
    country: 'Brasil',
    imageLink: 'https://covers.openlibrary.org/b/id/8035762-L.jpg'
  },
  {
    id: 16,
    title: 'El árbol de la ciencia',
    author: 'Pío Baroja',
    publicationDate: '1911-01-01',
    pages: 368,
    isbn: '9788433959934',
    stock: 170,
    description:
      'Novela que sigue la vida de Andrés Hurtado, un joven estudiante de medicina en México.',
    price: 27.99,
    salesCount: 150,
    country: 'Uruguay',
    imageLink: 'https://covers.openlibrary.org/b/id/8035763-L.jpg'
  },
  {
    id: 17,
    title: 'La tregua',
    author: 'Mario Benedetti',
    publicationDate: '1960-01-01',
    pages: 232,
    isbn: '9788426416406',
    stock: 160,
    description:
      'Novela que cuenta la historia de Martín Santomé, un funcionario uruguayo.',
    price: 23.99,
    salesCount: 120,
    country: 'Chile',
    imageLink: 'https://covers.openlibrary.org/b/id/8035764-L.jpg'
  },
  {
    id: 18,
    title: 'El tuerto es rey',
    author: 'Tomás Carrasquilla',
    publicationDate: '1926-01-01',
    pages: 246,
    isbn: '9789582600259',
    stock: 140,
    description:
      'Novela que explora temas de violencia y superstición en el México rural.',
    price: 22.99,
    salesCount: 100,
    country: 'Argentina',
    imageLink: 'https://covers.openlibrary.org/b/id/8035765-L.jpg'
  },
  {
    id: 19,
    title: 'La sombra del viento',
    author: 'Carlos Ruiz Zafón',
    publicationDate: '2001-01-01',
    pages: 544,
    isbn: '9788408079545',
    stock: 220,
    description:
      'Novela que sigue la vida de Daniel Sempere en el misterioso Cementerio de los Libros Olvidados en Barcelona.',
    price: 31.99,
    salesCount: 300,
    country: 'Brasil',
    imageLink: 'https://covers.openlibrary.org/b/id/8035766-L.jpg'
  }
]
