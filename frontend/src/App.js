function App() {
  const send = () => {
    const date = new Date("2021-03-30").getTime();

    console.log(date);
  };

  return (
    <div className="App">
      <input type="date" id="date" min="2021-01-01" max="2021-03-30"></input>
      <button
        onClick={() => {
          const date = document.querySelector("input").value;
          console.log(typeof date, date);
        }}
      >
        Show date
      </button>
    </div>
  );
}

export default App;
