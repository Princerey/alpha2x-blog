import React from "react";
import Link from "next/link";
import { Box, Typography, Stack } from "@mui/material";
import { getStrapiMedia } from "../lib/media";

const Card = ({ article }) => {
  const formatDate = (dateTimeString) => {
    const dateOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    // const timeOptions = {
    //   hour: "2-digit",
    //   minute: "2-digit",
    //   hour12: false,
    // };
    const formattedDate = new Date(dateTimeString).toLocaleDateString("en-GB", dateOptions);
    // const formattedTime = new Date(dateTimeString).toLocaleTimeString("en-GB", timeOptions);
    return `${formattedDate}`;
  };


  return (
    <Stack sx={{width: "100%"}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          background: "#FFFFFF",
          boxShadow: "0px 0px 13px 5px #EBEBEB",
          borderRadius: "8px",
          textTransform: "capitalize",
        }}
      >
        <Link href={`/article/${article.attributes.slug}`} passHref><a style={{display:"flex",width:"100%"}}><Box
          component="img"
          src={getStrapiMedia(article.attributes.image)}
          sx={{
            flexGrow: 1,
            borderRadius: "8px 8px 0px 0px",
            maxHeight:"200px",
            minHeight:"200px"
          }}
        /></a></Link>
        <Box sx={{ p: 2,display:"flex",justifyContent:"space-between",height:"100%",flexDirection:"column" }}>
          <Stack>
          <Typography
            fontSize={{xs:"14px",md:"15px"}} 
            color="#3d3d3d"
            fontWeight="500"
            sx={{
              background: "#EBE3FE",
              padding: "7px 20px",
              width: "max-content",
              borderRadius: "20px",
            }}
          >
            {article.attributes.category.data.attributes.name}
          </Typography>
          <Typography
            fontSize={{xs:"16px",md:"18px"}} 
            color="#3d3d3d"
            fontWeight="500"
            sx={{ mt: 1 }}
          >
            <Link href={`/article/${article.attributes.slug}`} passHref>
              {article.attributes.title}
            </Link>
          </Typography>
          <Typography
            color="#3d3d3d"
            fontSize={{xs:"14px",md:"15px"}} 
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              mt: 1,
            }}
          >
            {article.attributes.description}
          </Typography>
          </Stack>
          <Stack direction="column" marginTop="17px">
          <Typography color="" fontSize={{xs:"13px",md:"14px"}} >
            {formatDate(article.attributes.publishedAt)}
          </Typography>
          <Stack direction="row" alignItems="center" marginTop="5px">
            {article.attributes.writerimage && (
              <Box component="img" src={getStrapiMedia(article.attributes.writerimage)} alt="Writer's Picture" sx={{ width:{xs:"35px",md:"40px"}, height: {xs:"35px",md:"40px"}, borderRadius: "50%" }} />
            )} 
            <Typography color="#8450BD" fontSize={{xs:"14px",md:"15px"}} fontWeight="500" ml={2}>
              {article.attributes.author.data.attributes.name}
              <br />
              <span style={{ color: "#3d3d3d", fontWeight: "500", fontSize: "12px", textTransform: "uppercase" }}>{article.attributes.author.data.attributes.post}</span>
            </Typography>
          </Stack>
          </Stack>
        </Box>
      </Box>
    </Stack>
    
  );
};

export default Card;
