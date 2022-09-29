import React from "react";
import { Link } from "react-router-dom"; 
import NavLinks from "./NavLinks";

export default function Navbar(){
    return (
        <>
        <nav className="flex justify-center items-center sm:block">
            <div className="grid sm:flex justify-between items-baseline px-4 py-2">
                <div className="flex items-baseline gap-1">
                <Link to="/"><h1 className="text-2xl font-semibold hover:scale-90 transition ease-in-out duration-150">Shivansh Mishra</h1></Link>
                <p>Web Designer</p>
                </div>
                
                <NavLinks />
            </div>
        </nav>
        </>
    )
}