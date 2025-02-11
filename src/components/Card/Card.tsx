import React from "react";

interface CardProps {
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="max-w-sm p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
