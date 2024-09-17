import { NavLink } from "react-router-dom"


export const Navigation = () => {
    return (<nav className='navigation'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/movies'>Movies</NavLink>
        </nav>)
}