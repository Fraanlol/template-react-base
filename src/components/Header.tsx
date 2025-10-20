import { Link } from 'react-router-dom'

interface HeaderProps {
    title: string
}

const Header = ({ title }: HeaderProps) => (
    <header className="bg-blue-600 text-white p-4 text-xl font-bold flex justify-between items-center">
        <p>{title}</p>
        <nav className="p-4 flex gap-4">
            <Link to="/" className="text-white">
                Home
            </Link>
            <Link to="/about" className="text-white">
                About
            </Link>
        </nav>
    </header>
)

export default Header
