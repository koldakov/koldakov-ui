import { saveAs } from "file-saver";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import profileImage from "../assets/images/profile.jpg";
import cv from "../assets/docs/Koldakov_Ivan_CV.pdf";
import { useProfileData } from "../hooks/useProfileData";
import { Skeleton } from "../components/Skeleton";

import "./Home.css";

export const Home = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useProfileData();

  const saveCV = () => saveAs(cv, "Koldakov_Ivan_CV.pdf");

  return (
    <div className="profile">
      <aside className="profile-sidebar">
        <div className="profile-photo-wrap">
          {isLoading ? (
            <Skeleton height={260} />
          ) : (
            <img src={profileImage} alt="Ivan Koldakov" className="profile-photo" />
          )}
        </div>
        <button className="cv-button" onClick={saveCV}>
          {t("DownloadCV.text")}
        </button>
      </aside>

      <main className="profile-content">
        <section className="section section--hero">
          {isLoading ? (
            <>
              <Skeleton width="55%" height="2rem" />
              <Skeleton height="0.9rem" />
              <Skeleton width="90%" height="0.9rem" />
              <Skeleton width="75%" height="0.9rem" />
            </>
          ) : (
            <>
              <h1 className="profile-name">{data?.title}</h1>
              <p className="profile-bio">{data?.description}</p>
            </>
          )}
        </section>

        <section className="section">
          <h2 className="section-title">{t("Skills.text")}</h2>
          <div className="skills-list">
            {isLoading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <Skeleton
                    key={i}
                    inline
                    width={`${55 + (i % 5) * 18}px`}
                    height="24px"
                  />
                ))
              : data?.skills.map((skill, i) => (
                  <a
                    key={i}
                    href={skill.link}
                    target="_blank"
                    rel="noreferrer"
                    className="skill-tag"
                  >
                    {skill.name}
                  </a>
                ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">{t("Experience.text")}</h2>
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="entry">
                  <Skeleton width="50%" height="1rem" />
                  <Skeleton width="28%" height="0.8rem" />
                  <Skeleton height="0.85rem" />
                  <Skeleton width="92%" height="0.85rem" />
                </div>
              ))
            : data?.experiences.map((exp, i) => (
                <div key={i} className="entry">
                  <h3 className="entry-name">{exp.name}</h3>
                  <span className="entry-dates">
                    {exp.dateFrom} — {exp.dateTo}
                  </span>
                  <div className="entry-links">
                    {exp.urls?.map((url, j) => (
                      <Link
                        key={j}
                        to={url.link}
                        target="_blank"
                        className="entry-link"
                      >
                        {url.name}
                      </Link>
                    ))}
                  </div>
                  <p className="entry-desc">{exp.description}</p>
                </div>
              ))}
        </section>

        <section className="section">
          <h2 className="section-title">{t("Education.text")}</h2>
          {isLoading ? (
            <div className="entry">
              <Skeleton width="58%" height="1rem" />
              <Skeleton width="22%" height="0.8rem" />
              <Skeleton height="0.85rem" />
            </div>
          ) : (
            data?.educations.map((edu, i) => (
              <div key={i} className="entry">
                <h3 className="entry-name">{edu.name}</h3>
                <span className="entry-dates">
                  {edu.dateFrom} — {edu.dateTo}
                </span>
                <div className="entry-links">
                  {edu.urls?.map((url, j) => (
                    <Link
                      key={j}
                      to={url.link}
                      target="_blank"
                      className="entry-link"
                    >
                      {url.name}
                    </Link>
                  ))}
                </div>
                <p className="entry-desc">{edu.description}</p>
                <ul className="course-list">
                  {edu.mainCourses.map((course, j) => (
                    <li key={j}>{course}</li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </section>

        <section className="section section--last">
          <h2 className="section-title">{t("Interests.text")}</h2>
          <p className="section-intro">{t("InterestsDescription.text")}</p>
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="entry">
                  <Skeleton width="38%" height="1rem" />
                  <Skeleton width="70%" height="0.85rem" />
                  <Skeleton width="25%" height="0.8rem" />
                </div>
              ))
            : data?.interests.map((interest, i) => (
                <div key={i} className="entry">
                  <h3 className="entry-name">{interest.name}</h3>
                  <p className="entry-desc">{interest.description}</p>
                  <div className="entry-links">
                    {interest.urls.map((url, j) => (
                      <Link
                        key={j}
                        to={url.link}
                        target="_blank"
                        className="entry-link"
                      >
                        {url.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
        </section>
      </main>
    </div>
  );
};
