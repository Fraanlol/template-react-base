// src/router/AppRouter.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Hero from '../components/Hero'
import MainLayout from '../layout/mainLayout'

function NotFoundPage() {
    return (
        <div>
            <h2>404 - Not Found</h2>
            <p>Oops, the page you are looking for does not exist.</p>
        </div>
    )
}

export const AppRouter = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<MainLayout children={<Hero />} />}
            ></Route>

            <Route
                path="*"
                element={<MainLayout children={<NotFoundPage />} />}
            />
        </Routes>
    )
}
