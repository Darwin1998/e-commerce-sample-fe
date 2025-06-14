import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
            <header className="bg-indigo-600 text-white p-4 shadow-md">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="text-xl font-bold">E-Commerce Sample</Link>
                </div>
            </header>
            <main className="max-w-7xl mx-auto p-4">
                <Outlet />
            </main>
        </div>
    );
}
