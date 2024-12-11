import Header from "./Header.jsx"
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button";
import Footer from "./Footer.jsx";
import Student from "./Student";
import UserGreeting from "./UserGreetings.jsx";

function App() {
  return(
    <>
      <Header></Header>
      <Food></Food>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Button></Button>
      <Student name='Carlos' age={3} isStudent={false}></Student>
      <Student name='Sponge' age={15} isStudent={true}></Student>
      <Student name='Sandy' age={12} isStudent={true}></Student>
      <Student name='Pattrick' age={2} isStudent={false}></Student>
      <Student name='Larry'></Student>

      <UserGreeting isLoggedIn={false} username='Juicee'></UserGreeting>
      <Footer></Footer>
    </>
  );
}

export default App
