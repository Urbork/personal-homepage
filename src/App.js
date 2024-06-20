import { useState } from "react";
import { ThemeWrapper } from "./components/ThemeWrapper";
import { Container } from "./components/Container";
import { ThemeChangeButton } from "./components/ThemeChangeButton";
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "./components/Footer";
import { aboutMe } from "./aboutMe";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <ThemeWrapper isDarkMode={isDarkMode}>
        <GlobalStyle />
        <Container>
          <ThemeChangeButton
            isDarkMode={isDarkMode}
            toggleTheme={toggleTheme}
          />
          <Header />
          <Section title="My skillset includes 🧰" body={aboutMe.skills} />
          <Section title="What I want to learn 🚀" body={aboutMe.toLearn} />
          <Portfolio />
          <Footer />
        </Container>
      </ThemeWrapper>
    </>
  );
}

export default App;
