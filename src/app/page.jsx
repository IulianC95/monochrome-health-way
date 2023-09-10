import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewProductsTile from "@/components/main/new-products-tile";


export default function Home() {
  return (
    <body>
      <div>
        <header className="my-5">
        <Header></Header>
        </header>
        <NewProductsTile></NewProductsTile>
       <br />

        <Footer></Footer>
      </div>
    </body>
  )
}
