import Footer from '@/components/Footer';
import Header from '@/components/Header';
import About from '@/components/main/about';
import MostOrdered from '@/components/main/most-ordered';
import NewProductsTile from '@/components/main/new-products-tile';

export default function Home() {
  return (
    <body>
      <div>
        <header className="my-5">
          <Header></Header>
        </header>
        <section className="mb-1">
          <NewProductsTile></NewProductsTile>
        </section>
        <section className="mb-3">
          <MostOrdered></MostOrdered>
        </section>
        <section>
          <About></About>
        </section>
        <br />

        <Footer></Footer>
      </div>
    </body>
  );
}
