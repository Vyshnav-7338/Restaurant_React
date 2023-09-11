import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'
import ButtonCustom from '../ButtonCustom/ButtonCustom'
import logoImg from '../assets/logo.png'
import MenuIcon from '@mui/icons-material/Menu'
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList"
import MiscellaneousServices from '@mui/icons-material/MiscellaneousServices'
import HomeIcon from '@mui/icons-material/Home'
import ContactsIcon from "@mui/icons-material/Contacts"
import {useNavigate} from 'react-router-dom'
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material'

function Header() {
    const navigate = useNavigate()
    const [moblieMenu, setMobileMenu] = useState({ left: false })

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.type === 'Tab' || event.type === 'Shift')) {
            return;
        }
        setMobileMenu({ ...moblieMenu, [anchor]: open })
    }

    const list = (anchor) => (

        <Box
            sx={{
                width: anchor === 'top' || anchor === 'bottom' ? "auto" : 250
            }}
            role='presentation'
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>

                {
                    nav_title.map((item, index) => (

                        <ListItem key={index} disablePadding onClick={()=>navigate(item.path)}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {
                                        index === 0 && <HomeIcon />
                                    }
                                    {
                                        index === 1 && <FeaturedPlayListIcon />
                                    }

                                    {
                                        index === 2 && <MiscellaneousServices />
                                    }
                                    {
                                        index === 3 && <ContactsIcon />
                                    }
                                </ListItemIcon>
                                <ListItemText primary={item.display} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    )

    const nav_title = [{
        path: '/',
        display: 'Home'
    },
    {
        path: '/Dishes',
        display: 'Dishes'
    },
    {
        path: '/Services',
        display: 'Services'
    },
    {
        path: '/About',
        display: 'About us'
    },
    ]
    const NavBarLinksBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            display: 'none',
        }
    }))
    const NavBarLogo = styled('img')(({ theme }) => ({
        cursor: 'pointer',
        [theme.breakpoints.down('md')]: {
            display: 'none',
        }
    }))
    const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
        cursor: 'pointer',
        display: 'none',
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            display: 'block',
        }
    }))
    const NavBarLink = styled(Typography)(() => ({

        fontSize: '14px',
        color: '#4F5361',
        fontWeight: 'bold',
        cursor: 'pointer',
        '&:hover': {
            color: '#fff'
        }

    }))
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '40px',
                maxWidth: 'auto',
                backgroundColor: '#FED801',
                marginLeft: '0px',
                marginBottom: '-24px'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2.5rem'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <CustomMenuIcon onClick={toggleDrawer("left", true)} />
                    <Drawer
                        anchor='left'
                        open={moblieMenu['left']}
                        onClose={toggleDrawer("left", false)}
                    >
                        {list("left")}
                    </Drawer>
                    <NavBarLogo src={logoImg} alt="Logo" />
                </Box>
                <NavBarLinksBox>
                    {
                        nav_title.map((items, index) => (

                            <NavBarLink variant='body2'onClick={()=>navigate(items.path)}>
                                {items.display}
                            </NavBarLink>
                        ))
                    }

                </NavBarLinksBox>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2.5rem'
                }}
            >
                <NavBarLink variant='body2'>
                    Sign Up
                </NavBarLink>
                <ButtonCustom
                    backgroundColor='#0F1B4C'
                    color='#fff'
                    buttonText="Register"
                />

            </Box>
        </Box>
    )
}

export default Header
