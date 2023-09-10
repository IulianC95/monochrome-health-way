export default function Header() {
    return (
      <>
      <header className="header">
        <section className="header-secondary">
          <div className="header-secondary-inner container">
            <section className="header-connect d-none d-lg-block">
              <ul className="d-none d-lg-flex align-items-center">
                <li className="icon-social">
                  <a
                    href="http://www.youtube.com"
                    title="Our Youtube"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
  
                <li className="icon-social">
                  <a
                    href="http://www.facebook.com"
                    title="Our Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
  
                <li className="icon-social">
                  <a
                    href="http://www.twitter.com"
                    title="Our Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
  
                <li className="icon-social">
                  <a
                    href="http://www.instagram.com"
                    title="Our Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
  
                <li>
                  <a href="tel:+44 (0)10 2345 6789" title="Call us">
                    <span className="text-uppercase">Call us</span>{' '}
                    +4(0)0784719774
                  </a>
                </li>
              </ul>
            </section>
  
            <section className="header-controls d-flex justify-content-between align-items-center">
              <h1 className="d-inline-block d-lg-none">
                <a href="/" title="Home Page">
                  Health Way
                </a>
              </h1>
  
              <ul className="d-flex gap-lg-3">
                <li className="d-none d-lg-block">
                  <form>
                    <input
                      type="text"
                      name="search-up-lg"
                      id="search-up-lg"
                      placeholder="Search"
                    />
  
                    <button type="submit" title="Search">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </form>
                </li>
  
                <li>
                  <a href="/" title="Account">
                    <i className="fa-solid fa-user"></i>
                  </a>
                </li>
  
                <li>
                  <a href="/" title="Wishlist">
                    <i className="fa-solid fa-heart"></i>
                  </a>
                </li>
  
                <li>
                  <a href="/" title="Add to Cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </section>
  
        <section className="header-primary">
          <div className="header-primary-inner container d-none d-lg-block">
            <ul className="d-flex justify-content-between align-items-center">
              <li>
                <a href="/" title="New Arrivals">
                  New
                </a>
              </li>
              <li>
                <a href="/" title="Tradition">
                  Tradition
                </a>
              </li>
              <li>
                <a href="/" title="For Beauty">
                  Beauty
                </a>
              </li>
              <li>
                <a href="/" title="For your soul">
                  Spirit
                </a>
              </li>
              <li>
                <a href="/" title="For your soul">
                  Strength
                </a>
              </li>
              <li>
                <a href="/" title="For your soul">
                  Vitality
                </a>
              </li>
            </ul>
          </div>
  
          <div className="header-primary-search container d-lg-none position-relative">
            <button type="button" title="Menu">
              <i className="fa-solid fa-bars"></i>
            </button>
  
            <form>
              <input
                type="text"
                name="search-down-lg"
                id="search-down-lg"
                placeholder="Search"
              />
  
              <button type="submit" title="Search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
  
            <a
              href="/"
              title="New products"
              className="button button-style-1"
            >
              New In
            </a>
          </div>
  
          <div className="header-primary-banner d-lg-none"></div>
        </section>
        </header>
      </>
    );
  }