import { aboutContent } from "../../constants/about";
import Button from "../button";
import "./style.css";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__header">
          <span className="about__tag">{aboutContent.tag}</span>
          <h2 className="about__title">{aboutContent.title}</h2>
          <p className="about__description">{aboutContent.description}</p>

          <div className="about__cta">
            <Button href={aboutContent.cta.href} variant="outline">
              {aboutContent.cta.label}
            </Button>
          </div>

          <div className="about__techs-wrapper">
            <div className="about__techs-track">
              {/* Duplicamos a lista para criar o efeito de loop infinito sem emendas */}
              {[...aboutContent.technologies, ...aboutContent.technologies].map((tech, idx) => {
                const TechIcon = tech.icon;
                return (
                  <div key={idx} className="about__tech-item">
                    <TechIcon size={18} style={{ color: tech.color }} />
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="about__grid">
          {aboutContent.highlights.map((item, index) => {
            const CardIcon = item.icon;
            return (
              <div className="about__card" key={index}>
                <div className="about__card-icon">
                  <CardIcon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="about__card-title">{item.title}</h3>
                <p className="about__card-description">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;