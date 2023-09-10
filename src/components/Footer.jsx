export default function Footer() {
  return (
    <>
      <section>
        <h3 className="d-lg-none">How can we help?</h3>
        <footer>
          <div className="footer-inner container">
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
            <section>
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
          </nav>

          <div className="footer-connect">
            <h3>Let&apos;s connect</h3>
            <form>
              <label htmlFor="newsletter">
                Be the first to receive exclusive offers
              </label>
              <input
                type="text"
                id="newsletter"
                name="newsletter"
                title="Newsletter"
                required
              />
              <div className="button button-style-3">
                <button>submit</button>
              </div>
              <div>
                <label htmlFor="agreement">
                  I agree with Privacy Policy and I want to receive emails from
                  Health Way.
                </label>
                <input
                  type="checkbox"
                  id="agreement"
                  name="agreement"
                  required
                />
              </div>
            </form>
            <h3>We are highly likeable</h3>
            <section>
              <ul>
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
        </footer>
      </section>
    </>
  );
}
