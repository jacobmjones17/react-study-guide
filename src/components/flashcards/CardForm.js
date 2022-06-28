import React, { useState } from "react";

function CardForm(props) {
    const [formData, setFormData] = useState({
        prompt: "",
        answer: "",
    });

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newCardInfo = {
            "prompt": formData.prompt,
            "answers": [
                formData.answer
            ]
        }
        fetch("http://localhost:3000/questions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCardInfo)
        })
            .then((response) => response.json())
            .then((newCard) => console.log(newCard))
    }

    return (
        <section>
            <h1>New Flashcard</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Prompt:
                    <input
                        type="text"
                        name="prompt"
                        value={formData.prompt}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Answer 1:
                    <input
                        type="text"
                        name="answer"
                        value={formData.answer}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Add Flashcard</button>
            </form>
        </section>
    );
}

export default CardForm;
