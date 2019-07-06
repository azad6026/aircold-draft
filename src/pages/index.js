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
    <SEO
      title="Home"
      slug="home"
      keywords={[`business`, `web site`, `services`]}
    />
    <section className="top-banner">
      <Image filename="house-with-air-con.png" alt="some image" />
      <Paragraph className="banner-caption">
        AIRCOLD
        <br />
        <span>Installation, Maintenance , Renewal</span>
      </Paragraph>
    </section>
    <article className="row-wrapper two-column about-section">
      <div className="inner-wrapper">
        <section>
          <Heading1>About AIRCOLD</Heading1>
          <Paragraph>
            Barry is a very passionate businessman that has been in his
            professional career for ove 20 years. He started the business on
            2009 and has been strongly improving his position in the industry
            since.
          </Paragraph>
          <Link className="custom-link" to="/about">
            Read More
          </Link>
        </section>
        <section>
          <Image
            filename="modern-warm-radiator.jpg"
            alt="comfy house with split units on"
          />
        </section>
      </div>
    </article>
    <section className="row-wrapper full-width  services-section">
      <Heading2 class="services-header">Our Services section</Heading2>
      <div className="inner-wrapper">
        <aside className="service-box">
          <Image filename="different-solit-types.jpg" alt="some image" />
          <Heading3 class="main-title">Installation</Heading3>
          <Paragraph>
            Old or new, heating or cooling systems, both domestic and commercial
            environments
          </Paragraph>
          <Link className="button-link" to="/services">
            Read More
          </Link>
        </aside>
        <aside className="service-box">
          <Image filename="old-conditioning-systems.jpg" alt="some image" />
          <Heading3 class="main-title">Maintenance</Heading3>
          <Paragraph>
            Practical maintenance / repairs for all heating and cooling systems
            giving best ...
          </Paragraph>
          <Link className="button-link" to="/services">
            Read More
          </Link>
        </aside>
        <aside className="service-box">
          <Image filename="modern-splits-look.jpg" alt="some image" />
          <Heading3 class="main-title">Renewal</Heading3>
          <Paragraph>
            No matter how old is your conditioning system, we will provide best
            solutions ...
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
        <Link className="button-link btn" to="/gallery">
          Go to gallery
        </Link>
      </div>
    </section>
    <section
      id="contactSection"
      className="row-wrapper full-width  two-column contact-section"
    >
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
            <a href="tel:0423503022" target="_blank" rel="noopener noreferrer">
              042 350 3022
            </a>
          </Paragraph>
          <Paragraph>
            Email:&nbsp;&nbsp;
            <a
              href="mailto:barry@aircold.com.au"
              target="_blank"
              rel="noopener noreferrer"
            >
              barry@aircold.com.au
            </a>
          </Paragraph>
          <Image filename="say-hello.jpg" alt="some image" />
        </aside>
      </div>
    </section>
  </Layout>
)

export default IndexPage
