import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MostOrdered from "@/components/main/most-ordered";
import NewProductsTile from "@/components/main/new-products-tile";


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
        <section>
          <MostOrdered></MostOrdered>
        </section>
       <br />

        <Footer></Footer>
      </div>
    </body>
  )
}
