const Tweet = ({ name, username, date, message }) => {


    return (
        <div className="tweet">
            <ul>
            <li>
                 Name: {name}
           </li>
           <li>
                 Username: {username}
           </li>
           <li>
                 Date: {date}
           </li>
           <li>
                 Message: {message}
           </li>
          </ul> 
        </div>
        

    )
}