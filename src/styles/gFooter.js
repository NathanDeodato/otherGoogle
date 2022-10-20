import styled from "styled-components";

export const FooterC = styled.header `
    width: 100vw;
    height: 15vh;

    margin-top: 4.5%;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #E8E8E8;

    /* reponsive - 2560 */
    @media (min-width: 2560px) {
        margin-top: 6%;
    }

    /* reponsive - 1440 */
    @media (min-width: 1440px) {
        margin-top: 6.5%;
    }

    /* responsive - 1024 */
    @media (min-width: 1024px) {
        margin-top: 7.5%;
    }

    /* reponsive - 768 */
    @media (min-width: 768px) {
        margin-top: 12%;
    }

    /* reponsive - 425 */
    @media (min-width: 425px) {
        margin-top: 25%;
    }

    /* reponsive - 425 */
    @media (min-width: 375px) {
        margin-top: 30%;
    }
`

export const BoxText = styled.div `
    width: 30%;
    height: 50%;

    margin-left: -65%;

    display: flex;
    align-items: center;
`

export const BoxTextOther = styled(BoxText) `
    justify-content: space-around;
    margin-left: -66.5%;

    /* reponsive - 1024 */
    @media (min-width: 1024px) {
        width: 40%;

        margin-left: -56%;
    }

    /* reponsive - 768 */
    @media (min-width: 768px) {
        width: 50%;

        margin-left: -49%;
    }

    /* reponsive - 425 */
    @media (min-width: 425px) {
        width: 60%;

        margin-left: -37%;
    }

    /* reponsive - 375 */
    @media (min-width: 375px) {
        width: 65%;

        margin-left: -32%;
    }
`

export const Divisor = styled.hr `
    width: 98%;
    height: 1%;

    background-color: #545454;
`

export const Text = styled.p `
    &:hover {
        cursor: pointer;

        font-weight: bold;
        text-decoration: underline;
    }

    /* reponsive - 2560 */
    @media (min-width: 2560px) {
        font-size: 1.7em;
    }

    /* reponsive - 768 */
    @media (min-width: 768px) {
        font-size: 0.7em;
    }

    /* reponsive - 425 */
    @media (min-width: 425px) {
        font-size: 0.6em;
    }

    /* reponsive - 375 */
    @media (min-width: 375px) {
        font-size: 0.6em;
    }
`
