function Option({ options, dispatch, answer, correctOption }) {
    const hasAnswered = answer !== null;
    return (
        <div className="options">
            {options.map((option, i) => <button className={`btn btn-option ${i === answer ? "answer" : ""} ${!hasAnswered ? "" : i === correctOption ? "correct" : "wrong"}`} key={option} onClick={() => dispatch({ type: "newAnswer", payload: i })} disabled={hasAnswered}>
                {option}
            </button>)}
        </div>
    )
}

export default Option;
