import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div className = "links">
            <header className = "links-content">
                <Link className = "link1" to = "/">Home</Link> <br/> <br/>
                <Link className = "link1" to = "/aboutme">About Me</Link><br/> <br/>
                <Link className = "link1"  to = "/projects">My Projects</Link> <br/> <br/>             
            </header>
        </div>
    )
}