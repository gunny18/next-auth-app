import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  label: string;
  href: string;
};

const BackButton: React.FC<Props> = ({ label, href }) => {
  return (
    <Button className="w-full" variant="link" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
