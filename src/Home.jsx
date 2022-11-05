import Card from "./Card";
import slack from "./slack.svg";
import github from "./github.svg";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <img
        alt="profile"
        src="https://pbs.twimg.com/media/FFHy-ipXIAITdC4.jpg"
        id="profile__img"
      />
      <h3 id="twitter">@eyesaidyo</h3>
      <h3 id="slack">Rajon</h3>
      <div className="cards-container">
        <Card link="https://twitter.com/eyesaidyo" content="Twitter" />
        <Card
          link="https://training.zuri.team/"
          content="Enroll for Zuri training"
          Id="btn__zuri"
        />
        <Card
          link="https://books.zuri.team/"
          content="Get books on design and programming"
          Id="books"
        />
        <Card
          link="https://books.zuri.team/python-for-beginners?ref_id=Rajon"
          content="Buy our new coding book"
          Id="book__python"
        />
        <Card
          link="https://background.zuri.team/"
          content="A must-have tool for recruiters!"
          Id="pitch"
        />
        <Card
          link="https://books.zuri.team/design-rules"
          content="Get free design book"
          Id="book__design"
        ></Card>
        <Card link="/contact" content="Contact me" Id="contact"></Card>
        <a href="https://slack.com">
          <img className="svg" src={slack} alt="slack" />
        </a>
        <a href="https://github.com/eyesaidyo">
          <img className="svg" src={github} alt="github" />
        </a>
        <Footer />
      </div>
    </div>
  )
}
export default Home;