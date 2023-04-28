import { MdDeliveryDining } from "react-icons/md"

import "./dish.css"

export default function Dish({key, img, title, price, desc}) {
    return (
        <div className="dish">
            <img className="dishImg" src={img} alt={title} />

            <div className="dishInfo">
                <h4 style={{marginLeft: "10px"}}>{title}</h4>
                <h4 style={{marginRight: "10px"}}>${price}</h4>
            </div>

            <div style={{margin: "10px", height: "150px"}}> {desc} </div>

            <p className="dishDelivery">
                    Order a Delivery
                    <MdDeliveryDining className="dishDeliveryImg" />
            </p>
        </div>
    );
}
