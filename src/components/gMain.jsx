import React from 'react';

import {
    MainC,
    BoxGoogle,
    BoxInput,
    BoxButtons,
    TextGoogle,
    SearchGoogle,
    LupaGoogle,
    TecladoGoogle,
    VozGoogle,
    SearchButton

} from '../styles/gMain.js'

export default function Main() {
    return(
        <MainC>
            <BoxGoogle>
                <TextGoogle
                src='src\assets\googleTextIcon.png' alt=''>
                </TextGoogle>
            </BoxGoogle>
            <BoxInput>
                <LupaGoogle
                src='src\assets\pesquisarIcon.png' alt=''>
                </LupaGoogle>

                <SearchGoogle>
                </SearchGoogle>

                <TecladoGoogle
                src='src\assets\tecladoIcon.png' alt=''>
                </TecladoGoogle>

                <VozGoogle
                src='src\assets\vozIcon.png' alt=''>
                </VozGoogle>
            </BoxInput>
            <BoxButtons>
                <SearchButton>
                    Google Search
                </SearchButton>
                <SearchButton>
                    Pesquisa ae!
                </SearchButton>
            </BoxButtons>
        </MainC>
    )
}
