export default function MindPower() {
  return (
    <>
      <div className="mind-power">
        <section className="container mind-power-tile">
          <header>
            <h1>Mind power</h1>
          </header>
          <main className="mind-power-main">
            <div className="product">
              <picture>
                <img src="/images/1cordy.png" alt="" title="" />
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
                <img src="/images/3reishi.png" alt="" title="" />
              </picture>
              <h2>Health way</h2>
              <p>$48</p>
            </div>
            <div className="product d-none d-lg-block">
              <picture>
                <img src="/images/4lion.png" alt="" title="" />
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
