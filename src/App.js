import { Container } from "./Components/Container";
import { Header } from "./Components/Header";
import { Section } from "./Components/Section";
import { ListItem } from "./Components/Section/styled";
import { Portfolio } from "./Components/Portfolio";
import { Footer } from "./Components/Footer";
import { aboutMe } from "./aboutMe";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Section
          title="My skillset includes 🧰"
          body={aboutMe.skills.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        />
        <Section
          title="What I want to learn 🚀"
          body={aboutMe.toLearn.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        />
        <Portfolio />
        <Footer />
      </Container>
    </>
  );
}

export default App;
