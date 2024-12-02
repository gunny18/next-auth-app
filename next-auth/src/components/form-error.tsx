import React from "react";
import { FaExclamation } from "react-icons/fa6";

type Props = {
  message?: string;
};

const FormError: React.FC<Props> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="p-3 flex items-center gap-x-2 text-sm bg-red-200 text-red-700">
      <FaExclamation />
      <p>{message}</p>
    </div>
  );
};

export default FormError;
