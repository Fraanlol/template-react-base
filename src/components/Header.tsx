import React from 'react'

interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
    <header className="bg-blue-600 text-white p-4 text-xl font-bold">
        {title}
    </header>
)

export default Header
