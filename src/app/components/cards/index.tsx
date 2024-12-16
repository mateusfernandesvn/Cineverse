import { ReactNode } from "react";

interface SectionProps {
  name: string;
  children: ReactNode;
}

export function Card({ name }: SectionProps) {
  return (
    <div className="flex p-2 justify-center  text-center bg-red-600 rounded-lg hover:scale-105 hover:bg-red-500 ease-out duration-300 " >
      <p className="text-lg font-medium capitalize max-sm:text-sm">
        {name}
      </p>
    </div>
  );
}