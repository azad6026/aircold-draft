import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Contact from "../components/contact"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" keywords={[`business`, `web site`, `services`]} />
    <section className="top-banner">
      <Image filename="house-with-air-con.png" alt="some image" />
      <p className="banner-caption">
        Installation, Maintenance and Customer Support is What We Offer
      </p>
    </section>
    <article className="row-wrapper two-column about-section">
      <div className="inner-wrapper">
        <section>
          <h1>Website about section</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type PageMaker including versions of
            Lorem Ipsum.
          </p>
        </section>
        <section>
          <Image
            filename="modern-warm-radiator.jpg"
            alt="comfy house with split units on"
          />
        </section>
      </div>
    </article>
    <section className="row-wrapper services-section">
      <h2 className="services-header">Our Services section</h2>
      <div className="inner-wrapper">
        <aside className="service-box">
          <Image filename="different-solit-types.jpg" alt="some image" />
          <h3 className="main-title">First Service</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy tex
          </p>
          <Link className="button-link" to="/services">
            Read More
          </Link>
        </aside>
        <aside className="service-box">
          <Image filename="old-conditioning-systems.jpg" alt="some image" />
          <h3 className="main-title">Second Service</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy tex
          </p>
          <Link className="button-link" to="/services">
            Read More
          </Link>
        </aside>
        <aside className="service-box">
          <Image filename="modern-splits-look.jpg" alt="some image" />
          <h3 className="main-title">Third Service</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy tex
          </p>
          <Link className="button-link" to="/services">
            Read More
          </Link>
        </aside>
      </div>
    </section>
    <section className="row-wrapper gallery-section">
      <div className="inner-wrapper">
        <h2 className="gallery-header">Our Gallery</h2>
        <div className="gallery-wrapper">
          <Image filename="comfy-cool-area-with-split.jpg" alt="some image" />
          <Image
            filename="difficult-places-to-install-splits.jpg"
            alt="some image"
          />
          <Image filename="home-with-old-warm-system.jpg" alt="some image" />
          <Image filename="modern-splits-look.jpg" alt="some image" />
          <Image filename="warm-comfy-home.jpg" alt="some image" />
          <Image filename="winter.jpg" alt="some image" />
          <Image filename="different-solit-types.jpg" alt="some image" />
          <Image
            filename="comfy-house-with-split-units-on.jpg"
            alt="some image"
          />
        </div>
        <Link className="button-link btn" to="#">
          Go to gallery
        </Link>
      </div>
    </section>
    <section className="row-wrapper two-column contact-section">
      <h2 className="main-title">Contact Us</h2>
      <div className="inner-wrapper">
        <aside className="form-section">
          <h3>Send Us a Message</h3>
          <Contact />
        </aside>
        <aside className="contact-info-section">
          <h3>Contact Details</h3>
          <hr />
          <p>
            Phone:&nbsp;&nbsp;
            <Link
              to="tel:1300 123 456"
              target="_blank"
              rel="noopener noreferrer"
            >
              1300 123 456
            </Link>
          </p>
          <p>
            Email:&nbsp;&nbsp;
            <Link
              to="mailto:info@site.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@site.com
            </Link>
          </p>
          <Image filename="say-hello.jpg" alt="some image" />
        </aside>
      </div>
    </section>
  </Layout>
)

export default IndexPage
