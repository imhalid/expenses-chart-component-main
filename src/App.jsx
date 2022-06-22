import "./App.css";
import logo from "./svg/logo.svg";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <main className="container">
        <section className="section1">
          <article className="totalBalance">
            <h5>My balance</h5>
            <h1>$921.48</h1>
          </article>
          <img src={logo} alt="logo" />
        </section>
        <section className="section2">
          <h1>Speeding - Last 7 Days</h1>
          <div className="charts-container">
            {data.map((item) => (
              <div key={item.key} className="chart">
                <div className="charts">
                  <h3>{item.day}</h3>
                  <div data-value={100 - item.amount}></div>
                  <h4>{item.amount}</h4>
                </div>
              </div>
            ))}
            <div className="spacer" />
          </div>

          <div className="total-container">
            <article className="total">
              <h5>Total this month</h5>
              <h1>$478.33</h1>
            </article>
            <article className="percentage">
              <h5>+2.4%</h5>
              <p>from last month</p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
