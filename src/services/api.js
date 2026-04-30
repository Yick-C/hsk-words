import { MOCK_WORDS } from "../components/WordList/mock_words";

const BASE_URL = `${process.env.REACT_APP_API_URL}`;

export async function fetchWords(level) {
    // const res = await fetch(`${BASE_URL}/api/v1/word?hsk=${level}`);
    // if (!res.ok) throw new Error(`Failed to fetch words for HSK ${level}`);
    // return res.json();
    return MOCK_WORDS;
}
