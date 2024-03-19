import { Container } from "./Components/Container";
import { Header } from "./Components/Header";
import { Section } from "./Components/Section";
import { ContentItem } from "./Components/Section/styled";
import { Portfolio } from "./Components/Portfolio";
import { Footer } from "./Components/Footer";
import { skills, toLearn } from "./skills";

function App() {
  return (
    <>
      <Container>
        <Header name="Jonasz Jachym" />
        <Section
          title="My skillset includes 🧰"
          body={skills.map((item) => (
            <ContentItem key={item}>{item}</ContentItem>
          ))}
          extraHeaderContent={<button>XYYz</button>}
        />
        <Section
          title="What I want to learn 🚀"
          body={toLearn.map((item) => (
            <ContentItem key={item}>{item}</ContentItem>
          ))}
        />
        <Portfolio title="Portfolio" body="XTEst" />
        <Footer extraContent={<button>IG</button>} />
      </Container>
    </>
  );
}

export default App;
