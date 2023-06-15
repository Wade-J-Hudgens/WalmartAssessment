export interface Info {
    count: number;
    pages: number;
    next: string;
    prev: string;
}
export interface Character {
    id: number;
    name: string;
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    },
    image: string;
    episode: string[];
    url: string;
    created: string;
}
export interface GetCharactersResponse {
    info: Info;
    results: Character[];
}

export const getCharacters = async (page : number) : Promise < GetCharactersResponse > => {
    const streamResult = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const result = await streamResult.json();
    return result;
}
