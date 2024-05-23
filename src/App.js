import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "./components/Footer";
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
