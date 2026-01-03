import { heroContent } from "../../constants/hero";
import Button from "../button";
import "./style.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__tag">{heroContent.tag}</span>

          <h1 className="hero__title">{heroContent.title}</h1>

          <p className="hero__description">{heroContent.description}</p>

          <div className="hero__actions">
            <Button href={heroContent.primaryAction.href} variant="primary">
              {heroContent.primaryAction.label}
            </Button>
            
            <Button href={heroContent.secondaryAction.href} variant="outline">
              {heroContent.secondaryAction.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
