import Link from "next/link";
import { Linkedin, Github, Phone, Mail } from "lucide-react";
import ProjectCard from "./components/ProjectcCard";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto mt-20 p-7">
      <h2 className="text-5xl ">Hi, I am</h2>
      <h1 className="font-extrabold text-7xl ">Bijay Shrestha</h1>
      <div className="flex gap-3 mt-7">
        <Link href="/bijaycv.pdf" className="font-extrabold">
          CV
        </Link>
        <Link href="https://www.linkedin.com/in/sthabijay/">
          <Linkedin />
        </Link>
        <Link href="https://github.com/sthabijay">
          <Github />
        </Link>
      </div>
      <br />
      <br />
      <div>
        <h1 className="text-3xl">Projects</h1>
        <div className="my-2 flex gap-2 flex-wrap">
          <ProjectCard
            title="Aalu Cross"
            link="https://aalucross.vercel.app/"
          />
          <ProjectCard
            title="React-x-Valorant"
            link="https://reactxvalorant.vercel.app//"
          />
        </div>
      </div>
      <br />
      <br />
      <div>
        <h1 className="text-3xl">Contact Me</h1>
        <h2 className="text-xl flex flex-row gap-2">
          <Mail />
          bijaystha.pro@gmail.com
        </h2>
        <h2 className="text-xl flex flex-row gap-2">
          <Phone />
          +977 9849601683
        </h2>
      </div>
    </div>
  );
}
