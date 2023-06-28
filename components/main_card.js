import React from "react";
import Link from "next/link";
import { Box, Stack, Typography } from "@mui/material";
import { getStrapiMedia } from "../lib/media";

const Card = ({ article}) => {
  
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
    <>
      <Stack direction={{xs:"column",lg:"row"}} marginTop={{xs:"40px",md:"60px"}} alignItems={{xs:"center",lg:"flex-start"}} justifyContent="space-evenly" width="80vw" gap="20px">
        <Stack maxWidth={{md:"70vw",lg:"50vw"}}>
        <Link href={`/article/${article.attributes.slug}`}><a style={{display:"flex",width:"100%"}}><Box component="img" src={getStrapiMedia(article.attributes.image)} alt="Article Image" /></a></Link>
        </Stack>
        <Stack flexDirection="column" gap="17px" width={{xs:"80vw",sm:"70vw", lg: "35vw" }}>
          <Typography fontSize={{xs:"14px",md:"15px"}} color="#3d3d3d" fontWeight="500" sx={{ background: "#EBE3FE", padding: "7px 20px", width: "max-content", borderRadius: "20px",textTransform:"capitalize"}}>
            {article.attributes.category.data.attributes.name}
          </Typography>
          <Typography fontSize={{xs:"22px",md:"30px"}} color="#3d3d3d" fontWeight="700">
            <Link href={`/article/${article.attributes.slug}`}>{article.attributes.title}</Link>
          </Typography>
          <Typography color="#3d3d3d" fontSize={{xs:"16px",md:"17px"}}>
            {article.attributes.description}
          </Typography>
          <Typography color="" fontSize={{xs:"13px",md:"14px"}}>
            {formatDate(article.attributes.publishedAt)}
          </Typography>
          <Stack direction="row" alignItems="center">
            {article.attributes.writerimage && (
              <Box component="img" src={getStrapiMedia(article.attributes.writerimage)} alt="Writer's Picture" sx={{ width:{xs:"40px",md:"50px"}, height: {xs:"40px",md:"50px"}, borderRadius: "50%" }} />
            )}
            <Typography color="#8450BD" fontSize={{xs:"16px",md:"17px"}} fontWeight="500" ml={2}>
              {article.attributes.author.data.attributes.name}
              <br />
              <span style={{ color: "#3d3d3d", fontWeight: "500", fontSize:{xs:"13px",md:"14px"}, textTransform: "uppercase" }}>{article.attributes.author.data.attributes.post}</span>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Card;
