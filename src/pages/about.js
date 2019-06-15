import React from "react"
import Layout from "../components/layout"
import Heading1 from "../components/headings/heading1"
import SEO from "../components/seo"
import Paragraph from "../components/paragraph"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <Heading1 class="centred">About Us</Heading1>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
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
