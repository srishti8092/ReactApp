function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Srishti Mishra</h1>
      <h2>Today Date is {currDate.toLocaleDateString()}.</h2>
      <h2>The time now is {currDate.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;