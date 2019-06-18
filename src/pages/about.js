import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Paragraph from "../components/paragraph"
import Heading1 from "../components/headings/heading1"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <section className="top-banner">
      <Image filename="house-inblue-aircon.jpg" alt="some image" />
      {/* <Paragraph className="banner-caption">ABOUT AIRCOLD</Paragraph> */}
    </section>
    <br />
    <Heading1>About AIRCOLD</Heading1>
    <Paragraph>
      B N is a very passionate businessman that has been in his professional
      career for ove 20 years. He started the business on 2009 and has been
      strongly improve his position in the industry since then.
    </Paragraph>
    <Paragraph>
      Having the right expertise of heating and cooling systems, he has been
      servicing domestic and commercial environments professionally.{" "}
    </Paragraph>
  </Layout>
)

export default AboutPage
