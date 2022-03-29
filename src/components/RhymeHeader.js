const RhymeHeader = (props) => {
    return (<div className="row">
        <h2 className="col" id="output_description">Words that rhyme with {props.starting}</h2>
    </div>)
}

export default RhymeHeader;