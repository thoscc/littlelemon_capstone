import navImg from "./assets/nav.svg"
import "./nav.css"

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <img src={navImg} alt="Little Lemon Logo"/>
                </li>

                <li>
                    <a href="#home">Home</a>
                </li>

                <li>
                    <a href="#about">About</a>
                </li>

                <li>
                    <a href="#menu">Menu</a>
                </li>

                <li>
                    <a href="#reservations">Reservations</a>
                </li>

                <li>
                    <a href="#orderonline">Order Online</a>
                </li>

                <li>
                    <a href="#login">Login</a>
                </li>

            </ul>
        </nav>
    );
}
