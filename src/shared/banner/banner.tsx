import { styled } from "styled-components";

const Warpper = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: auto;
    height: 410px;
    
`

const Img = styled.img`
    width: 100%;
    height: 100%;

`

export const Banner = () => {
    return (
        <Warpper>
            <Img src="src/shared/icons/main/banner.png" alt="" />
        </Warpper>
    );
};
