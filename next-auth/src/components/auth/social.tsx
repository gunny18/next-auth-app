"use client";
import React from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const Social = () => {
  return (
    <div className="w-full flex justify-around">
      <Button size="lg" onClick={() => {}}>
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button size="lg" onClick={() => {}}>
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Social;
