import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./NotFound.css";

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex align-items-center justify-content-center pt-4">
      <Row className="text-center">
        <Col md={12}>
          <p className="fs-3"> <span className="text-danger">
            {t("Oops.text")}</span> {t("PageNotFound.text")}
          </p>
          <p className="lead">
            {t("PageNotFoundDescription.text")}
          </p>
          <Link to="/" className="btn btn-primary">{t("GoHome.text")}</Link>
        </Col>
      </Row>
    </div>
  );
}
