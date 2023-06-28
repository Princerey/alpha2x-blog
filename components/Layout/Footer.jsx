import { Stack, Typography, Box } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';
const Footer1 = () => {
    // const Companys = [
    //     // {
    //     //     name: "Blog",
    //     // },
    //     {
    //         name: "About",
    //     },
    //     {
    //         name: "Privacy Policy",
    //     },
    //     {
    //         name: "Terms of Service",
    //     },
    // ];
    const Solutions1 = [
        
        {
            name: "Tolling",
        },
        {
            name: "Payment Gateways",
        },
        {
            name: "Parking",
        },
       
        // {
        //     name: "Finance",
        // },
        // {
        //     name: "Transportation",
        // },
    ];
    const Solutions2 = [
        {
            name: "Telecommunication",
        },
        {
            name: "Technology Stratergy",
        },
      
    ];
    return (
        <>
            <Stack sx={{ background: "#171718" }} flexDirection={{ xs: "column-reverse", lg: "row" }} justifyContent="space-around" alignItems="center" padding="60px 30px"  gap={{ xs: "40px", lg: "20px" }}>
                <Stack flexDirection="column" gap="20px" justifyContent="center" alignItems="center">
                    <Box
                        component="img"
                        src="../images/Home/logo.png"
                        sx={{
                            width: { xs: "80px", md: "100px" }
                        }}
                    />
                    <Stack flexDirection="row" gap="15px">
                       <Link href="https://www.linkedin.com/company/alpha2x-llc" target='blank' style={{textDecoration:"none"}}><a><LinkedInIcon sx={{ color: "#fff" ,cursor:"pointer"}} /></a></Link>
                       {/* <Link href="https://www.twitter.com" target='blank' style={{textDecoration:"none"}}><TwitterIcon sx={{ color: "#fff" }} /></Link> */}
                    </Stack>
                    <Typography sx={{ color: "rgba(238, 238, 238, 0.7);", fontSize: "14px" }}>
                    6213 Park Meadow Ln
Plano, Texas 75093

                    </Typography>
                    <Typography sx={{ color: "rgba(238, 238, 238, 0.7)", fontSize: "14px" }}>
                        © alpha2x llc
                    </Typography>
                </Stack>

                <Stack flexDirection={{ xs: "column-reverse", md: "row" }} gap={{ xs: "40px", sm: "80px", lg: "100px" }}>
                    <Stack flexDirection="column" gap="10px">
                        <Typography sx={{ fontSize: "20px", color: "#fff", fontWeight: "600", paddingBottom: "10px", textDecoration:"underline",textDecorationColor:"rgba(202, 201, 201, 0.56);",textUnderlineOffset:"10px"}}>Company</Typography>
                        {/* {Companys.map((company) => ( */}
                            <Typography sx={{ color: "#fff", fontSize: "16px",cursor:"pointer" }}><Link href="https://alpha2x.com/about" style={{textDecoration:"none"}}>About</Link></Typography>
                            
                            <Typography sx={{ color: "#fff", fontSize: "16px",cursor:"pointer" }}><Link href="https://alpha2x.com/privacy-policy" style={{textDecoration:"none"}}>Privacy Policy</Link></Typography>
                            
                        {/* ))} */}
                    </Stack>
                    <Stack flexDirection="column" gap="10px">
                        <Typography sx={{ fontSize: "20px", color: "#fff", fontWeight: "600", paddingBottom: "10px",textDecoration:"underline",textDecorationColor:"rgba(202, 201, 201, 0.56);",textUnderlineOffset:"10px",}}>Our Solutions</Typography>
                        <Stack flexDirection="row" gap="50px">
                            <Stack flexDirection="column" gap="10px">
                                {Solutions1.map((solution1) => (
                                    <Typography sx={{ color: "#fff", fontSize: "16px",cursor:"pointer" }} key={solution1.name}><Link href={`https://alpha2x.com/${solution1.name}`} style={{textDecoration:"none"}}>{solution1.name}</Link></Typography>
                                    
                                ))}
                            </Stack>
                            <Stack flexDirection="column" gap="10px">
                                {Solutions2.map((solution2) => (
                                            <Typography sx={{ color: "#fff", fontSize: "16px",cursor:"pointer" }} key={solution2.name}><Link href={`https://alpha2x.com/${solution2.name}`} style={{textDecoration:"none"}}>{solution2.name}</Link></Typography>
                                            
                                  
                                ))}
                            </Stack>
                        </Stack>

                    </Stack>


                </Stack>


            </Stack>
        </>
    )
}

export default Footer1