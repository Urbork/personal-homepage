import { Container } from "./Components/Container";
import { Header } from "./Components/Header";
import { Section } from "./Components/Section";
import { Portfolio } from "./Components/Portfolio";
import { Footer } from "./Components/Footer";
import { aboutMe } from "./aboutMe";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Section title="My skillset includes 🧰" body={aboutMe.skills} />
        <Section title="What I want to learn 🚀" body={aboutMe.toLearn} />
        <Portfolio />
        <Footer />
      </Container>
    </>
  );
}

export default App;
