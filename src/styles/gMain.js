import styled from 'styled-components';

export const MainC = styled.main `
    width: 100vw;
    height: 50vh;

    margin-top: 6%;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const BoxGoogle = styled.div `
    height: 30%;

    display: flex;
    align-items: center;

    /* reponsive - 2560 */
    @media (min-width: 2560px) {
        width: 20%;
    }

    /* reponsive - 768 */
    @media (min-width: 768px) {
        width: 20%;
    }

    /* reponsive - 425 */
    @media (min-width: 425px) {
        width: 35%;
    }
`

export const BoxInput = styled.div `
    width: 40%;
    height: 13%;

    padding-left: 1%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    
    border: #545454 solid 1px;
    border-radius: 50px;
    outline: none;

    /* reponsive - 768 */
    @media (min-width: 768px) {
        width: 50%;
    }

    /* reponsive - 425 */
    @media (min-width: 425px) {
        width: 70%;
        height: 11%;
    }
`

export const BoxButtons = styled.div `
    width: 30%;
    height: 25%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    /* reponsive - 768 */
    @media (min-width: 768px) {
        width: 40%;
    }

    /* reponsive - 425 */
    @media (min-width: 425px) {
        width: 50%;
    }
`

export const TextGoogle = styled.img `
    width: 100%;
    
    &:hover {
        cursor: pointer;
    }
`

export const SearchGoogle = styled.input `
    width: 75%;
    height: 100%;

    outline: none;
    border: none;
`

export const LupaGoogle = styled.img `
    width: auto;
    height: 50%;

    &:hover {
        cursor: pointer;
    }

    /* reponsive - 425 */
    @media (min-width: 425px) {
        height: 40%;
    }
`

export const TecladoGoogle = styled.img `
    width: auto;
    height: 50%;

    &:hover {
        cursor: pointer;
    }

    /* reponsive - 425 */
    @media (min-width: 425px) {
        height: 40%;
    }
`

export const VozGoogle = styled.img `
    width: auto;
    height: 50%;

    &:hover {
        cursor: pointer;
    }

    /* reponsive - 425 */
    @media (min-width: 425px) {
        height: 40%;
    }
`

export const SearchButton = styled.button `
    width: 30%;
    height: 50%;

    font-size: 0.9em;
    
    border: none;
    border-radius: 10px;
    background-color: #E8E8E8;

    &:hover {
        cursor: pointer;

        font-weight: bold;
        background-color: #CFCFCF;
    }

    /* reponsive - 2560 */
    @media (min-width: 2560px) {
        font-size: 1.8em;
    }

    /* reponsive - 1024 */
    @media (min-width: 1024px) {
        font-size: 0.8em;
    }

    /* reponsive - 768 */
    @media (min-width: 768px) {
        font-size: 0.7em;
    }

    /* reponsive - 425 */
    @media (min-width: 425px) {
        width: 35%;

        font-size: 0.6em;
    }
`
