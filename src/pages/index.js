import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Portfolio from "../components/portfolio"
// import Blog from "../components/blog"
import About from "../components/about"

const Index = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <About/>
      <Portfolio/>
      {/* <Blog/> */}
    </Layout>
  )
}



export default Index


