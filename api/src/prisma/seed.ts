import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.book.deleteMany();
  await prisma.genre.deleteMany();

  const fiction = await prisma.genre.create({ data: { name: 'Fiction' } });
  const scifi = await prisma.genre.create({ data: { name: 'Science Fiction' } });
  const history = await prisma.genre.create({ data: { name: 'History' } });
  const tech = await prisma.genre.create({ data: { name: 'Technology' } });

  await prisma.book.createMany({
    data: [
      { title: 'Things Fall Apart', author: 'Chinua Achebe', publishedYear: 1958, genreId: fiction.id },
      { title: 'Petals of Blood', author: "Ngũgĩ wa Thiong'o", publishedYear: 1977, genreId: fiction.id },
      { title: 'Half of a Yellow Sun', author: 'Chimamanda Ngozi Adichie', publishedYear: 2006, genreId: fiction.id },
      { title: 'The Alchemist', author: 'Paulo Coelho', publishedYear: 1988, genreId: fiction.id },
      { title: 'Dune', author: 'Frank Herbert', publishedYear: 1965, genreId: scifi.id },
      { title: 'Neuromancer', author: 'William Gibson', publishedYear: 1984, genreId: scifi.id },
      { title: 'The Left Hand of Darkness', author: 'Ursula K. Le Guin', publishedYear: 1969, genreId: scifi.id },
      { title: 'Foundation', author: 'Isaac Asimov', publishedYear: 1951, genreId: scifi.id },
      { title: 'Sapiens', author: 'Yuval Noah Harari', publishedYear: 2011, genreId: history.id },
      { title: 'Guns, Germs, and Steel', author: 'Jared Diamond', publishedYear: 1997, genreId: history.id },
      { title: "A People's History of the United States", author: 'Howard Zinn', publishedYear: 1980, genreId: history.id },
      { title: 'The Wretched of the Earth', author: 'Frantz Fanon', publishedYear: 1961, genreId: history.id },
      { title: 'Clean Code', author: 'Robert C. Martin', publishedYear: 2008, genreId: tech.id },
      { title: 'The Pragmatic Programmer', author: 'Andrew Hunt', publishedYear: 1999, genreId: tech.id },
      { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', publishedYear: 2017, genreId: tech.id },
      { title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', publishedYear: 1990, genreId: tech.id },
    ],
  });

  console.log('Seeded 4 genres and 16 books');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });