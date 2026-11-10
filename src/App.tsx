import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Camera,
  Check,
  ChevronDown,
  Clock,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";
import { business, services } from "./shine-content";
import heroDesktop from "./assets/shine-hero-silver.webp";
import heroMobile from "./assets/shine-hero-silver-mobile.webp";
import "./App.css";

function Wordmark() {
  return (
    <a className="wordmark" href="#top" aria-label="Shine home">
      <svg viewBox="0 0 34 34" aria-hidden="true">
        <path d="M18 1c1.6 10.3 4.4 13.2 14.6 14.8C22.4 17.4 19.6 20.3 18 30.5 16.4 20.3 13.6 17.4 3.4 15.8 13.6 14.2 16.4 11.3 18 1Z" fill="currentColor" />
        <path d="M6 2.5v7m-3.5-3.5h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span>shine<span className="wordmark-period">.</span></span>
    </a>
  );
}

export default function App() {
  const [selectedId, setSelectedId] = useState(services[0].id);
  const selected = services.find((service) => service.id === selectedId) ?? services[0];
  const bookingUrl = selected.bookingUrl ?? business.bookingUrl;

  return (
    <div id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="shell header-inner">
          <Wordmark />
          <nav className="site-nav" aria-label="Main navigation">
            <a href="#packages">Packages</a>
            <a href="#results">Before &amp; after</a>
            <a href="#booking">Contact</a>
          </nav>
          <a className="button button-primary header-book" href="#booking">
            Book a Service <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <picture className="hero-picture">
            <source media="(max-width: 700px)" srcSet={heroMobile} />
            <img src={heroDesktop} alt="" fetchPriority="high" width={1672} height={941} />
          </picture>
          <div className="hero-shade" aria-hidden="true" />
          <div className="shell hero-inner">
            <div className="hero-content">
              <p className="eyebrow hero-kicker"><MapPin size={15} aria-hidden="true" /> Tujunga, California</p>
              <h1 id="hero-title">Car wash &amp;<br /><span>auto detailing.</span></h1>
              <p className="hero-lead">
                From a fresh exterior wash to a full detail, choose the care your car needs.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#booking">
                  Book a Service <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <a className="button button-outline" href="#packages">
                  View Packages <ArrowDown size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section packages" id="packages" aria-labelledby="packages-title">
          <div className="shell">
            <div className="section-intro">
              <div>
                <p className="eyebrow section-label"><span>01</span> Services</p>
                <h2 id="packages-title">Wash &amp; detail packages.</h2>
              </div>
              <p>Pick an exterior wash, an interior clean, or a complete detail for the whole car.</p>
            </div>
            <div className="service-grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.id} aria-labelledby={service.id}>
                  <div className="service-image">
                    <img src={service.image} alt={service.imageAlt} loading="lazy" decoding="async" width={960} height={490} />
                    <span className="image-index" aria-hidden="true">0{index + 1}</span>
                  </div>
                  <div className="service-body">
                    <h3 id={service.id}>{service.name}</h3>
                    <p className="service-description">{service.description}</p>
                    <ul className="service-inclusions" aria-label="Suggested package inclusions">
                      {service.includes.map((item) => (
                        <li key={item}><Check size={16} aria-hidden="true" /> {item}</li>
                      ))}
                    </ul>
                    <dl className="service-facts">
                      <div><dt>Starting price</dt><dd>{service.startingPrice ?? "To be confirmed"}</dd></div>
                      <div><dt>Estimated time</dt><dd>{service.duration ?? "To be confirmed"}</dd></div>
                    </dl>
                    <a
                      className="service-action"
                      href="#booking"
                      onClick={() => setSelectedId(service.id)}
                      aria-label={"Choose " + service.name}
                    >
                      Choose package <ArrowUpRight size={17} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <p className="service-note">Package inclusions are shown as examples.</p>
          </div>
        </section>

        <section className="section results" id="results" aria-labelledby="results-title">
          <div className="shell results-inner">
            <div className="results-copy">
              <p className="eyebrow section-label"><span>02</span> The results</p>
              <h2 id="results-title">Before<br className="desktop-break" /> &amp; after.</h2>
              <p>{business.projectPhotos.Before && business.projectPhotos.After
                ? "See the same surface before and after a Shine detail."
                : "A side-by-side look at the same vehicle. Shine’s project photos will appear here once available."}</p>
            </div>
            <div className="comparison">
              {(["Before", "After"] as const).map((label) => {
                const photo = business.projectPhotos[label];

                return (
                  <figure className="comparison-frame" key={label}>
                    {photo ? (
                      <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
                    ) : (
                      <div className="comparison-placeholder">
                        <Camera size={24} strokeWidth={1.5} aria-hidden="true" />
                        <span>Photo pending</span>
                      </div>
                    )}
                    <figcaption>{label}</figcaption>
                  </figure>
                );
              })}
              <span className="comparison-divider" aria-hidden="true"><ArrowRight size={18} /></span>
            </div>
          </div>
        </section>

        <section className="reviews" aria-labelledby="reviews-title">
          <div className="shell reviews-inner">
            <div className="reviews-title">
              <span className="review-icon" aria-hidden="true"><MessageSquare size={23} strokeWidth={1.7} /></span>
              <div>
                <p className="eyebrow section-label"><span>03</span> Feedback</p>
                <h2 id="reviews-title">Customer reviews.</h2>
              </div>
            </div>
            {business.reviews.length ? (
              <div className="review-list">
                {business.reviews.map(({ quote, name }) => (
                  <figure key={quote}>
                    <blockquote>{quote}</blockquote>
                    <figcaption>{name}</figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              <p className="review-placeholder">Verified reviews will appear here once available.</p>
            )}
          </div>
        </section>

        <section className="booking" id="booking" aria-labelledby="booking-title">
          <div className="shell booking-inner">
            <div className="booking-info">
              <p className="eyebrow section-label"><span>04</span> Book &amp; contact</p>
              <h2 id="booking-title">Book a service.</h2>
              <p className="booking-lead">Choose a package for your next visit to Shine.</p>
              <dl className="contact-list">
                <div>
                  <MapPin size={19} aria-hidden="true" />
                  <dt>Location</dt><dd>{business.location}</dd>
                </div>
                <div>
                  <Clock size={19} aria-hidden="true" />
                  <dt>Hours</dt><dd>{business.hours ?? "Hours pending"}</dd>
                </div>
                <div>
                  <Phone size={19} aria-hidden="true" />
                  <dt>Phone</dt>
                  <dd>{business.phone
                    ? <a href={"tel:" + business.phone.replace(/[^\d+]/g, "")}>{business.phone}</a>
                    : "Phone number pending"}</dd>
                </div>
              </dl>
            </div>
            <div className="booking-panel">
              <span className="booking-panel-icon" aria-hidden="true"><CalendarDays size={21} /></span>
              <h3>Choose your package</h3>
              <p className="booking-panel-lead">{selected.description}</p>
              <label htmlFor="package-choice">Service</label>
              <div className="select-wrap">
                <select id="package-choice" value={selectedId} onChange={(event) => setSelectedId(event.target.value)}>
                  {services.map((service) => <option key={service.id} value={service.id}>{service.name}</option>)}
                </select>
                <ChevronDown size={17} aria-hidden="true" />
              </div>
              {bookingUrl ? (
                <a className="button button-primary booking-button" href={bookingUrl}>
                  Book a Service <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              ) : (
                <>
                  <button className="button button-primary booking-button" type="button" disabled aria-describedby="booking-status">
                    Book a Service <ArrowUpRight size={17} aria-hidden="true" />
                  </button>
                  <p className="booking-status" id="booking-status">Online booking link pending.</p>
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <Wordmark />
          <p>Car wash &amp; auto detailing <span aria-hidden="true">·</span> {business.location}</p>
          <a className="top-link" href="#top">Back to top <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
      </footer>
    </div>
  );
}
