export default function About() {
  return (
    <>
      <section className="about container">
        <div className="about-img">
          <picture>
            <img
              src="/images/presentation.jpg"
              alt="Presentation Image"
              title="Presentation Image"
              className="mobile-img img-fluid d-lg-none"
            />
            <img
              src="/images/about.png"
              alt="Presentation Image"
              title="Presentation Image"
              className="mobile-img d-none d-lg-block"
            />
          </picture>
        </div>
        <div className="about-text">
          <h2>Traditional remedies</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="d-none d-lg-block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
    </>
  );
}
