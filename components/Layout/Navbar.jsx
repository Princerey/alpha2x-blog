import {
    AppBar, Stack, Box, Typography, Button, IconButton, List, Popover,
    ListItem,
    Drawer,
    Collapse,
} from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Menu as MenuIcon, ExpandLess as ExpandLessIcon } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
const Navbar = () => {
    const scrollToSection = (sectionId) => {
        scroller.scrollTo(sectionId, {
            duration: 200,
            delay: 0,
            smooth: 'easeIn',
        });
    };

    const [openDrawer, setOpenDrawer] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);
    const [openDropdown1, setOpenDropdown1] = useState(false);
    const [openDropdown2, setOpenDropdown2] = useState(false);
    const [openDropdown3, setOpenDropdown3] = useState(false);
    const [openDropdown4, setOpenDropdown4] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
        setOpenDropdown1(false);
        setOpenDropdown2(false);
        setOpenDropdown4(false)
    };

    const open = Boolean(anchorEl);
    const id = open ? "popover" : undefined;

    const [anchorEl1, setAnchorEl1] = React.useState(null);

    const handlePopoverOpen1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };

    const handlePopoverClose1 = () => {
        setAnchorEl1(null);
    };

    const open1 = Boolean(anchorEl1);
    const id1 = open1 ? "popover" : undefined;

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    const handleAllClose = () => {
        setOpenDropdown(false);
        setOpenDropdown1(false);
        setOpenDropdown2(false);
        setOpenDropdown3(false);
        setOpenDropdown4(false)
    }
    const handleDropdownToggle = () => {
        setOpenDropdown2(false);
        setOpenDropdown1(false);
        setOpenDropdown3(false);
        setOpenDropdown4(false);
        setOpenDropdown((prevOpen) => !prevOpen);
    };
    const handleDropdownToggle1 = () => {
        setOpenDropdown1((prevOpen) => !prevOpen);
        setOpenDropdown2(false);
        setOpenDropdown4(false);

    };
    const handleDropdownToggle2 = () => {
        setOpenDropdown2((prevOpen) => !prevOpen);
        setOpenDropdown1(false);
        setOpenDropdown4(false);
    };
    const handleDropdownToggle3 = () => {
        setOpenDropdown3((prevOpen) => !prevOpen);
        setOpenDropdown(false);

    };
    const handleDropdownToggle4 = () => {
        setOpenDropdown4((prevOpen) => !prevOpen);
        setOpenDropdown1(false);
        setOpenDropdown2(false);


    };
    return (
        <>
            <AppBar sx={{ background: "#F5F5F5", borderBottom: "1.5px solid rgba(0, 0, 0, 0.1)" }} elevation={0}>
                <Stack flexDirection="row" sx={{ padding: "5px 15px", justifyContent: { xs: "space-between", md: "space-evenly" }, alignItems: "center" }}>

                    <Link href="https://alpha2x.com/" style={{ textDecoration: "none", color: "inherit",cursor:"pointer" }}><Box
                        component="img"
                        src="../images/Home/logo.png"
                        sx={{
                            width: { xs: "80px", md: "100px",cursor:"pointer"}
                        }}
                    /></Link>
                    <Stack flexDirection="row" gap="40px" sx={{ display: { xs: "none", md: "flex" } }}>
                    <Typography color="#2e2e2e" fontWeight="500" sx={{cursor:"pointer"}} onMouseEnter={handlePopoverClose}><Link href="https://alpha2x.com/" style={{ textDecoration: "none", color: "inherit",cursor:"pointer" }}  >Home</Link></Typography>
                        <Typography
                            color="#2e2e2e"
                            fontWeight="500"
                            textAlign="center"
                            display="flex"
                            alignItems="center"
                            gap="2px"
                            onMouseEnter={(event) => { handlePopoverOpen(event); handlePopoverClose1(); }}

                        >
                            Our Solutions
                            <ExpandMoreIcon sx={{ fontSize: "20px" }} />
                        </Typography>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}

                            onClose={handlePopoverClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center"
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "center"
                            }}
                            sx={{
                                zIndex: "0", marginTop: "29px", '& .MuiPaper-root': {
                                    borderRadius: '12px', boxShadow: "rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;", minWidth: "292px"
                                },
                            }}

                        >
                            <Box sx={{ p: 1 }} onMouseLeave={handlePopoverClose}>
                                <List>

                                    <List component="div" disablePadding>

                                        <ListItem onClick={handleDropdownToggle1}>
                                            <Typography sx={{ fontWeight: 500, display: "flex", alignItems: "center", gap: "15px", fontSize: "17px" }} color={openDropdown1 ? "#462C73 " : "#00000DE"}><Link href="https://alpha2x.com/tolling" style={{ textDecoration: "none", color: "inherit" }} onClick={handlePopoverClose}>Tolling</Link>
                                                {openDropdown1 ? <ExpandLessIcon sx={{ fontSize: "22px" }} /> : <ExpandMoreIcon sx={{ fontSize: "20px" }} />}</Typography>
                                        </ListItem>
                                        <Collapse in={openDropdown1} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                <ListItem >
                                                    <Typography sx={{ fontWeight: "500", fontSize: "15px", marginLeft: "20px" }} onClick={handlePopoverClose}><Link href="https://alpha2x.com/Cloud BOS" style={{ textDecoration: "none", color: "inherit" }} >Cloud BOS</Link></Typography>
                                                </ListItem>
                                                <ListItem >
                                                    <Typography sx={{ fontWeight: "500", fontSize: "15px", marginLeft: "20px" }}onClick={handlePopoverClose}><Link href="https://alpha2x.com/RUC" style={{ textDecoration: "none", color: "inherit" }} >RUC</Link></Typography>
                                                </ListItem>
                                                <ListItem >
                                                    <Typography sx={{ fontWeight: "500", fontSize: "15px", marginLeft: "20px" }}onClick={handlePopoverClose}><Link href="https://alpha2x.com/Dynamic Pricing" style={{ textDecoration: "none", color: "inherit" }} >Dynamic Pricing</Link></Typography>
                                                </ListItem>
                                            </List>
                                        </Collapse>
                                        <ListItem onClick={handleDropdownToggle2}>
                                            <Typography sx={{ fontWeight: 500, display: "flex", alignItems: "center", gap: "15px", fontSize: "17px" }} color={openDropdown2 ? "#462C73 " : "#00000DE"}> <Link href="https://alpha2x.com/payment gateways" style={{ textDecoration: "none", color: "inherit" }} onClick={handlePopoverClose}>Payment Gateways</Link>
                                                {openDropdown2 ? <ExpandLessIcon sx={{ fontSize: "22px" }} /> : <ExpandMoreIcon sx={{ fontSize: "20px" }} />}</Typography>
                                        </ListItem>
                                        <Collapse in={openDropdown2} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                <ListItem >
                                                    <Typography sx={{ fontWeight: "500", fontSize: "15px", marginLeft: "20px" }}onClick={handlePopoverClose}><Link href="https://alpha2x.com/Unified Payment Solutions" style={{ textDecoration: "none", color: "inherit" }} >Unified Payment Solutions</Link></Typography>
                                                </ListItem>
                                                <ListItem >
                                                    <Typography sx={{ fontWeight: "500", fontSize: "15px", marginLeft: "20px" }}onClick={handlePopoverClose}><Link href="https://alpha2x.com/EWallets" style={{ textDecoration: "none", color: "inherit" }} >EWallets</Link></Typography>
                                                </ListItem>
                                            </List>
                                        </Collapse>



                                        <ListItem onClick={handleDropdownToggle4}>
                                            <Typography sx={{ fontWeight: 500, display: "flex", alignItems: "center", gap: "15px", fontSize: "17px" }} color={openDropdown4 ? "#462C73 " : "#00000DE"}> <Link href="https://alpha2x.com/Parking" style={{ textDecoration: "none", color: "inherit" }} onClick={handlePopoverClose}>Parking</Link>
                                                {openDropdown4 ? <ExpandLessIcon sx={{ fontSize: "22px" }} /> : <ExpandMoreIcon sx={{ fontSize: "20px" }} />}</Typography>
                                        </ListItem>
                                        <Collapse in={openDropdown4} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                <ListItem >
                                                    <Typography sx={{ fontWeight: "500", fontSize: "15px", marginLeft: "20px" }}onClick={handlePopoverClose}><Link href="https://alpha2x.com/Unified Parking Solutions" style={{ textDecoration: "none", color: "inherit" }} >Unified Parking Solutions</Link></Typography>
                                                </ListItem>
                                                <ListItem >
                                                    <Typography sx={{ fontWeight: "500", fontSize: "15px", marginLeft: "20px" }} onClick={handlePopoverClose}><Link href="https://alpha2x.com/Parking Access and Payment" style={{ textDecoration: "none", color: "inherit" }} >Parking Access and Payment</Link></Typography>
                                                </ListItem>
                                                <ListItem >
                                                    <Typography sx={{ fontWeight: "500", fontSize: "15px", marginLeft: "20px" }}onClick={handlePopoverClose}><Link href="https://alpha2x.com/Smart Parking Solutions" style={{ textDecoration: "none", color: "inherit" }} >Smart Parking Solutions</Link></Typography>
                                                </ListItem>
                                            </List>
                                        </Collapse>
                                        {/* <ListItem >
                                            <Typography sx={{ fontWeight: "500", fontSize: "17px" }}>Finance</Typography>
                                        </ListItem>
                                        <ListItem >
                                            <Typography sx={{ fontWeight: "500", fontSize: "17px" }}>Transportation</Typography>
                                        </ListItem> */}
                                        <ListItem >
                                           <Typography sx={{ fontWeight: "500", fontSize: "17px" }} onClick={handlePopoverClose}> <Link href="https://alpha2x.com/telecommunication" style={{ textDecoration: "none", color: "inherit" }} >Telecommunication</Link></Typography>
                                        </ListItem>
                                        <ListItem >
                                            <Typography sx={{ fontWeight: "500", fontSize: "17px" }} onClick={handlePopoverClose}><Link href="https://alpha2x.com/technology stratergy" style={{ textDecoration: "none", color: "inherit" }} >Technology Strategy</Link></Typography>
                                            
                                        </ListItem>

                                    </List>

                                </List>
                            </Box>
                        </Popover>
                        <Typography
                            id={id1}
                            color="#2e2e2e"
                            fontWeight="500"
                            textAlign="center"
                            display="flex"
                            alignItems="center"
                            gap="2px"
                            onMouseEnter={(event) => { handlePopoverOpen1(event); handlePopoverClose(); }}

                        >
                            <Link href="https://alpha2x.com/?section=serve"
                                style={{ textDecoration: "none", color: "inherit" }}>Who we serve</Link>
                            {/* <ExpandMoreIcon sx={{ fontSize: "20px" }} /> */}
                        </Typography>
                        {/* <Popover
                            id={id1}
                            open={open1}
                            anchorEl={anchorEl1}

                            onClose={handlePopoverClose1}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center"
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "center"
                            }}
                            sx={{
                                zIndex: "0", marginTop: "29px", '& .MuiPaper-root': {
                                    borderRadius: '12px', boxShadow: "rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;"
                                },
                            }}

                        >
                            <Box sx={{ p: 1 }} onMouseLeave={handlePopoverClose1}>
                                <List>

                                    <List component="div" disablePadding>
                                        <ListItem >
                                            <Link href="/Fleet" style={{ textDecoration: "none", color: "inherit" }}>   <Typography sx={{ fontWeight: "500", fontSize: "17px" }} onClick={handlePopoverClose1}>Fleet</Typography></Link>
                                        </ListItem>
                                        <ListItem >
                                            <Link href="/Rental Car Companies" style={{ textDecoration: "none", color: "inherit" }}>   <Typography sx={{ fontWeight: "500", fontSize: "17px" }} onClick={handlePopoverClose1}>Rental Car Companies</Typography></Link>
                                        </ListItem>
                                        <ListItem >
                                            <Link href="/Tolling Agencies" style={{ textDecoration: "none", color: "inherit" }}>   <Typography sx={{ fontWeight: "500", fontSize: "17px" }} onClick={handlePopoverClose1}>Tolling Agencies</Typography></Link>
                                        </ListItem>

                                    </List>

                                </List>
                            </Box>
                        </Popover> */}
                        <Typography color="#2e2e2e" fontWeight="500" onMouseEnter={handlePopoverClose1}><Link href="https://alpha2x.com/about" style={{ textDecoration: "none", color: "inherit" }}>About</Link></Typography>

                    </Stack>
                    <Link href="https://alpha2x.com/contact" style={{ textDecoration: "none", color: "inherit" }}><a><Button sx={{ background: "linear-gradient(100.45deg, #462C73 0.95%, #703F92 143.06%)", color: "#fff", padding: "6px 20px", textTransform: "capitalize", display: { xs: "none", md: "flex" } }}>
                            Contact Us <ArrowForwardIcon sx={{ fontSize: "18px", marginLeft: "4px" }} />
                        </Button></a></Link>
                    <IconButton edge="start" color="inherit" onClick={handleDrawerOpen} sx={{
                        display: {
                            xs: "inline-block", md: "none"
                        }
                    }}>
                        <MenuIcon sx={{ color: "#3d3d3d" }} /></IconButton>
                </Stack>
            </AppBar>
            <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose} elevation={0} sx={{
                width: "268px",
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: "268px",
                    boxSizing: 'border-box',
                    background: "#f9f4fdfc"
                },
            }}>
                <List>
                    <Stack sx={{ padding: "0px 15px", marginBottom: "15px" }} flexDirection="row" justifyContent="space-between" alignItems="center">
                        <Link href="https://alpha2x.com/" style={{ textDecoration: "none", color: "inherit" }}><Box
                            component="img"
                            src="../images/Home/logo.png"
                            sx={{
                                width: { xs: "80px", md: "100px" },
                            }}
                        /></Link>
                        <CloseIcon sx={{ fontSize: "22px", color: "#3d3d3d" }} onClick={() => {
                            handleDrawerClose();
                            handleAllClose();
                        }} />
                    </Stack>
                    <ListItem >
                        <Link href="https://alpha2x.com/" style={{ textDecoration: "none", color: "inherit" }} onClick={() => {
                            handleDrawerClose();
                            handleAllClose();
                        }}><Typography sx={{ fontWeight: 500 }} color="#2e2e2e" >Home</Typography></Link>
                    </ListItem>
                    <ListItem onClick={handleDropdownToggle}>
                        <Typography sx={{ fontWeight: 500, display: "flex", alignItems: "center", gap: "15px" }} color={openDropdown ? "#462C73 " : "#2e2e2e"}>Our Solutions
                            {openDropdown ? <ExpandLessIcon sx={{ fontSize: "22px" }} /> : <ExpandMoreIcon sx={{ fontSize: "22px" }} />}</Typography>
                    </ListItem>
                    <Collapse in={openDropdown} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>

                            <ListItem onClick={handleDropdownToggle1}>
                                <Typography sx={{ fontWeight: 500, display: "flex", alignItems: "center", gap: "15px", fontSize: "17px", marginLeft: "20px" }} color={openDropdown1 ? "#462C73 " : "#000"}> <Link href="https://alpha2x.com/tolling" style={{ textDecoration: "none", color: "inherit" }} onClick={() => {
                                    handleDrawerClose();
                                    handleAllClose();
                                }}>Tolling</Link>
                                    {openDropdown1 ? <ExpandLessIcon sx={{ fontSize: "22px" }} /> : <ExpandMoreIcon sx={{ fontSize: "20px" }} />}</Typography>
                            </ListItem>
                            <Collapse in={openDropdown1} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem >
                                        <Link href="https://alpha2x.com/Cloud BOS" style={{ textDecoration: "none", color: "inherit" }}><Typography sx={{ fontWeight: "500", fontSize: "15px", marginLeft: "40px" }} onClick={() => {
                                            handleDrawerClose();
                                            handleAllClose();
                                        }}>Cloud BOS</Typography></Link>
                                    </ListItem>
                                    <ListItem >
                                        <Link href="https://alpha2x.com/RUC" style={{ textDecoration: "none", color: "inherit" }}><Typography sx={{ fontWeight: "500", fontSize: "15px", marginLeft: "40px" }} onClick={() => {
                                            handleDrawerClose();
                                            handleAllClose();
                                        }}>RUC</Typography></Link>
                                    </ListItem>
                                    <ListItem >
                                        <Link href="https://alpha2x.com/Dynamic Pricing" style={{ textDecoration: "none", color: "inherit" }}><Typography sx={{ fontWeight: "500", fontSize: "15px", marginLeft: "40px" }} onClick={() => {
                                                handleDrawerClose();
                                                handleAllClose();
                                            }}>Dynamic Pricing</Typography></Link>
                                    </ListItem>
                                </List>
                            </Collapse>
                            <ListItem onClick={handleDropdownToggle2}>
                                <Typography sx={{ fontWeight: 500, display: "flex", alignItems: "center", gap: "15px", fontSize: "17px", marginLeft: "20px" }} color={openDropdown2 ? "#462C73 " : "#2e2e2e"}><Link href="https://alpha2x.com/payment gateways" style={{ textDecoration: "none", color: "inherit" }} onClick={() => {
                                    handleDrawerClose();
                                    handleAllClose();
                                }}>Payment Gateway</Link>
                                    {openDropdown2 ? <ExpandLessIcon sx={{ fontSize: "22px" }} /> : <ExpandMoreIcon sx={{ fontSize: "20px" }} />}</Typography>
                            </ListItem>
                            <Collapse in={openDropdown2} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem >
                                        <Link href="https://alpha2x.com/Unified Payment Solutions" style={{ textDecoration: "none", color: "inherit" }} onClick={() => {
                                            handleDrawerClose();
                                            handleAllClose();
                                        }}><Typography sx={{ fontWeight: "500", fontSize: "15px", marginLeft: "40px" }}>Unified Payment Solutions</Typography></Link>
                                    </ListItem>
                                    <ListItem >
                                        <Link href="https://alpha2x.com/EWallets" style={{ textDecoration: "none", color: "inherit" }} onClick={() => {
                                            handleDrawerClose();
                                            handleAllClose();
                                        }}><Typography sx={{ fontWeight: "500", fontSize: "15px", marginLeft: "40px" }}>EWallets</Typography></Link>
                                    </ListItem>
                                </List>
                            </Collapse>
                            <ListItem onClick={handleDropdownToggle4}>
                                <Typography sx={{ fontWeight: 500, display: "flex", alignItems: "center", gap: "15px", fontSize: "17px" , marginLeft: "20px"}} color={openDropdown4 ? "#462C73 " : "#00000DE"}> <Link href="https://alpha2x.com/parking" style={{ textDecoration: "none", color: "inherit" , marginLeft: "20px"}} onClick={() => {
                                    handleDrawerClose();
                                    handleAllClose();
                                }}>Parking</Link>
                                    {openDropdown4 ? <ExpandLessIcon sx={{ fontSize: "22px" }} /> : <ExpandMoreIcon sx={{ fontSize: "20px" }} />}</Typography>
                            </ListItem>
                            <Collapse in={openDropdown4} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem >
                                        <Link href="https://alpha2x.com/Unified Parking Solutions" style={{ textDecoration: "none", color: "inherit" }} onClick={() => {
                                            handleDrawerClose();
                                            handleAllClose();
                                        }}><Typography sx={{ fontWeight: "500", fontSize: "15px", marginLeft: "40px" }}>Unified Parking Solutions</Typography></Link>
                                    </ListItem>
                                    <ListItem >
                                        <Link href="https://alpha2x.com/Parking Access and Payment" style={{ textDecoration: "none", color: "inherit" }} onClick={() => {
                                            handleDrawerClose();
                                            handleAllClose();
                                        }}><Typography sx={{ fontWeight: "500", fontSize: "15px", marginLeft: "40px" }}>Parking Access and Payment</Typography></Link>
                                    </ListItem>
                                    <ListItem >
                                        <Link href="https://alpha2x.com/Smart Parking Solutions" style={{ textDecoration: "none", color: "inherit" }} onClick={() => {
                                            handleDrawerClose();
                                            handleAllClose();
                                        }}><Typography sx={{ fontWeight: "500", fontSize: "15px", marginLeft: "40px" }}>Smart Parking Solutions</Typography></Link>
                                    </ListItem>
                                </List>
                            </Collapse>
                            {/* <ListItem >
                                <Typography sx={{ fontWeight: "500", fontSize: "17px",marginLeft:"20px",color:"#2e2e2e" }}>Finance</Typography>
                            </ListItem> */}
                            {/* <ListItem >
                                <Typography sx={{ fontWeight: "500", fontSize: "17px",marginLeft:"20px" ,color:"#2e2e2e"}}>Transportation</Typography>
                            </ListItem> */}
                            <ListItem >
                                <Link href="https://alpha2x.com/telecommunication" style={{ textDecoration: "none", color: "inherit" }} onClick={() => {
                                    handleDrawerClose();
                                    handleAllClose();
                                }}><Typography sx={{ fontWeight: "500", fontSize: "17px", marginLeft: "20px", color: "#2e2e2e" }}>Telecommunication</Typography></Link>
                            </ListItem>
                            <ListItem >
                                <Link href="https://alpha2x.com/technology stratergy" style={{ textDecoration: "none", color: "inherit" }} onClick={() => {
                                    handleDrawerClose();
                                    handleAllClose();
                                }}><Typography sx={{ fontWeight: "500", fontSize: "17px", marginLeft: "20px" }}>Technology Strategy</Typography></Link>
                            </ListItem>

                        </List>
                    </Collapse>
                    <ListItem onClick={handleDropdownToggle3}>
                        <Typography sx={{ fontWeight: 500, display: "flex", alignItems: "center", gap: "15px" }}
                            color={openDropdown3 ? "#2e2e2e " : "#2e2e2e"}
                        >
                            <Link href="https://alpha2x.com/?section=serve" style={{ textDecoration: "none", color: "inherit" }} onClick={() => { handleDrawerClose(); scrollToSection('serve'); handleAllClose(); }} >Who we serve</Link>
                            {/* {openDropdown3 ? <ExpandLessIcon sx={{ fontSize: "22px" }} /> : 
                            <ExpandMoreIcon sx={{ fontSize: "20px" }} />} */}
                        </Typography>
                    </ListItem>
                    {/* <Collapse in={openDropdown3} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem >
                                <Link href="/Fleet" style={{ textDecoration: "none", color: "inherit" }} onClick={() => {
                                    handleDrawerClose();
                                    handleAllClose();
                                }}>
                                    <Typography sx={{ fontWeight: "500", fontSize: "17px", marginLeft: "20px" }}>Fleet</Typography></Link>
                            </ListItem>
                            <ListItem >
                                <Link href="/Rental Car Companies" style={{ textDecoration: "none", color: "inherit" }} onClick={() => {
                                    handleDrawerClose();
                                    handleAllClose();
                                }}>
                                    <Typography sx={{ fontWeight: "500", fontSize: "17px", marginLeft: "20px" }}>Rental Car Companies</Typography></Link>
                            </ListItem>
                            <ListItem >
                                <Link href="/Tolling Agencies" style={{ textDecoration: "none", color: "inherit" }} onClick={() => {
                                    handleDrawerClose();
                                    handleAllClose();
                                }}>
                                    <Typography sx={{ fontWeight: "500", fontSize: "17px", marginLeft: "20px" }}>Tolling Agencies</Typography></Link>
                            </ListItem>
                        </List>
                    </Collapse> */}
                    <ListItem >
                        <Link href="https://alpha2x.com/about" style={{ textDecoration: "none", color: "inherit" }} onClick={() => {
                            handleDrawerClose();
                            handleAllClose();
                        }}><Typography sx={{ fontWeight: 500 }} >About</Typography></Link>
                    </ListItem>
                    <ListItem sx={{ marginTop: "15px" }}>
                        <Link href="https://alpha2x.com/contact" style={{ textDecoration: "none", color: "inherit" }} onClick={() => {
                            handleDrawerClose();
                            handleAllClose();
                        }}><Button sx={{ background: "linear-gradient(100.45deg, #462C73 0.95%, #703F92 143.06%)", color: "#fff", padding: "6px 20px", textTransform: "capitalize" }}>
                                Contact Us <ArrowForwardIcon sx={{ fontSize: "18px", marginLeft: "4px" }} />
                            </Button></Link>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}

export default Navbar