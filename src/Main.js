import heroImg from "./assets/hero.jpg"

import greekSaladImg from "./assets/greekSalad.jpg"
import bruschettaImg from "./assets/bruschetta.svg"
import lemonDessertImg from "./assets/lemonDessert.jpg"

import Dish from "./Dish"

import "./main.css"


export default function Main() {
    const dishesData = [
        {
            img: greekSaladImg,
            title: "Greek Salad",
            price: 12.99,
            desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons."
        },
        {
            img: bruschettaImg,
            title: "Bruschetta",
            price: 5.99,
            desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        },
        {
            img: lemonDessertImg,
            title: "Lemon Dessert",
            price: 5.00,
            desc: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        }
    ]

    const dishes = dishesData.map((dish) => {
        return (
            <Dish key={dish.title} img={dish.img} title={dish.title} price={dish.price} desc={dish.desc} />
        );
    });

    return (
        <main>
            <div id="hero">
                <div style={{position: "relative", right: "165px"}}>
                    <h1 style={{color: "#F4CE14"}}>Little Lemon</h1>
                    <h2 style={{color: "white"}}>Chicago</h2>
                    <p style={{color: "white", fontStyle: "italic", width: "500px"}}>We are a family owned Mediterranean restaraunt, focused on traditional recipes served with a modern twist.</p>
                    <button id="button">Reserve a table</button>
                </div>

                <div>
                    <img id="heroImg" src={heroImg} alt="Hero Img" />
                </div>

            </div>

            <div id="ribbon">
                <h1>This week specials!</h1>
                <button id="button">Online Menu</button>
            </div>

            <div id="dishes">
                {dishes}
            </div>
        </main>
    );
}
