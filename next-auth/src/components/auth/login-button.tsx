"use client";

import { useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
  asChild?: boolean;
  mode?: "modal" | "redirect";
}

const LoginButton: React.FC<Props> = ({
  children,
  asChild,
  mode = "redirect",
}) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>TODO: Implement Modal</span>;
  }
  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};

export default LoginButton;
