import React, { useState } from "react";
import Card from "./card";
import { Grid, Button, Typography, Stack } from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

const Articles = ({ articles }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;
  const totalPages = Math.ceil((articles.length - 1) / articlesPerPage);


  const handleClickNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleClickPrev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    Math.min(indexOfLastArticle, articles.length - 1)
  );

  return (
    <>
      <Grid container spacing={5} sx={{ padding:{xs:"30px 10px",md:"40px 60px",lg:"60px 120px"}, marginTop: "20px" }}>
        {currentArticles.map((article, i) => (
          <Grid item xs={12} sm={6} lg={4} key={`article__left__${article.attributes.slug}`} display="flex" gap="15px" sx={{paddingLeft:{sm:"40px !important"}}}>
            <Card article={article} />
          </Grid>
        ))}
      </Grid> 

      <Stack gap="20px" direction="row" alignItems="center">
        <Button disabled={currentPage === 1} onClick={handleClickPrev} sx={{ backgroundColor: "#fff", border: "1.42399px solid #555555", borderRadius: "25px", textTransform: "capitalize", color: "#555555", padding: "6px 30px" ,fontSize:{xs:"17px",md:"20px"}}}>
          <WestIcon sx={{ marginRight: "10px", fontSize: "14px" }} />Previous
        </Button>
        <Typography fontSize={{xs:"17px",md:"20px"}} component="span" fontWeight="700" textAlign={{xs:"center",md:"left"}}>
          Page {currentPage}/{totalPages}
        </Typography>
        <Button disabled={currentPage === totalPages} onClick={handleClickNext} sx={{ backgroundColor: "#fff", border: "1.42399px solid #555555", borderRadius: "25px", textTransform: "capitalize", color: "#555555", padding: "6px 30px",fontSize:{xs:"17px",md:"20px"}}}>
          Next<EastIcon sx={{ marginLeft: "10px", fontSize: "14px" }} />
        </Button>
      </Stack>
    </>
  );
};

export default Articles;
