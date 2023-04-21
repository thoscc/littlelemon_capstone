import heroImg from "./assets/hero.jpg"

import greekSaladImg from "./assets/greekSalad.jpg"
import bruschettaImg from "./assets/bruschetta.svg"
import lemonDessertImg from "./assets/lemonDessert.jpg"

import Card from "./Card"

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
            <Card key={dish.title} img={dish.img} title={dish.title} price={dish.price} desc={dish.desc} />
        );
    });

    return (
        <main>
            <article>
                <h1 id="heroTitle" class="hero">Little Lemon</h1>
                <article>
                    <h2 id="heroSubTitle" class="hero">Chicago</h2>
                    <p class="hero">We are a family owned Mediterranea, restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button id="heroButton">Reserve a Table</button>
                    <img id="heroImg" src={heroImg} alt="Little Lemon Restaurant Hero Section"/>
                </article>

                <article>
                    <h1 id="highlightsSubTitle">This weeks specials!</h1>
                    <button id="highlightsButton">Online Menu</button>
                    <div> {dishes} </div>
                </article>
            </article>
        </main>
    );
}
