import { Container } from 'react-bootstrap';
import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";

import CookieConsent from "react-cookie-consent";

import { Home, NotFound } from './pages';
import { NavbarHeader } from './components';
import './App.css';

function App() {
  const { t } = useTranslation();

  return (
    <div className="app">
      <NavbarHeader />
      <Container className="pt-3">
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="*" element={ <NotFound /> }/>
        </Routes>
      </Container>
      <CookieConsent
        location="bottom"
        buttonText={t("CookieButton.text")}
        cookieName="koldakov.com-cookies"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        >
          {t("CookieContent.text")}
      </CookieConsent>
    </div>
  );
}

export default App;
