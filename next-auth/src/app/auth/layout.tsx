import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <section className="h-full flex flex-col justify-center items-center bg-blue-400">
      {children}
    </section>
  );
};

export default AuthLayout;
