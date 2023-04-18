import "./footer.css"

export default function Footer(props) {
    return (
        <footer>

            <section>
                <h1> Contact Us </h1>
                <ul>
                    <li> <b> Post Address </b> 0000 Little Lemon Street </li>
                    <li> <b> Email Address </b> littlelemon@gmail.com </li>
                    <li> <b> Phone Number </b> +33 0 00 00 00 00 </li>
                </ul>
            </section>

            <section>
                <h1> Opening Hours </h1>
                <ul>
                    <li> <b> Monday to Friday </b> 11:00 - 15:00 / 19:00 - 23:00 </li>
                    <li> <b> Saturday </b> 12:00 - 00:00 </li>
                    <li> <b> Sunday </b> 11:00 - 15:00 </li>
                </ul>
            </section>

        </footer>
    );
}
