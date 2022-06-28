import React from "react";

function QuestionList() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/flashcards")
        .then((response) => response.json())
        .then((cards) => setCards(cards))
    }, [])

    console.log(cards)

    function handleQuestionAnswered(correct) {
        if (currentQuestionId < cards.length) {
            setCurrentQuestion((currentQuestionId) => currentQuestionId + 1);
        } else {
            setCurrentQuestion(null);
        }
        if (correct) {
            setScore((score) => score + 1);
        }
    }

    return (
        <main>
            <section>
                {currentQuestion ? (
                    <Question />
                ) : (
                    <>
                        <h1>Game Over</h1>
                        <h2>Total Correct: {score}</h2>
                    </>
                )}
            </section>
        </main>
    );
};


export default CardList;