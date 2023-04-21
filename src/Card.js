import { MdDeliveryDining } from "react-icons/md"

import "./card.css"

export default function Card({key, img, title, price, desc}) {
    return (
        <div className="card">
            <img className="cardImg" src={img} alt={title} />
            <div className="cardDetails">
                <h4>{title}</h4>
                <p className="cardPrice">{price}</p>
                <p className="cardDesc">{desc}</p>
                <p className="cardOrderDelivery">
                    Order a Delivery
                    <MdDeliveryDining className="cardOrderDeliveryImg" />
                </p>
            </div>
        </div>
    );
}
