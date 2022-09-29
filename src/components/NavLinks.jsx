import React from "react";
import { Link,useLocation } from "react-router-dom";

function Li({text}) { return (<li className="border-r border-black px-2 cursor-pointer hover:font-semibold transition ease-in-out duration-150">{text}</li>) }


export default function NavLinks(){
const {pathname:path} = useLocation()
    return (
        <>
            <ul className="flex justify-center border-t border-black sm:border-none py-4 my-1 sm:py-0 sm:my-0 gap-2 text-md">
                <Link to="/">
                    {path !== "/" && <Li text="Home"/>}
                </Link>

                <Link to="/resume">
                    {path !== "/resume" && <Li text="Resume"/>}
                </Link>

                {/* <Link to="/projects">
                    {path !== "/projects" && <Li text="Projects" />}
                </Link> */}

                <Link to="/contact">
                    {path !== "/contact" && <Li text="Contact"/>}
                </Link>
            </ul>
        </>
    )
}