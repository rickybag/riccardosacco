import React, { useContext } from "react";
import ReactHtmlParser from "react-html-parser";

import Button from "../../components/ui/Button";

import Context from "../../context";

const AboutMe = () => {
  const { name, job, description } = useContext(Context).settings;

  return (
    <section className="about-me home">
      <div className="container">
        <h1 className="name">{name}</h1>
        <h2 className="tagline">{job}</h2>
        <div className="description">{ReactHtmlParser(description)}</div>
        <Button text="Portfolio" icon="fa fa-laptop-code" href="/portfolio" />
        <Button text="Resume" icon="fa fa-file-alt" href="/resume" />
      </div>
    </section>
  );
};

export default AboutMe;
