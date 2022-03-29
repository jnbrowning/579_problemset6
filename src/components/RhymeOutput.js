import SaveButton from "./SaveButton";
import { useState } from 'react';

const RhymeOutput = (props) => {

    const [isSaved, setIsSaved] = useState(false);

    //creates HTML for rhyming words list
    const rhymeList = () => {
        const rhymes = [];
        if (props.words.length > 0) {
            props.words.forEach((wordInstance) =>
                rhymes.push(
                    <li className={`${isSaved ? 'saved' : 'not-saved'}`}>{wordInstance.word}
                    <SaveButton
                        saveWord={props.saveWord}
                        word={wordInstance.word}
                        saved={isSaved}
                        setSaved={setIsSaved}
                    />
                    </li>
                )
            );
        } else {
            rhymes.push(<li>(no results)</li>);
        }
        return rhymes;
    }

    return (
        <div className="output row">
            <output id="word_output" className="col">{rhymeList()}</output>
        </div>
    );
}

export default RhymeOutput;