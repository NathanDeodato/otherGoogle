import React from 'react';

import { 
    HeaderC,
    BoxLinks,
    BoxMenus,
    Plink,
    Menu,
    Profile
} from '../styles/gHeader';

export default function Header() {
    return(
        <HeaderC>
            <BoxLinks>
                <Plink>
                    gmail
                </Plink>

                <Plink>
                    images
                </Plink>
            </BoxLinks>
            
            <BoxMenus>
                <Menu
                src='./src/assets/menuIcon.png' alt="">
                </Menu>

                <Profile
                src='src\assets\profileIcon.png' alt=''>
                </Profile>
            </BoxMenus>
        </HeaderC>
    )
}
