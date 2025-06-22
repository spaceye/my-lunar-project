import type { ReactNode } from 'react';

interface HelloProps {
  children?: ReactNode;
}

const Hello: React.FC<HelloProps> = ({ children }) => {
  return <h1>{children}</h1>;
};

export default Hello;
