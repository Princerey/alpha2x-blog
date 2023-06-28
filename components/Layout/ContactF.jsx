import { Stack, Typography, Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

const ContactF = () => {
    return (<>
        <Stack flexDirection="column" justifyContent="center" alignItems="center" gap="30px" padding="60px 40px" sx={{ background: "#2D3032" }}>
            <Typography color="#f5f5f5" fontWeight="600" fontSize={{xs:"26px",sm:" 29px",md:"33px"}} textTransform="innherit" textAlign="center">
            Let us know how we can help your organization
            </Typography>
            <Link href="https://alpha2x.com/contact" style={{ textDecoration: "none" }}><a><Button sx={{ background: "linear-gradient(100.45deg, #462C73 0.95%, #703F92 143.06%)", color: "#fff", padding:{xs:"6px 20px",md:"9px 30px"}, textTransform: "capitalize" }}>Contact Us <ArrowForwardIcon sx={{ fontSize: "18px", marginLeft: "4px" }} />
            </Button></a></Link>
        </Stack>


    </>
    );
}

export default ContactF;