import React from "react"
import { Link } from "gatsby"
import Heading1 from "../components/headings/heading1"
import Heading2 from "../components/headings/heading2"
import Heading3 from "../components/headings/heading3"
import Layout from "../components/layout"
import Paragraph from "../components/paragraph"
import Image from "../components/image"
import SEO from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <section className="top-banner">
      <Image
        filename="homemain-banner-warm-house-with-split-unit.jpg"
        alt="some image"
      />
      <br />
    </section>
    <section className="row-wrapper full-width services-page">
      <h1 className="services-header">Our Services</h1>

      <div className="inner-wrapper">
        <article className="service-box">
          <Image filename="different-solit-types.jpg" alt="some image" />
          <aside>
            <Heading3 class="main-title">Installation</Heading3>
            <Paragraph>
              Old or new, heating or cooling systems, both domestic and
              commercial environments
            </Paragraph>
          </aside>
        </article>
        <article className="service-box">
          <Image filename="old-conditioning-systems.jpg" alt="some image" />
          <aside>
            <Heading3 class="main-title">Maintenance</Heading3>
            <Paragraph>
              Practical maintenance / repairs for all heating and cooling
              systems giving best
            </Paragraph>
          </aside>
        </article>
        <article className="service-box">
          <Image filename="modern-splits-look.jpg" alt="some image" />
          <aside>
            <Heading3 class="main-title">Renewal</Heading3>
            <Paragraph>
              No matter how old is your conditioning system, we will provide
              best solutions to .
            </Paragraph>
          </aside>
        </article>
      </div>
    </section>
  </Layout>
)

export default ServicesPage
