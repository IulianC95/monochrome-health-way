export default function MostOrdered() {
  return (
    <>
      <section className="container most-ordered-tile">
        <header>
          <h1>Most ordered</h1>
        </header>
        <main className="most-ordered-main">
          <div className="product d-lg-none">
            <picture>
              <img
                src="/images/1cordy.png"
                alt="Cordy Supliments"
                title="Cordy Supliments"
              />
            </picture>
            <h2>Health way</h2>
            <p>$48</p>
          </div>
          <div className="product d-none d-lg-block">
            <picture>
              <img
                src="/images/5agari.png"
                alt="Agari Supliments"
                title="Agari Supliments"
              />
            </picture>
            <h2>Health way</h2>
            <p>$48</p>
          </div>
          <div className="product">
            <picture>
              <img
                src="/images/2chaga.png"
                alt="Chaga Supliments"
                title="Chaga Supliments"
              />
            </picture>
            <h2>Health way</h2>
            <p>$48</p>
          </div>
          <div className="product d-none d-lg-block">
            <picture>
              <img
                src="/images/1cordy.png"
                alt="Cordy Supliments"
                title="Cordy Supliments"
              />
            </picture>
            <h2>Health way</h2>
            <p>$48</p>
          </div>
          <div className="product d-none d-lg-block">
            <picture>
              <img
                src="/images/3reishi.png"
                alt="Reishi Supliments"
                title="Reishi Supliments"
              />
            </picture>
            <h2>Health way</h2>
            <p>$48</p>
          </div>
        </main>
      </section>
    </>
  );
}
