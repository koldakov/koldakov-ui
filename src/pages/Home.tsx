import { Badge, Button, ButtonGroup, Card, Col, Row } from "react-bootstrap";
import { saveAs } from "file-saver";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import profileImage from "../assets/images/profile.jpg";
import cv from "../assets/docs/Koldakov_Ivan_CV.pdf";

import "./Home.css";

export const Home = () => {
  const { t } = useTranslation();

  const saveCV = () => {
    saveAs(cv, "Koldakov_Ivan_CV.pdf");
  };
  const skills = [
    {
      name: t("Python.text"),
    },
    {
      name: t("Django.text"),
    },
    {
      name: t("AWS.text"),
    },
    {
      name: t("RabbitMQ.text"),
    },
    {
      name: t("Git.text"),
    },
    {
      name: t("Opsgenie.text"),
    },
    {
      name: t("Elasticsearch.text"),
    },
    {
      name: t("MongoDB.text"),
    },
    {
      name: t("CICD.text"),
    },
    {
      name: t("CleanCoding.text"),
    },
    {
      name: t("Docker.text"),
    },
    {
      name: t("Interviewing.text"),
    }
  ];

  const experiences = [
    {
      name: t("RedAcre.text"),
      description: t("RedAcreDescription.text"),
      urls: [
        {
          link: "https://redacreltd.com",
          name: "redacreltd.com",
        },
        {
          link: "https://zeply.com",
          name: "zeply.com",
        },
      ],
      dateFrom: "Apr 2022",
      dateTo: "Present",
    },
    {
      name: t("AtomSecurity.text"),
      description: t("AtomSecurityDescription.text"),
      urls: [
        {
          link: "https://staffcop.com",
          name: "staffcop.com",
        },
      ],
      dateFrom: "Apr 2017",
      dateTo: "Jan 2022",
    },
    {
      name: t("Novaris.text"),
      description: t("NovarisDescription.text"),
      dateFrom: "Oct 2016",
      dateTo: "Apr 2017",
    },
    {
      name: t("AcademMedia.text"),
      description: t("AcademMediaDescription.text"),
      dateFrom: "Jul 2015",
      dateTo: "Aug 2015",
    }
  ];

  const educations = [
    {
      name: t("NSU.text"),
      urls: [
        {
          link: "https://english.nsu.ru/",
          name: "nsu.ru",
        },
      ],
      dateFrom: "2012",
      dateTo: "2016",
      description: t("NSUDescription.text"),
      mainCourses: [
        {
          name: t("AlgebraAndNumberTheory.text"),
        },
        {
          name: t("MathematicalLogicAndFoundationsMathematics.text"),
        },
        {
          name: t("ProbabilityTheoryAndMathematicalStatistics.text"),
        },
        {
          name: t("MathematicalAndFunctionalAnalysis.text"),
        },
        {
          name: t("GeometryAndTopology.text"),
        },
        {
          name: t("DifferentialEquationsAndMathematicalPhysics.text"),
        },
        {
          name: t("ComputabilityTheoryAndTheoryOfAlgorithms.text"),
        },
        {
          name: t("Programming.text"),
        },
      ],
    }
  ];

  const interests = [
    {
      name: t("Qworpa.text"),
      description: t("QworpaDescription.text"),
      urls: [
        {
          link: "https://qworpa.com",
          name: "qworpa.com",
        },
      ],
    },
    {
      name: t("BrosFiles.text"),
      description: t("BrosFilesDescription.text"),
      urls: [
        {
          link: "https://brosfiles.com",
          name: "brosfiles.com",
        },
      ],
    },
    {
      name: t("Koldakov.text"),
      description: t("KoldakovDescription.text"),
      urls: [
        {
          link: "https://koldakov.com",
          name: "koldakov.com",
        },
      ],
    }
  ];

  return(
    <>
      <Row>
        <Col sm={3}>
          <Card>
            <Card.Img
              variant="top"
              src={profileImage}
            />
            <ButtonGroup
              className="d-flex"
              vertical
            >
              <Button
                className="btn-block mt-3"
                variant="danger"
                onClick={saveCV}
              >
                {t("DownloadCV.text")}
              </Button>
            </ButtonGroup>
          </Card>
        </Col>
        <Col sm={9}>
          <Card>
            <Card.Body>
              <Card.Title>
                {t("HomeProfileTitle.text")}
              </Card.Title>
              <Card.Text>
                {t("HomeProfileDescription.text")}
              </Card.Text>
              <hr />
              <Card.Title>
                {t("Skills.text")}
              </Card.Title>
              <div style={{ maxWidth: 600 }}>
                <Card.Text>
                  {skills.map((skill, i) => <Badge bg="success" key={i} pill>{skill.name}</Badge>)}
                </Card.Text>
              </div>
              <Card.Title>
                {t("Experience.text")}
              </Card.Title>
              {experiences.map(
                (experience, i) =>
                  <div
                    key={i}
                  >
                    <Card.Title
                      className="text-muted"
                    >
                      {experience.name}
                    </Card.Title>
                    <em
                      className="text-muted"
                    >
                      {experience.dateFrom} - {experience.dateTo}
                    </em>
                    <Card.Text>
                      {experience.description}
                    </Card.Text>
                    {experience.urls ? (
                      experience.urls.map(
                        (url, i) =>
                          <div>
                            <Link
                              className="link-primary"
                              to={url.link}
                              target="_blank"
                              key={i}
                            >
                              {url.name}
                            </Link>
                          </div>
                        )
                      ) : (<></>)
                    }
                    <hr />
                  </div>
                )}
              <Card.Title>
              </Card.Title>
              {educations.map(
                (education, i) =>
                  <div
                    key={i}
                  >
                    <Card.Title
                      className="text-muted"
                    >
                      {education.name}
                    </Card.Title>
                    <em
                      className="text-muted"
                    >
                      {education.dateFrom} - {education.dateTo}
                    </em>
                    <Card.Text>
                      {education.description}
                    </Card.Text>
                    <ul>
                    {education.mainCourses.map(
                      (course, i) =>
                        <li
                          key={i}
                        >
                          {course.name}
                        </li>
                    )}
                    </ul>
                    {education.urls ? (
                      education.urls.map(
                        (url, i) =>
                          <div>
                            <Link
                              className="link-primary d-block"
                              to={url.link}
                              target="_blank"
                              key={i}
                            >
                              {url.name}
                            </Link>
                          </div>
                        )
                      ) : (<></>)
                    }
                  </div>
                )}
              <Card.Title>
                {t("Interests.text")}
              </Card.Title>
              <Card.Text>
                {t("InterestsDescription.text")}
              </Card.Text>
              {interests.map(
                (interest, i) =>
                  <div
                    key={i}
                  >
                    <Card.Title
                      className="text-muted"
                    >
                      {interest.name}
                    </Card.Title>
                    <Card.Text>
                      {interest.description}
                    </Card.Text>
                    <ul>
                    {interest.urls.map(
                      (url, i) =>
                        <li
                          key={i}
                        >
                          <div>
                            <Link
                              className="link-primary"
                              to={url.link}
                              target="_blank"
                            >
                              {url.name}
                            </Link>
                          </div>
                        </li>
                    )}
                    </ul>
                  </div>
                )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
