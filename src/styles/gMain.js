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
    align-items: baseline;
`

export const BoxInput = styled.div `
    width: 40%;
    height: 13%;

    padding-left: 4%;

    display: flex;
    justify-content: center;
    align-items: center;

    
    border: #545454 solid 1px;
    border-radius: 50px;
    outline: none;
`

export const BoxButtons = styled.div `
    width: 30%;
    height: 25%;

    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const TextGoogle = styled.img `
    &:hover {
        cursor: pointer;
    }
`

export const SearchGoogle = styled.input `
    width: 80%;
    height: 100%;

    margin-left: -15%;

    outline: none;
    border: none;
`

export const LupaGoogle = styled.img `
    width: auto;
    height: 3%;

    position: absolute;
    top: 50.5%;
    left: 31.5%;

    &:hover {
        cursor: pointer;
    }
`

export const TecladoGoogle = styled.img `
    width: auto;
    height: 3%;

    position: absolute;
    top: 50.5%;
    left: 65%;

    &:hover {
        cursor: pointer;
    }
`

export const VozGoogle = styled.img `
    width: auto;
    height: 3%;

    position: absolute;
    top: 50.5%;
    left: 67.5%;

    &:hover {
        cursor: pointer;
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
`
