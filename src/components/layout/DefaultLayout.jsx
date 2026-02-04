import { motion } from 'framer-motion'
import './DefaultLayout.css'


export default function DefaultLayout({ children }) {
    return (
        <div className="layout">
            {/* Animated background blobs */}
            <div className="layout-bg">
                <motion.div
                    className="blob blob-1"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="blob blob-2"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="blob blob-3"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <main className="content">
                {children}
            </main>
        </div>
    )
}