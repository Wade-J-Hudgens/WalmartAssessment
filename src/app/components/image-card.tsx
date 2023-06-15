import styled from "styled-components";

export interface ImageCardProps {
    imageUrl: string;
    description: string;
}

export const ImageCard: React.FC < ImageCardProps > = (props : ImageCardProps) => <StyledContainer>
    <StyledImage src={
        props.imageUrl
    }/>
    <label>{
        props.description
    }</label>
</StyledContainer>

const StyledContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 200px;
    align-items: center;
    margin: 25px;
`
const StyledImage = styled.img `
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 15px;
    object-fit: fill;
    object-position: 50%;
`
