import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-full bg-blue-400 space-y-4">
      <h1 className={cn("text-8xl font-bold text-white", font.className)}>
        🔐Auth
      </h1>
      <p className="text-white text-lg">A simple Authentication service!</p>
      <div>
        <LoginButton>
          <Button variant="secondary" className="bg-white" size="lg">
            Sign In
          </Button>
        </LoginButton>
      </div>
    </section>
  );
}
