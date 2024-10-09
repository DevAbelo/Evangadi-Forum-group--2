import React from "react";
import classes from "./about.module.css";

const About = () => {
  return (
    <section className={classes.outer_about_wrapper}>
      <section className={classes.about_container}>
        <div className={classes.about}>
          <p>About</p>
        </div>
        {/* title container  */}
        <div>
          <h1>Evangadi Networks Q&A</h1>
        </div>
        {/* paragraph container  */}
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            ipsa rerum harum sit totam impedit at doloribus obcaecati
            reprehenderit odio, expedita nihil eum, ea laborum voluptas aperiam
            nam velit distinctio!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            ipsa rerum harum sit totam impedit at doloribus obcaecati
            reprehenderit odio, expedita nihil eum, ea laborum voluptas aperiam
            nam velit distinctio!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            ipsa rerum harum sit totam impedit at doloribus obcaecati
            reprehenderit odio, expedita nihil eu?
          </p>
        </div>
        <div>
          <a href="">
            <button className={classes.about_btn}>HOW IT WORKS</button>
          </a>
        </div>
      </section>
    </section>
  );
};

export default About;
