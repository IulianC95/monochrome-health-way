import Footer from '@/components/Footer';
import Header from '@/components/Header';
import About from '@/components/main/about';
import MindPower from '@/components/main/mind-power';
import MostOrdered from '@/components/main/most-ordered';
import NewProductsTile from '@/components/main/new-products-tile';
import SoulCalming from '@/components/main/soul-calming';

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
        <section className="mb-5">
          <MostOrdered></MostOrdered>
        </section>
        <section className="mb-5">
          <About></About>
        </section>
        <section className="mb-5">
          <MindPower></MindPower>
        </section>
        <section>
          <SoulCalming></SoulCalming>
        </section>
        <br />

        <Footer></Footer>
      </div>
    </body>
  );
}
