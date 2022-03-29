
const SavedWords = (props) => {

    const savedWordsOutput = () => {
        if (props.words === 0) {
            return '';
        } else {
            return props.words.join(', ')
        }
    }

    return (<div className="row">
        <div className="col">Saved words: <span id="saved_words">{savedWordsOutput()}</span></div>
    </div>)
}

export default SavedWords