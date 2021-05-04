import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="flex justify-between p-6 mt-5 items-center border-dark-blue bg-blue-200 hover:bg-blue-100 max-w-full h-50 bg-gradient-to-r from-green-100 to-green-300">
            <Link to="/"> Home</Link>


            <Link to="/about"> About</Link>

            <a href="mailto:kofi@kofihayford.com"> Contact
                </a>


        </div>
    )
}
