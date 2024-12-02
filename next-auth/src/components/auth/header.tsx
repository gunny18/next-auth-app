import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

type Props = {
  label: string;
};

const Header: React.FC<Props> = ({ label }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-2">
      <h1 className={cn("text-3xl", font.className)}>🔐Auth</h1>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};

export default Header;
