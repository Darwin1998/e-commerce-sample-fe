// src/components/DarkModeToggle.jsx
import React, { useEffect, useState } from 'react'

export default function DarkModeToggle() {
    const [dark, setDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
    })

    useEffect(() => {
        const root = document.documentElement
        if (dark) {
            root.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            root.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [dark])

    return (
        <button
            onClick={() => setDark(prev => !prev)}
            className="absolute top-4 right-4 px-4 py-2 mb-3 bg-gray-200 dark:bg-gray-700 rounded"
        >
            Toggle Dark Mode
        </button>
    )
}
