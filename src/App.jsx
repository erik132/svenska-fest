import { useState } from 'react'
import './App.css'
import LandingPage from "./views/LandingPage.jsx"
import LoginPage from "./views/LoginPage.jsx"

function App() {
    const [currentPage, setCurrentPage] = useState('LandingPage');

    const onPageSwap = (newPage) =>{
        setCurrentPage(newPage);
    };

    switch (currentPage){
            case 'LoginPage':
                return <LoginPage onPageSwap={onPageSwap} />;
            default:
                return <LandingPage onPageSwap={onPageSwap} />;
        }
}

export default App
