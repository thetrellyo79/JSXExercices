const maxLength = 8;

const Person = ({ age, hobbies, name }) => {
    let voteReply;
    if (age < 18) {
        voteReply = "You MUST be 18!!!!!!!!!!!!!!!!!!!!!!!!"
    }
   
    else {
        voteReply = "Please GO Vote!!!!!!!!!!!!!!!!!!!!!!!"
    }

    const hobbiesLIs = hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <p>
                <b>Information:</b>
            </p>
            <ul>
                <li>
                    Name: { name.slice(0, maxLength) }
                </li>
                <li>
                    Hobbies: { hobbiesLIs }
                </li>
                <li>
                    Age: { age }
                </li>
            </ul>
            <p>
                <b>Person:</b> <h3>{ voteReply }</h3>
            </p>
        </div>
    )
}