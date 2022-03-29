const SearchRhymes = (props) => {
    const searchRhymes = (url) => {
        props.updateWord(props.word);
        console.log(url);
        fetch(url)
            .then((response) => response.json())
            .then((json) => props.updateRhyme(Object.values(json)));
    }

    return(
        <>
        <button id="show_rhymes" type="button" className="btn btn-primary"
                onClick={() => searchRhymes(`https://api.datamuse.com/words?${(new URLSearchParams({'rel_rhy': props.word})).toString()}`)}>Show rhyming words</button>
        <button id="show_synonyms" type="button" className="btn btn-secondary"
                onClick={() => searchRhymes(`https://api.datamuse.com/words?${(new URLSearchParams({'ml': props.word})).toString()}`)}>Show synonyms</button></>)
}

export default SearchRhymes;