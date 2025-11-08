import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  )
}

function Home() {
  return (
    <>
      hello
    </>
  );
}

function Account() {
  return (
    <h1>Account</h1>
  );
}

export default App
