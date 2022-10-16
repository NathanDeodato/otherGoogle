import styled from "styled-components";

export const FooterC = styled.header `
    width: 100vw;
    height: 15vh;

    margin-top: 4.5%;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #E8E8E8;
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
`
