"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

const pages = [
    {
        html: "/",
        en: "About us",
        ru: "О нас",
    },
    {
        html: "/services",
        en: "Services",
        ru: "Услуги",
    },
    {
        html: "/contacts",
        en: "Contacts",
        ru: "Контакты",
    },
    {
        html: "/blog",
        en: "Our blog",
        ru: "Наш блог",
    },
    {
        html: "/docs",
        en: "Docs",
        ru: "Документы",
    },
];

export const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="sticky"
            sx={{
                top: 0,
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "inherit",
                            fontWeight: 700,
                            color: "inherit",
                            textDecoration: "none",
                            borderRadius: "5px",
                        }}
                        border="1px solid white"
                        padding="5px 15px"
                    >
                        Эталон GEO
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.en}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        <a
                                            href={page.html}
                                            style={{
                                                textDecoration: "none",
                                                color: "black",
                                            }}
                                        >
                                            {page.ru}
                                        </a>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "inherit",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Эталон GEO
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            justifyContent: "flex-end",
                        }}
                    >
                        {pages.map((page) => (
                            <Link
                                key={page.en}
                                href={page.html}
                                style={{ textDecoration: "none" }}
                            >
                                <Button
                                    key={page.en}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: "white",
                                        display: "block",
                                        fontFamily: "inherit",
                                    }}
                                >
                                    {page.ru}
                                </Button>
                            </Link>
                        ))}
                        <Button>
                            <a
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                }}
                                href="tel:+79088737440"
                            >
                                Тел.: +7 (9088) 73-74-40
                            </a>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
