import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { getStrapiMedia } from "../../lib/media"
import { Stack,Box, Typography } from "@mui/material"
import WestIcon from '@mui/icons-material/West';
import Link from "next/link";
import Related from "../../components/related"
import { useRouter } from 'next/router';
import Share from "../../components/share"

const Article = ({ article, categories, relatedArticles }) => {
  const imageUrl = getStrapiMedia(article.attributes.image)
  const router = useRouter();
  const blogUrl = process.env.NEXT_PUBLIC_APP_URL + router.asPath;
  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  }

  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />
      <Stack marginBottom="50px">
      <Box
       component="img"
        src={imageUrl}
        sx={{height:"350px",objectFit:"cover"}}
      />
      <Link href="/"><a><Typography fontSize="16px" fontStyle="italic" color="primary" padding="25px" fontWeight="500"><WestIcon sx={{ marginRight: "10px", fontSize: "14px" }} /> Back to Blogs</Typography></a></Link>
      <Stack padding={{xs:"10px 30px",md:"10px 60px",lg:"10px 120px"}}>
        <Typography fontSize={{xs:"24px",md:"30px",lg:"36px"}} fontWeight="700" color="primary">{article.attributes.title}</Typography>
        <Stack direction="row" gap="20px" mt="12px" alignItems="center">
        <Moment format="MMM Do YYYY" style={{color:"#3d3d3d",fontFamily:"Montserrat"}}>
                  {article.attributes.published_at} 
        </Moment>
        <Typography color="primary" fontSize="16px">{article.attributes.author.data.attributes.name}</Typography>
        </Stack>
        <Typography
            fontSize={{xs:"14px",md:"15px"}} 
            color="#primary"
            fontWeight="500"
            sx={{
              background: "#EBE3FE",
              padding: "7px 20px",
              width: "max-content",
              borderRadius: "20px",
            }}
            textTransform="capitalize"
            mt="20px"
          >
            {article.attributes.category.data.attributes.name}
          </Typography>
          <ReactMarkdown
            source={article.attributes.content}
            escapeHtml={false}
          />
          <Share blogUrl={blogUrl}/>

          <Typography color="secondary" fontSize={{xs:"27px",md:"30px",lg:"34px"}}>About the author</Typography>
          <Stack padding="40px 0px" direction={{xs:"column",md:"row"}} justifyContent="space-evenly" gap="30px" alignItems={{xs:"center",sm:"flex-start"}}>
          {article.attributes.writerimage && (
              <Box component="img" src={getStrapiMedia(article.attributes.writerimage)} alt="Writer's Picture" sx={{ width:{xs:"150px",md:"250px"}, height: {xs:"150px",md:"250px"}, borderRadius: "50%", aspectRatio: "1/1" }} />
            )} 
            <Stack gap="10px">
            <Typography color="primary" fontSize={{xs:"23px",md:"36px"}} fontWeight="500">
              {article.attributes.author.data.attributes.name}
            </Typography>

              <Typography color="primary" fontSize={{xs:"14px",md:"15px"}} fontWeight="500" fontStyle="italic">
                {article.attributes.author.data.attributes.post}
              </Typography>
              <Typography color="primary" fontSize={{xs:"14px",md:"15px"}} fontWeight="500" sx={{
              display: "-webkit-box",
              WebkitLineClamp: 6,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
             
            }}>
                {article.attributes.author.data.attributes.about}
              </Typography>
            
            </Stack>

          </Stack>

          <Related articles={relatedArticles} />
        </Stack>
      </Stack>
    </Layout>
  )
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] })

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
  });
  const categoriesRes = await fetchAPI("/categories");
  const relatedArticlesRes = await fetchAPI("/articles", { populate: "*" });

  // Filter out the article with the same slug from the relatedArticlesRes
  const relatedArticles = relatedArticlesRes.data.filter(
    (article) => article.attributes.slug !== params.slug
  );
  return {
    props: {
      article: articlesRes.data[0],
      categories: categoriesRes,
      relatedArticles: relatedArticles,
    },
    revalidate: 10,
  };
}


export default Article
