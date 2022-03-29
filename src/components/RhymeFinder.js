import SavedWords from "./SavedWords";
import RhymeOutput from "./RhymeOutput";
import { useState } from 'react';
import RhymeHeader from "./RhymeHeader";
import SearchRhymes from "./SearchRhymes";
import Input from "./Input";

const RhymeFinder = () => {

    const [savedWords, saveWord] = useState([]);
    const [rhymingWords, updateRhymes] = useState([]);
    const [startingWord, confirmWord] = useState('');
    const [rhymeWord, setWord] = useState('');

    return (
        <>
        <SavedWords words={savedWords} />
        <div className="row">
            <div className="input-group col">
                <Input word={rhymeWord} set={setWord} />
                <SearchRhymes word={rhymeWord} updateWord={confirmWord} updateRhyme={updateRhymes}/>
            </div>
        </div>
            <RhymeHeader starting={startingWord} />
            <RhymeOutput words={rhymingWords} saveWord={saveWord}/>
        </>)
}

export default RhymeFinder;