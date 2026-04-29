import React from 'react'
import './Header.css'

const NAV_ITEMS = [
    { page: 'words', label: 'Word Lists' },
    { page: 'saved', label: 'My Words' },
    { page: 'flashcards', label: 'Flashcards' },
];

function Header({ currentPage, onNavigate }) {
    return (
        <header>
            <div class="logo">
                <div>
                    <div class="logo-text">Hànzì</div>
                    <div class="logo-sub">HSK Learning</div>
                </div>
            </div>
            <nav>
                {NAV_ITEMS.map(({ page, label }) => (
                    <button
                        key={page}
                        className={`nav-btn ${currentPage === page ? 'active' : ''}`}
                        onClick={() => onNavigate(page)}
                    >
                        {label}
                    </button>
                ))}
            </nav>
            <div class="user-area" id="userArea">
                <button class="sign-in-btn" id="headerSignIn">Sign in</button>
            </div>
        </header>
    )
}

export default Header