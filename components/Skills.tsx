"use client";
import { IconCloud } from "@/components/ui/IconCloud";

const slugs = [
  "javascript",
  "springboot",
  "java",
  "apachemaven",
  "react",
  "html5",
  "css",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "mongodb",
  "Mysql",
  "intellijidea",
];

function Skills() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  return (
    <div className="my-10 py-10 " id="skills">
      <h1 className="heading">
        Skills &amp; <span className="text-purple">Technologies</span>
      </h1>
      <div className="flex justify-center align-middle">
        <IconCloud images={images} />
      </div>
    </div>
  );
}

export default Skills;
