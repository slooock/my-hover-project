import './App.css'

import { motion } from "framer-motion";

export const RevealLinks = () => {
  return (
    <section className="grid place-content-center gap-2 bg-green-300 px-8 py-24 text-black min-h-screen">
      {/* <FlipLink href="https://twitter.com">Twitter</FlipLink> */}
      <FlipLink href="https://linkedin.com/in/slooock">LinkedIn</FlipLink>
      {/* <FlipLink href="https://facebook.com">Facebook</FlipLink> */}
      <FlipLink href="https://instagram.com/slooock">Instagram</FlipLink>
      <FlipLink href="https://github.com/slooock">github</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-4xl md:text-4xl lg:text-4xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

function App() {
  return (
    <>
     <RevealLinks/>
    </>
  )
}

export default App
