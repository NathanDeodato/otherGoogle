import styled from "styled-components"

export const HeaderC = styled.header `
    width: 100vw;
    height: 13vh;

    border-bottom: #545454 1px solid;

    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const BoxLinks = styled.div `
    width: 10%;
    height: 100%;

    margin-right: 1%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    /* reponsive - 425 */
    @media (min-width: 425px) {
        width: 20%;
        
        margin-right: 3%;
    }
`

export const BoxMenus = styled.div `
    width: 10%;
    height: 100%;

    margin-left: 1%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    /* reponsive - 425 */
    @media (min-width: 425px) {
        width: 20%;
        
        margin-right: 3%;
    }
`

export const Plink = styled.a `
    font-size: 1em;

    &:hover {
        cursor: pointer;
        
        text-decoration: underline;
        font-weight: bold;
    }

    /* reponsive - 2560 */
    @media (min-width: 2560px) {
        font-size: 2em;
    }

    /* reponsive - 768 */
    @media (min-width: 768px) {
        font-size: 0.7em;
    }

    /* reponsive - 768 */
    @media (min-width: 425px) {
        font-size: 0.7em;
    }
`

export const Menu = styled.img `
    width: 21%;

    &:hover {
        cursor: pointer;
        
        width: 22%;
    }
`

export const Profile = styled.img `
    width: 21%;

    &:hover {
        cursor: pointer;
        
        width: 22%;
    }
`
