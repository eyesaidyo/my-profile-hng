import slack from "./slack.svg";
import github from "./github.svg";
import i4g from "./i4g.svg";
import zuri from "./zuri.svg";
import "./App.css";
import Card from "./Card";
function App() {
  return (
    <div className="App">
      <img
        alt="profile"
        src="https://pbs.twimg.com/media/FFHy-ipXIAITdC4.jpg"
        id="profile__img"
      />
      <h3>John Irem</h3>
      <h3 id="slack">Rajon</h3>
      <div className="cards-container">
        <Card
          link="https://training.zuri.team/"
          content="Zuri Team"
          Id="btn__zuri"
        />
        <Card link="https://books.zuri.team/" content="Zuri Books" Id="books" />
        <Card
          link="https://books.zuri.team/"
          content="Python Books"
          Id="books"
        />
        <Card
          link="https://background.zuri.team/"
          content="Background checks for coders"
          Id="pitch"
        />
        <Card />
        <Card />
        <img src={slack} alt="slack" />
        <a href="https://github.com/eyesaidyo">
          <img src={github} alt="github" />
        </a>
        <footer>
          <img src={zuri} alt="zuri" />
          <p>HNG Internship 9</p>
          <img src={i4g} alt="i4g" />
        </footer>
      </div>
    </div>
  );
}

export default App;
