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
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
            Toggle Dark Mode
        </button>
    )
}
