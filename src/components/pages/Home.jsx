import { motion } from 'framer-motion'
import './Home.css'

export default function Home() {
    return (
        <section className="home">
            {/* Content */}
            <motion.div
                className="home-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    className="home-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    CIAO, SONO
                    <span className="highlight">ALBERTO CADORIN</span>
                    MA PUOI CHIAMARMI
                    <span className="highlight">ALBY</span>
                </motion.h1>

                <motion.p
                    className="home-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Sono un junior full stack web developer,<br />
                    ho appena finito il corso di Boolean
                </motion.p>

                <motion.div
                    className="home-links"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <a href="#projects" className="home-link">
                        → guarda i miei progetti
                    </a>
                    <a href="#about" className="home-link">
                        → scopri di più su di me
                    </a>
                </motion.div>
            </motion.div>
        </section>
    )
}