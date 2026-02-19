import { ReactNode } from "react";

type ContainerProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Container({ id, className = "", children }: ContainerProps) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-6 lg:px-10 ${className}`}>
      {children}
    </section>
  );
}
