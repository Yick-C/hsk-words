import './App.css';

import { useState } from 'react';
import Header from './components/Header/Header';

import WordListPage from './pages/WordListPage';
import SavedWordsPage from './pages/SavedWordsPage';
import FlashcardsPage from './pages/FlashcardsPage';

import AuthModal from './components/AuthModal/AuthModal';

function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const [page, setPage] = useState('words');

  const openAuth = () => setAuthOpen(true);
  const closeAuth = () => setAuthOpen(false);

  return (
    <div className="App">
      <Header currentPage={page} onNavigate={setPage} />
      {page === 'words' && <WordListPage />}
      {page === 'saved' && <SavedWordsPage />}
      {page === 'flashcards' && <FlashcardsPage />}

      {authOpen && <AuthModal />}
    </div>
  );
}

export default App;
