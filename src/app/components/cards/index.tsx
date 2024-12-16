import { ReactNode } from "react";

interface SectionProps {
  name: string;
  children: ReactNode;
}

export function Card({ name }: SectionProps) {
  return (
    <div className="flex p-2 justify-center text-center bg-blue-700 rounded-lg hover:scale-105 hover:bg-blue-600 ease-out duration-300" >
      <p className="text-lg capitalize">
        {name}
      </p>
    </div>
  );
}