import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'

const Home: React.FC = () => <Hero />

const About: React.FC = () => (
    <div className="p-4">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-2">This is the about page.</p>
    </div>
)

const App: React.FC = () => {
    return (
        <div>
            <Header title="React Vite Template" />
            <main className="p-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
