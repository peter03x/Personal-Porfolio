import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function NavBar() {
    return <nav className="nav">
        <Link to="/" className="home-link">Hoang Bao Phuc Chau</Link>
        <ul>
            <CustomLink to="/education">Education</CustomLink>
            <CustomLink to="/workxp">Work Experience</CustomLink>
            <CustomLink to="/skills">Skills</CustomLink>
            <CustomLink to="/contact">Contacts</CustomLink>
        </ul>
    </nav>
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end:true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export {CustomLink};

