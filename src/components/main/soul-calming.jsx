export default function SoulCalming() {
  return (
    <>
      <div className="soul-calming">
        <section className="container soul-calming-tile">
          <header>
            <h1>Soul calming</h1>
          </header>
          <main className="soul-calming-main">
            <div className="product d-lg-none">
              <picture>
                <img src="/images/1cordy.png" alt="" title="" />
              </picture>
              <h2>Health way</h2>
              <p>$48</p>
            </div>
            <div className="product d-none d-lg-block">
              <picture>
                <img src="/images/5agari.png" alt="" title="" />
              </picture>
              <h2>Health way</h2>
              <p>$48</p>
            </div>
            <div className="product">
              <picture>
                <img src="/images/2chaga.png" alt="" title="" />
              </picture>
              <h2>Health way</h2>
              <p>$48</p>
            </div>
            <div className="product d-none d-lg-block">
              <picture>
                <img src="/images/1cordy.png" alt="" title="" />
              </picture>
              <h2>Health way</h2>
              <p>$48</p>
            </div>
            <div className="product d-none d-lg-block">
              <picture>
                <img src="/images/3reishi.png" alt="" title="" />
              </picture>
              <h2>Health way</h2>
              <p>$48</p>
            </div>
          </main>
        </section>
        <section className="ctas">
          <div className="box">
            <div>
              <a className="button button-style-2" href="/">
                view all
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
