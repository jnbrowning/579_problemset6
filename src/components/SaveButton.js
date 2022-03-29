const SaveButton = (props) => {

    const saveButtonHandler = (e) => {
        console.log(props.word);
        props.saveWord((previousList) => {
            if (props.saved) {
                return previousList.filter((value) => value !== props.word);
            } else {
               return [...previousList, props.word]
            }
        });
        props.setSaved((previousValue) => {
            return !previousValue;
        })
    };

    return (
        <button type="button" className="btn btn-outline-success" onClick={saveButtonHandler}>Save</button>
    )
}

export default SaveButton;