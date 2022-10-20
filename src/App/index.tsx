import { useState } from 'react';
import {
  Container,
  SearchArea,
  SearchBar,
  SearchButton,
  MagnifyingGlassSolid,
  SpanNotFoundMessage,
} from './styles';

import MagnifyingGlassSolidSource from './../assets/icons/magnifying-glass-solid.svg';
import Word from './../classes/Word';
import api from './../services/api';
import WordCard from '../components/WordCard';

const App = () => {
  const [word, setWord] = useState<string>('');
  const [words, setWords] = useState<Word[]>([]);
  const [notFoundMessage, setNotFoundMessage] = useState<string>('');

  const searchWords = async () => {
    if (!word) return;
    setWords([]);
    setNotFoundMessage('');
    try {
      const response = await api.get(import.meta.env.VITE_API_ENDPOINT + word);
      let words = response.data;
      setWords(words);

    } catch(error) {
      setNotFoundMessage(`Oh, puxa! ;'( Parece que a palavra "${word}" não consta nos nossos registros.`);
    }
  }

  return (
    <Container>
      <SearchArea>
        <SearchBar
          placeholder="Aprenda novas palavras&hellip;"
          value={word}
          onChange={(event) => setWord(event.target.value)} />

        <SearchButton onClick={searchWords}>
          <MagnifyingGlassSolid
            src={MagnifyingGlassSolidSource}
            alt="Lupa" />
        </SearchButton>
      </SearchArea>

      {words.map((word: Word, index) => <WordCard key={index} word={word} />)}

      <SpanNotFoundMessage>{notFoundMessage}</SpanNotFoundMessage>
    </Container>
  )
}

export default App;