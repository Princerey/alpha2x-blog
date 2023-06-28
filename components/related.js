import React from "react";
import Card from "./card";
import { Grid,Typography } from "@mui/material";
const Articles = ({ articles }) => {
    const getRandomArticles = (array, count) => {
      const shuffled = array.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };
  
    const randomArticles = getRandomArticles(articles, 3);
  
    return (
      <>
      <Typography color="secondary" fontSize={{xs:"27px",md:"30px",lg:"34px"}} marginTop="8px" marginBottom="15px">Related Blogs</Typography>
        <Grid container spacing={5} sx={{ padding:{xs:"10px 0px",md:"15px 0px",lg:"20px 80px"} }}>
          {randomArticles.map((article, i) => (
            <Grid item xs={12} sm={6} lg={4} key={`article__left__${article.attributes.slug}`} display="flex" gap="15px" sx={{paddingLeft:{sm:"40px !important"}}}>
              <Card article={article} />
            </Grid>
          ))}
        </Grid> 
      </>
    );
  };
  
export default Articles;
  
