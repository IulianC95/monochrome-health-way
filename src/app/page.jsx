import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewProductsTile from "@/components/main/new-products-tile";


export default function Home() {
  return (
    <body>
      <div>
        <Header></Header>

        <NewProductsTile></NewProductsTile>
        <NewProductsTile></NewProductsTile>
        <NewProductsTile></NewProductsTile>

        <Footer></Footer>
      </div>
    </body>
  )
}
