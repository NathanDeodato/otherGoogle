import React from "react";

import {
    FooterC,
    BoxText,
    BoxTextOther,
    Divisor,
    Text
} from '../styles/gFooter'

export default function Footer() {
    return(
        <FooterC>
            <BoxText>
                <Text>
                    Brasil
                </Text>
            </BoxText>
            <Divisor/>
            <BoxTextOther>
                <Text>
                    Sobre
                </Text>
                    
                <Text>
                    Publicidade
                </Text>

                <Text>
                    Negócios
                </Text>

                <Text>
                    Como funciona a pesquisa
                </Text>
            </BoxTextOther>
        </FooterC>
    )
}
