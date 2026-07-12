import type { ElementType, ReactNode } from "react";
import useInView from "../../hooks/useInView";
import "./Reveal.css";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

const Reveal = ({
  children,
  as: Component = "div",
  className = "",
}: RevealProps) => {
  const { ref, isVisible } = useInView<HTMLElement>();

  return (
    <Component
      ref={ref}
      className={`${className} reveal ${
        isVisible ? "reveal-visible" : ""
      }`}
    >
      {children}
    </Component>
  );
};

export default Reveal;