import Button from "./Button"

function Navigation() {
    return (
        <div className="navbar">
            <div className="logo"><p>Logo</p></div>
            <div className="nav-items">
                <div>Home</div>
                <div>Contact Us</div>
                <div>Services</div>
                <div><Button /></div>
            </div>
        </div>
    )
}

export default Navigation