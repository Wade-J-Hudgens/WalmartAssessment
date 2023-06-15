"use client";

import {ReactNode, useEffect, useState} from "react"
import {styled} from "styled-components";
import {Character, getCharacters} from "../api/character";
import {ImageCard} from "./image-card";
import {Pagination, Spin} from 'antd'

export const ImageFeed: React.FC < {} > = () => {
    const [characters, setCharacters] = useState < Character[] > ([]);
    const [page, setPage] = useState < number > (0);
    const [count, setCount] = useState < number > (1);
    const [images, setImages] = useState < ReactNode > (
        <></>
    )
    const [loadingCharacters, setLoadingCharacter] = useState < boolean > (false);

    useEffect(() => {
        const fetchData = async () => {
            setLoadingCharacter(true);
            const result = await getCharacters(page);
            setCount(result.info.count);
            setCharacters(result.results);
            setLoadingCharacter(false)
        };
        fetchData();
    }, [page])
    useEffect(() => {
        setImages(characters.map(character => {
            return <ImageCard key={character.id} imageUrl={
                    character.image
                }
                description={
                    character.name
                }/>
        }))
    }, [characters])

    return (
        <StyledContainer id='TR'>
            <h2>Rick And Morty Characters</h2>
            <StyledImageContainer> {
                loadingCharacters ? <Spin /> : images
            } </StyledImageContainer>
            <Pagination onChange={(page) => setPage(page)} total={count} current={page} showSizeChanger={false} />
        </StyledContainer>
    )
}
const StyledContainer = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledImageContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`