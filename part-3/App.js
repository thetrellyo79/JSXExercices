function App() {
    return (
      <div>
        <Person
          name="GoldenRodMan"
          age={38}
          hobbies={["Eating", "Sleeping", "Farting like crazy"]}
        />
        <Person
          name="Drake"
          age={17}
          hobbies={["Music, Being a Popstar"]}
        />
        </div>
        )
    }

    ReactDOM.render(<App/>, document.getElementById("root"))