import React from "react"
import Articles from "../components/articles"
import Marticles from "../components/main_article"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import { Stack, Typography } from "@mui/material"

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      <Stack padding="40px" marginTop={{xs:"70px",md:"80px"}} justifyContent="center" alignItems="center" sx={{ background: "linear-gradient(180deg, #F3F2FF 0%, rgba(243, 242, 255, 0) 132.38%)", }}>
        <Typography color="#3d3d3d" fontSize={{ xs: "35px", md: "40px", lg: "48px" }} fontWeight="700" marginBottom="20px">Alpha2x <span style={{ color: "#8450BD" }}>Blog</span></Typography>
        <Typography color="#3d3d3d" fontSize={{ xs: "16px", md: "18px", lg: "19px" }} textAlign="center" width={{ xs: "90v", md: "75vw", lg: "65vw" }}>In a software-defined world, the Alpha2x Blog is your place to navigate through the renaissance in
          technology. Our publication aims to provide you the full scoop on the groundbreaking research,
          thought-leadership, and perspective on tech innovation in the world of software development, with a
          deep context to help tech leaders make intelligent decisions.</Typography>
        <Marticles articles={articles} />
        <Articles articles={articles} />
      </Stack>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ])
  
  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 10,

  }
}

export default Home
