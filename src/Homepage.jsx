import React from "react";
import heroimg from "./img/photo2.jpeg";
import logo from "./img/logo.png";
import pro1 from "./img/anasayfa.png";
import pro2 from "./img/open_weather.png";
import cer1 from "./img/cer1.png";
import cer2 from "./img/cer2.png";
import cer3 from "./img/cer3.png";
import cer4 from "./img/cer4.png";
import cer5 from "./img/cer5.png";
import cer6 from "./img/cer6.png";
import cer7 from "./img/cer7.png";
import cer8 from "./img/cer8.png";
import cer9 from "./img/cer9.png";
import cer10 from "./img/cer10.png";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import Swal from "sweetalert2";
import Marquee from "react-fast-marquee";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import cv from "./img/AhmetSahinCV.pdf";
import { FaAngleUp } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const Homepage = () => {
  /*  For Contact Form */
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0f1a31fc-fd22-4583-8f9d-aff2b2ceda74");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Message sent successful",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <section className="font-fira-code">
      <header>
        <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between mx-auto p-5">
          <a href="/" className="mb-4 md:mb-0">
            <span className="text-xl font-bold">
              Ahmet <br /> <span className="text-green">Şahin</span>
            </span>
          </a>
          <div className="md:order-2 mb-4 md:mb-0">
            <a href={cv} download={cv}>
              <button className="flex items-center justify-between px-8 py-2 text-white font-semibold border border-white hover:border-green rounded-full">
                <IoMdDownload color="#0FFF50" size={20} className="mr-2" />{" "}
                Download CV
              </button>
            </a>
          </div>
          <div className="w-full md:w-auto">
            <ul className="flex flex-col md:flex-row gap-4 md:gap-8 font-medium text-lg">
              <li>
                <a href="#about" className="hover:underline hover:text-green">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:underline hover:text-green"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#project" className="hover:underline hover:text-green">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline hover:text-green">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <hero className="flex flex-row gap-8 max-w-screen-xl mx-auto py-8">
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="flex my-auto w-[300px] h-[350px] "
        >
          <img src={heroimg} alt="Ahmet Sahin" className="rounded-3xl" />
        </motion.div>

        <div className="gap-y-8 ">
          <div className="flex my-auto mt-16 box-decoration-slice  text-white px-2">
            <h1 className="text-6xl font-extrabold ">
              <span>I'm </span>
              <br />
              <TypeAnimation
                className="text-green"
                sequence={["Web Developer", 1000, "Front-end Developer", 2000]}
                wrapper="span"
                speed={30}
                repeat={Infinity}
              />
            </h1>
          </div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex px-5 my-auto mt-16 font-medium text-lg"
          >
            <p>
              My goal is{" "}
              <span className="text-gray-light">to write maintainable, </span>
              clean and <span className="text-gray-light">
                understandable
              </span>{" "}
              code to process
              <br />
              <span className="text-gray-light">development is enjoyable.</span>
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex flex-row"
          >
            <button className="text-white flex items-center font-semibold py-3 px-8 border border-white hover:border-green rounded-full m-4">
              <FaGithub className="mr-2" />
              <a href="https://github.com/ahmetdsahin" target="__blank">
                {" "}
                GitHub
              </a>
            </button>
            <button className="text-white flex items-center font-semibold py-3 px-8 border border-white hover:border-green rounded-full m-4">
              <FaWhatsapp className="mr-2" />
              <a href="https://wa.me/905375589719" target="__blank">
                Whatsapp
              </a>
            </button>
            <button className="text-white flex items-center font-semibold py-3 px-8 border border-white hover:border-green rounded-full m-4">
              <FaInstagram className="mr-2" />
              <a
                href="https://www.instagram.com/aahmettsahiin/"
                target="__blank"
              >
                Instagram
              </a>
            </button>
            <button className="text-white flex items-center font-semibold py-3 px-8 border border-white hover:border-green rounded-full m-4">
              <FaLinkedin className="mr-2" />
              <a
                href="https://www.linkedin.com/in/ahmetdursunsahin/"
                target="__blank"
              >
                LinkedIn
              </a>
            </button>
          </motion.div>
        </div>
      </hero>

      {/*About */}
      <motion.div
        id="about"
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
      >
        <h1 className="text-left ml-32 font-extrabold text-4xl tracking-wide   underline underline-offset-4  decoration-green">
          <span className="text-green">/</span>About Me
        </h1>
        <p className="py-5 px-32 tracking-tight leading-relaxed text-justify text-md ">
          <span className="text-gray-light">I am a graduate of</span> Yeditepe
          University Management Information Systems 2024.{" "}
          <span className="text-gray-light">I am a team player</span> who has
          analytical thinking skills, can establish cause-effect relationships,{" "}
          <span className="text-gray-light">can effectively prioritize,</span>
          track actions and report,
          <span className="text-gray-light">can manage uncertainties</span> and
          rapid changes, is open to innovations and is{" "}
          <span className="text-gray-light">a supportive team player.</span> I
          am a responsible and{" "}
          <span className="text-gray-light">
            result-oriented Software Developer
          </span>{" "}
          who is sensitive to time management, planning and deadlines.
        </p>
      </motion.div>

      {/*Portfolio*/}
      <div id="portfolio" className="pt-8">
        <h1 className="text-center font-extrabold text-4xl tracking-wide   underline underline-offset-4  decoration-green">
          My Portfolio
        </h1>

        {/*Experience*/}
        <h1 className="text-left ml-32 pt-8 font-extrabold text-4xl tracking-wide   underline underline-offset-4  decoration-green">
          <span className="text-green">/</span>Experience
        </h1>

        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="ml-32 py-8"
        >
          <ol class="relative  ">
            <li class="mb-10 ms-6">
              <span class="p-5 absolute flex items-center justify-center w-24 h-24 rounded-full -start-3 ring-8 ring-white ">
                <img
                  src="https://files.sikayetvar.com/lg/cmp/36/36453.png?1522650125"
                  className="w-20 h-20"
                  alt=""
                />
              </span>
              <h3 class="flex ml-24 items-center mb-1 text-xl font-bold  ">
                Oruç Market Perakende (intern){" "}
              </h3>
              <p class=" ml-24 block mb-2 text-sm font-normal leading-none text-gray-light">
                (June 2017 - August 2017){" "}
              </p>
              <p class=" ml-24 mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                I worked as an intern in IT. I gained analytical thinking,
                process prioritization, time and crisis management and software
                SQL skills.
              </p>
            </li>
            <li class="mb-10 ms-6 py-6">
              <span class=" absolute flex items-center justify-center w-24 h-24 rounded-full -start-3 ring-8 ring-white">
                <img src={logo} className="w-22 h-24 rounded-full" alt="" />
              </span>
              <h3 class="flex ml-24 items-center mb-1 text-xl font-bold  ">
                79Ratio Agency (intern){" "}
              </h3>
              <p class=" ml-24 block mb-2 text-sm font-normal leading-none text-gray-light">
                (June 2023 - September 2023){" "}
              </p>
              <p class=" ml-24 mb-4 tracking-tight leading-relaxed text-justify text-md pr-24 ">
                Between June and August 2023, I interned at 79Ratio Agency, a
                digital advertising agency that promotes the internet as an
                alternative media. In the first week of the internship, I met
                the web development team and learned the Wordpress system.
                Working with experienced developers, we backed up and updated
                the code of the websites. In the second month, I developed a
                deeper understanding of Wordpress and SEO by creating new
                websites. Afterwards, we designed and developed a web
                application. This internship experience was a valuable
                experience for me as it gave me the opportunity to work with a
                great team and get to know the industry closely.
              </p>
            </li>
          </ol>
        </motion.div>
      </div>

      {/* Cards*/}
      <div>
        <h1 className="text-left ml-32 pt-8 font-extrabold text-4xl tracking-wide   underline underline-offset-4  decoration-green">
          <span className="text-green">/</span>Certificates
        </h1>
        <div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className=" w-3/4  mx-auto py-6 space-x-5  "
        >
          <SlideshowLightbox className="container grid grid-cols-3 gap-12 mx-auto">
            <img src={cer1} className="w-full rounded" alt="" />
            <img src={cer2} className="w-full rounded" alt="" />
            <img src={cer3} className="w-full rounded" alt="" />
            <img src={cer4} className="w-full rounded" alt="" />
            <img src={cer5} className="w-full rounded" alt="" />
            <img src={cer6} className="w-full rounded" alt="" />
            <img src={cer7} className="w-full rounded" alt="" />
            <img src={cer8} className="w-full rounded" alt="" />
            <img src={cer9} className="w-full rounded" alt="" />
            <img src={cer10} className="w-full rounded" alt="" />
          </SlideshowLightbox>
        </div>

        <h1 className="text-left ml-32 pt-8 font-extrabold text-4xl tracking-wide   underline underline-offset-4  decoration-green">
          <span className="text-green">/</span>My Skills
        </h1>
        <Marquee className="bg-black p-5 mt-16 mb-16 shadow-[0_5px_60px_rgba(60,_190,_113,_0.7)]">
          <div className="space-x-6 m-1 rounded-xl gap-x-8  p-4 cursor-pointer">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/0*ECzYttBdIGxUbhOW.png"
              alt="React JS"
              className="w-44 h-32 "
            />
          </div>

          <div className="space-x-6 m-1 rounded-xl flex  p-4 cursor-pointer">
            <img
              src="https://cyber01.ru/wp-content/uploads/2019/11/node1-1024x627.png?v=1662109899"
              alt="Node JS"
              className="w-38 h-28 "
            />
          </div>

          <div className="space-x-6 m-1 rounded-xl flex  p-4 cursor-pointer">
            <img
              src="https://creativebeacon.com/wp-content/uploads/JavaScript.png"
              alt=" JS"
              className="w-32 h-28 "
            />
          </div>

          <div className="space-x-6 m-1 rounded-xl flex  p-4 cursor-pointer">
            <img
              src=" https://www.golem.de/1810/137163-176682-176681_rc.jpg"
              alt="Mongo DB"
              className="w-32 h-28 "
            />
          </div>
          <div className="space-x-6 m-1 rounded-xl flex  p-4 cursor-pointer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042"
              alt="Tailwind Css"
              className="w-32 h-28 "
            />
          </div>
          <div className="space-x-6 m-1 rounded-xl flex  p-4 cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/452228/html-5.svg"
              alt="HTML"
              className="w-32 h-28 "
            />
          </div>
          <div className="space-x-6 m-1 rounded-xl flex  p-4 cursor-pointer">
            <img
              src="https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-1024.png"
              alt="CSS"
              className="w-32 h-28 "
            />
          </div>
          <div className="space-x-6 m-1 rounded-xl flex  p-4 cursor-pointer">
            <img
              src="https://pngimg.com/uploads/php/php_PNG7.png"
              alt="PHP"
              className="w-32 h-28 "
            />
          </div>
          <div className="space-x-6 m-1 rounded-xl flex  p-4 cursor-pointer">
            <img
              src="https://logosmarken.com/wp-content/uploads/2022/02/SAP-Zeichen.png"
              alt="SAP"
              className="w-32 h-28 "
            />
          </div>
          <div className="space-x-6 m-1 rounded-xl flex  p-4 cursor-pointer">
            <img
              src="https://i.ytimg.com/vi/VxdeMNu6h5I/maxresdefault.jpg"
              alt="GIT"
              className="w-32 h-28 "
            />
          </div>
        </Marquee>
      </div>

      {/* Projects*/}
      <div id="project" className="mt-4">
        <h1 className="text-left ml-32  font-extrabold text-4xl tracking-wide   underline underline-offset-4  decoration-green">
          <span className="text-green">/</span>My Projects
        </h1>
        <div className=" ml-32 mr-32 py-8 flex flex-row gap-4 mx-auto items-center justify-between ">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="max-w-sm  border border-green rounded-lg shadow "
          >
            <img class="rounded-lg w-full h-full" src={pro1} alt="" />

            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight ">
                Restaurant Review
              </h5>

              <p class="mb-3 font-normal ">
                Restaurant Review is a website that allows users to search for
                restaurants and read menus, addresses, etc. In addition,
                registered users can leave reviews and go to the restaurant
                location.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <p className="bg-green-dark text-green  p-2 rounded-xl">
                  React JS
                </p>
                <p className="bg-green-dark text-green p-2 rounded-xl">
                  Node JS
                </p>
                <p className="bg-green-dark text-green p-2 rounded-xl">
                  Express JS
                </p>
                <p className="bg-green-dark text-green p-2 rounded-xl">
                  MongoDB
                </p>
                <p className="bg-green-dark text-green p-2 rounded-xl">
                  TailwindCss
                </p>
              </div>
              <button
                type="button"
                className=" mt-3 focus:outline-none text-black bg-green hover:bg-green-dark hover:text-green font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
              >
              <a href="https://github.com/ahmetdsahin" target="__blank">Daha Fazla{" "}</a>  
              </button>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="max-w-sm  border border-green rounded-lg shadow "
          >
            <img class="rounded-lg w-full h-full" src={pro2} alt="" />

            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight ">
              Weather App
              </h5>

              <p class="mb-3 font-normal ">
              Developed using React Js and TailwindCss. A web-based weather application was developed by utilizing the OpenWeatherMap API.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <p className="bg-green-dark text-green  p-2 rounded-xl">
                  React JS
                </p>
                <p className="bg-green-dark text-green p-2 rounded-xl">
                  Vite
                </p>
              </div>
              <button
                type="button"
                className=" mt-3 focus:outline-none text-black bg-green hover:bg-green-dark hover:text-green font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
              >
              <a href="https://github.com/ahmetdsahin" target="__blank">Daha Fazla{" "}</a>  
              </button>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="max-w-sm  border border-green rounded-lg shadow "
          >
            <img class="rounded-lg w-full h-full" src={pro1} alt="" />

            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight ">
                Restaurant Review
              </h5>

              <p class="mb-3 font-normal ">
                Restaurant Review is a website that allows users to search for
                restaurants and read menus, addresses, etc. In addition,
                registered users can leave reviews and go to the restaurant
                location.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <p className="bg-green-dark text-green  p-2 rounded-xl">
                  React JS
                </p>
                <p className="bg-green-dark text-green p-2 rounded-xl">
                  Node JS
                </p>
                <p className="bg-green-dark text-green p-2 rounded-xl">
                  Expres JS
                </p>
                <p className="bg-green-dark text-green p-2 rounded-xl">
                  MongoDB
                </p>
                <p className="bg-green-dark text-green p-2 rounded-xl">
                  TailwindCss
                </p>
              </div>
              <button
                type="button"
                className=" mt-3 focus:outline-none text-black bg-green hover:bg-green-dark hover:text-green font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
              >
            <a href="https://github.com/ahmetdsahin" target="__blank">Daha Fazla{" "}</a>  
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/*Contacts */}
      <div id="contact">
        <h1 className="text-left ml-32  font-extrabold text-4xl tracking-wide   underline underline-offset-4  decoration-green">
          <span className="text-green">/</span>Contact Me
        </h1>

        <div className=" gap-x-5 py-8  mt-8 mx-auto items-start justify-start  border-2 border-green rounded-xl px-4  max-w-screen-md">
          <form onSubmit={onSubmit} class="space-y-8">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className=" text-sm rounded-lg 0 block w-full p-2.5 text-green-dark"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className=" text-sm rounded-lg 0 block w-full p-2.5 text-green-dark"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Your message
              </label>
              <textarea
                name="message"
                rows="6"
                className="block p-2.5 w-full text-sm  rounded-lg shadow-sm text-green-dark "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className=" mt-3 focus:outline-none text-black bg-green hover:bg-green-dark hover:text-green font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            >
              Send Me
            </button>
          </form>
        </div>
      </div>
      <div className="ml-10">
        <a href="/">
          <FaAngleUp size={40} color="#0FFF50" />
        </a>
      </div>
      {/*Footer */}
      <footer class=" bg-green p-3 text-center mt-4">
        <span class="text-md font-bold text-green-dark">
          © 2024 Ahmet Şahin. All Rights Reserved.
        </span>
      </footer>
    </section>
  );
};

export default Homepage;
