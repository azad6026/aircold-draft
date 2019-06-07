import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Pragraph from "../components/paragraph"
import Image from "../components/image"
import SEO from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <Pragraph>Here is a list of our services</Pragraph>
  </Layout>
)

export default ServicesPage
