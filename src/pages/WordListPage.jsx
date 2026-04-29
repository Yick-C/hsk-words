import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Tabs from '../components/Tabs/Tabs'
import Search from '../components/Search/Search'
import WordList from '../components/WordList/WordList';


function WordListPage() {
    const levels = [1, 2, 3, 4, 5]
    const [currentLevel, setCurrentLevel] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [words, setWords] = useState([]);

    useEffect(() => {
        fetchWords();
    }, [currentLevel]);

    useEffect(() => {
        filterWords();
    }, [searchQuery]);

    const fetchWords = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/word?hsk=${currentLevel}`);
            setWords(response.data);
            console.log(words);

        } catch (error) {
            console.error("Error fetching words:", error);
        }
    };

    const filterWords = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/word?english=${searchQuery}`);
            setWords(response.data);
            console.log(words);

        } catch (error) {
            console.error("Error fetching words:", error);
        }
    };

    return (
        <>
            <h1>HSK {currentLevel} Vocabulary</h1>
            <Tabs levels={levels} currentLevel={currentLevel} onSelectLevel={setCurrentLevel} />
            <Search onSearch={setSearchQuery} />
            <WordList words={words} />
        </>

    )
}

export default WordListPage