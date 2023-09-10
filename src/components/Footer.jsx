export default function Footer() {
  return (
    <>
      <section className="footer d-lg-none">
        <footer className="container">
          <div className="py-3 footer-1">
            <h3 className="d-lg-none p-3">How can we help?</h3>
            <section className="footer-links d-flex justify-content-around container">
              <div className="footer-inner">
                <ul>
                  <li>
                    <a href="/" title="Contact Us">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/" title="Customer Care">
                      Customer Care
                    </a>
                  </li>
                  <li>
                    <a href="/" title="Delivery">
                      Delivery
                    </a>
                  </li>
                </ul>
              </div>
              <div className="vertical-line d-lg-none"></div>
              <nav className="footer-nav">
                <ul>
                  <li>
                    <a href="/" title="About Us">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/" title="Faq">
                      Faq
                    </a>
                  </li>
                  <li>
                    <a href="/" title="Affiliates">
                      Affiliates
                    </a>
                  </li>
                </ul>
              </nav>
            </section>
            <section className="d-flex justify-content-center py-3 fs-5 d-lg-none">
              <ul>
                <li>
                  <a href="" title="Terms & Conditions">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="" title="Privacy & Cookies">
                    Privacy & Cookies
                  </a>
                </li>
              </ul>
            </section>
            <section className="connect-bg">
            <div id="footer-connect" className="footer-connect container d-flex flex-column align-items-center">
              <h3 className="py-3 d-lg-none">Let&apos;s connect</h3>
              <form className="d-flex flex-column align-items-center gap-3">
                <label htmlFor="newsletter" className="newsletter d-lg-none">
                  Be the first to receive exclusive offers
                  
                </label>
                
                <input
                  type="text"
                  id="newsletter"
                  name="newsletter"
                  title="Newsletter"
                  placeholder="Email"
                  className="w-100"
                  required
                />
                <div className="button button-style-3">
                  <button>submit</button>
                </div>
                <div className="d-flex gap-2">
                  <input
                    type="checkbox"
                    id="agreement"
                    name="agreement"
                    className="align-self-start"
                    required
                  />
                  <label className="agreement" htmlFor="agreement">
                    I agree with Privacy Policy and I want to receive emails
                    from Health Way.
                  </label>
                </div>
              </form>
              <h3 className="d-lg-none">We are highly likeable</h3>
              <section>
                <ul className="d-flex gap-4 fs-3 py-3">
                  <li className="icon-social">
                    <a
                      href="http://www.youtube.com"
                      title="Our Youtube"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                  <li className="icon-social">
                    <a
                      href="http://www.facebook.com"
                      title="Our Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                  </li>

                  <li className="icon-social">
                    <a
                      href="http://www.twitter.com"
                      title="Our Twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </li>

                  <li className="icon-social">
                    <a
                      href="http://www.instagram.com"
                      title="Our Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            </section>
          </div>
          
            
          
        </footer>
      </section>
      <section className="footer-lg d-none d-lg-block">
        <div className="footer-lg-inner container">
            <section className="footer-lg-contact">
            <div className="footer-inner">
                <ul>
                  <li>
                    <a href="/" title="Contact Us">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/" title="Customer Care">
                      Customer Care
                    </a>
                  </li>
                  <li>
                    <a href="/" title="Delivery">
                      Delivery
                    </a>
                  </li>
                </ul>
              </div>
            </section>
            <section className="footer-lg-common">
            <nav className="footer-nav">
                <ul>
                  <li>
                    <a href="/" title="About Us">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/" title="Faq">
                      Faq
                    </a>
                  </li>
                  <li>
                    <a href="/" title="Affiliates">
                      Affiliates
                    </a>
                  </li>
                </ul>
              </nav>
            </section>
            <section className="footer-lg-connect">
            <form className="d-flex flex-column align-items-center">
                <label htmlFor="newsletter" className="newsletter">
                  Sign up for our newsletter
                  
                </label>
                
                <input
                  type="text"
                  id="newsletter"
                  name="newsletter"
                  title="Newsletter"
                  placeholder="Email address"
    
                  required
                />
                <div className="button button-style-3">
                  <button>submit</button>
                </div>
                <div className="d-flex gap-2">
                  <input
                    type="checkbox"
                    id="agreement"
                    name="agreement"
                    className="align-self-start"
                    required
                  />
                  <label className="agreement" htmlFor="agreement">
                    I agree with Privacy Policy and I want to receive emails
                    from Health Way.
                  </label>
                </div>
              </form>
              
              <section>
                <ul className="d-flex gap-4 fs-3 py-3">
                  <li className="icon-social">
                    <a
                      href="http://www.youtube.com"
                      title="Our Youtube"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                  <li className="icon-social">
                    <a
                      href="http://www.facebook.com"
                      title="Our Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                  </li>

                  <li className="icon-social">
                    <a
                      href="http://www.twitter.com"
                      title="Our Twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </li>

                  <li className="icon-social">
                    <a
                      href="http://www.instagram.com"
                      title="Our Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </section>
            </section>
        </div>
      </section>
    </>
  );
}