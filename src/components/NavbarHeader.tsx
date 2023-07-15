import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { AiFillLinkedin, AiFillInstagram, AiTwotoneMail } from "react-icons/ai";

import { useTranslation } from 'react-i18next';

export const NavbarHeader = () => {
  const { t, i18n } = useTranslation();

  return(
    <Navbar
      sticky="top"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand
          href="/"
        >
          {t("NavbarBrand.text")}
        </Navbar.Brand>
        <Nav
          className="me-auto"
        >
          <Nav.Item>
            <Nav.Link
              href="https://linkedin.com/in/aiv/"
              target="_blank"
            >
              <AiFillLinkedin
                size={25}
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="https://instagram.com/its_baiter"
              target="_blank"
            >
              <AiFillInstagram
                size={25}
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="mailto:ivan@koldakov.com?Subject=[koldakov]-koldakov"
            >
              <AiTwotoneMail
              size={25}
            />
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item>
          <Dropdown className="ml-auto">
            <Dropdown.Toggle
              variant="text-dark"
              id="dropdown-basic"
              size="lg"
              className="btn-icon-only"
            >
              {t("Language.text")}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => i18n.changeLanguage("en-US")}
                active={i18n.language == "en-US" ? true : false}
              >
                {t("LanguageNameEN.text")}
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => i18n.changeLanguage("ru")}
                active={i18n.language == "ru" ? true : false}
              >
                {t("LanguageNameRU.text")}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
