import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <section className="about">
            {/* Text Section */}
            <div className="about-content">
                <h1 className="about-title">CHI SONO</h1>
                <div className="about-divider" />

                <p className="about-text">
                    Il mio viaggio nel mondo del coding è iniziato dalla curiosità di capire cosa ci fosse davvero "sotto il cofano" delle piattaforme digitali che usiamo ogni giorno.
                    Grazie al percorso intensivo con <strong>Boolean</strong>, ho trasformato quella curiosità in una professione,
                    acquisendo le competenze necessarie per gestire progetti web dalla struttura del database fino all'interfaccia utente.
                </p>

                <p className="about-text">
                    Quando stacco dal codice mi trovi spesso immerso nel mondo dei <strong>videogiochi</strong> o a leggere l'ultimo volume di un <strong>manga</strong>.
                    Credo che la creatività che si trova in questi mondi sia una grande fonte d'ispirazione anche per progettare interfacce innovative e coinvolgenti.
                </p>

                <a href="/Alberto Cadorin CV Full-Stack.pdf" download className="cv-download">
                    ↓ scarica il mio CV
                </a>

                <Link to="/" className="about-link">
                    ← torna alla home
                </Link>

            </div>

            {/* Image Section */}
            <div className="about-image-section">
                <div className="about-image-wrap">
                    <img
                        src="/images/foto-portfolio.jpg"
                        alt="Alberto Cadorin"
                        className="about-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;