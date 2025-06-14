import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
            <main className="max-w-7xl mx-auto p-4">
                <Outlet />
            </main>
        </div>
    );
}
