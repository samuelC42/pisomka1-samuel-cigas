"use client";

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";

export default function BasicMenu() {

    const [value, setValue] = React.useState('/');
    const router = useRouter();
    const { data: session, status } = useSession();

    const handleNavigation = (newValue: string) => {
        setValue(newValue);
        router.push(newValue);
        handleClose(); // Close the menu after navigation
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    if (status === "authenticated") {
        return (
            <div>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    Menu
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={() => handleNavigation('/')}>Home</MenuItem>
                    <MenuItem onClick={() => handleNavigation('/auth/sign-out')}>Log Out</MenuItem>
                </Menu>
            </div>
        );
    }
    else {
        return (
            <div>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    Menu
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={() => handleNavigation('/')}>Home</MenuItem>
                    <MenuItem onClick={() => handleNavigation('/auth/sign-in')}>Log In</MenuItem>
                </Menu>
            </div>
        );
    }

    
}
