import React, { useState, useEffect } from "react";
import Card from "./Card";

function CardList() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/flashcards")
            .then((response) => response.json())
            .then((cards) => setCards(cards))
    }, [])

    console.log(cards)

    return (
        <main>
            <h1>Hello World!</h1>
        </main>
    );
}


export default CardList