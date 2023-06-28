import { IconButton,Stack } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const ShareButtons = ({ blogUrl }) => {
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(blogUrl);
    // You can show a success message here or perform any other action after copying the URL
  };

  const handleFacebookShare = () => {
    // Replace "your-blog-url" with the actual URL of the blog
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}`;
    window.open(facebookUrl, '_blank');
  };

  const handleLinkedInShare = () => {
    const decodedUrl = decodeURIComponent(blogUrl);
    if (typeof window !== "undefined") {
      const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${decodedUrl}`;
      window.open(linkedInUrl, '_blank');
    }
  };

  const handleTwitterShare = () => {
    // Replace "your-blog-url" with the actual URL of the blog
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(blogUrl)}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <>
    <Stack direction="row" gap="15px" margin={{xs:"18px 0px",sm:"30px 0px"}}>
    <IconButton onClick={handleLinkedInShare} title="Share on LinkedIn" sx={{border:"2px solid #542489"}}>
        <LinkedInIcon sx={{color:"#3d3d3d"}}/>
      </IconButton>
      <IconButton onClick={handleTwitterShare} title="Share on Twitter" sx={{border:"2px solid #542489"}}>
        <TwitterIcon sx={{color:"#3d3d3d"}} />
      </IconButton> 
      <IconButton onClick={handleFacebookShare} title="Share on Facebook" sx={{border:"2px solid #542489"}}>
        <FacebookIcon sx={{color:"#3d3d3d"}}/>
      </IconButton>
      <IconButton onClick={handleCopyUrl} title="Copy URL" sx={{border:"2px solid #542489"}}>
        <FileCopyIcon sx={{color:"#3d3d3d"}}/>
      </IconButton>
      </Stack>
    </>
  );
};

export default ShareButtons;
