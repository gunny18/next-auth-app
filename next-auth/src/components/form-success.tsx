import React from "react";
import { FaCheckCircle } from "react-icons/fa";

type Props = {
  message?: string;
};

const FormSuccess: React.FC<Props> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="p-3 flex items-center gap-x-2 text-sm bg-emerald-200 text-emerald-700">
      <FaCheckCircle />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
