function App() {
    return (
      <div>
        <Tweet 
            name="Brenda Song"
            username="BrendaSong"
            date={new Date().toDateString()}
            message="Yay Me!!!"
            />
            <Tweet 
            ame="Justin Beiber"
            username="justinbeiber"
            date={new Date().toDateString()}
            message="Never Say Never!!!"
            />
            <Tweet
            name="Ariana Grande"
            username="ArianaToday"
            date={new Date().toDateString()}
            message="Thank You, Next!!!"
            />
        </div>
        
        )
    }




    
    ReactDOM.render(<App/>, document.getElementById("root"))