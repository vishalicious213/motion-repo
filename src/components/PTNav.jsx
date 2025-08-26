import { Link } from "react-router"

const PTNav = () => {
    return (
        <nav>
            <li><Link to="/pthome">PT-Home</Link></li>
            <li><Link to="/ptabout">PT-About</Link></li>
        </nav>
    )
}

export default PTNav