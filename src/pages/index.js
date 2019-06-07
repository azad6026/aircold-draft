import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Contact from "../components/contact"
import Paragraph from "../components/paragraph"
import Heading1 from "../components/headings/heading1"
import Heading2 from "../components/headings/heading2"
import Heading3 from "../components/headings/heading3"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" keywords={[`business`, `web site`, `services`]} />
    <section className="top-banner">
      <Image filename="house-with-air-con.png" alt="some image" />
      <Paragraph className="banner-caption">
        Installation, Maintenance and Customer Support is What We Offer
      </Paragraph>
    </section>
    <article className="row-wrapper two-column about-section">
      <div className="inner-wrapper">
        <section>
          <Heading1>Website about section</Heading1>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type PageMaker including versions of
            Lorem Ipsum.
          </Paragraph>
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
      <Heading2 class="services-header">Our Services section</Heading2>
      <div className="inner-wrapper">
        <aside className="service-box">
          <Image filename="different-solit-types.jpg" alt="some image" />
          <Heading3 class="main-title">First Service</Heading3>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy tex
          </Paragraph>
          <Link className="button-link" to="/services">
            Read More
          </Link>
        </aside>
        <aside className="service-box">
          <Image filename="old-conditioning-systems.jpg" alt="some image" />
          <Heading3 class="main-title">Second Service</Heading3>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy tex
          </Paragraph>
          <Link className="button-link" to="/services">
            Read More
          </Link>
        </aside>
        <aside className="service-box">
          <Image filename="modern-splits-look.jpg" alt="some image" />
          <Heading3 class="main-title">Third Service</Heading3>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy tex
          </Paragraph>
          <Link className="button-link" to="/services">
            Read More
          </Link>
        </aside>
      </div>
    </section>
    <section className="row-wrapper gallery-section">
      <div className="inner-wrapper">
        <Heading2 class="gallery-header">Our Gallery</Heading2>
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
      <Heading2 class="main-title">Contact Us</Heading2>
      <div className="inner-wrapper">
        <aside className="form-section">
          <Heading3>Send Us a Message</Heading3>
          <Contact />
        </aside>
        <aside className="contact-info-section">
          <Heading3>Contact Details</Heading3>
          <hr />
          <Paragraph>
            Phone:&nbsp;&nbsp;
            <Link
              to="tel:1300 123 456"
              target="_blank"
              rel="noopener noreferrer"
            >
              1300 123 456
            </Link>
          </Paragraph>
          <Paragraph>
            Email:&nbsp;&nbsp;
            <Link
              to="mailto:info@site.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@site.com
            </Link>
          </Paragraph>
          <Image filename="say-hello.jpg" alt="some image" />
        </aside>
      </div>
    </section>
  </Layout>
)

export default IndexPage
