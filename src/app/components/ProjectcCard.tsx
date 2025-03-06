import { SquareArrowOutUpRight } from "lucide-react";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  link: Url;
};

const ProjectCard = ({ title, link }: ProjectCardProps) => {
  return (
    <div className="h-52 w-52 rounded border-2 flex items-center justify-center flex-col gap-2">
      <h1 className="text-xl">{title}</h1>
      <Link href={link}>
        <SquareArrowOutUpRight />
      </Link>
    </div>
  );
};

export default ProjectCard;
