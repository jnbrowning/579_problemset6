const Input = (props) => {

    return (
    <input className="form-control"
           type="text"
           placeholder="Enter a word"
           id="word_input"
           value={props.word}
           onChange={(e) => props.set(e.target.value)}
    />
    )
}

export default Input;