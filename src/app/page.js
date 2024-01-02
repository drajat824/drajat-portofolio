"use client";

import Image from "next/image";
import React from "react";
import emailjs from "@emailjs/browser";

export default function Home() {
  const skills = ["Node Js", "React", "React Native", "HTML", "CSS", "SQL", "Python", "C++"];

  const [nameSender, setNameSender] = React.useState("");
  const [emailSender, setEmailSender] = React.useState("");
  const [messageSender, setMessageSender] = React.useState("");

  const [modal, setModal] = React.useState(false);

  const form = React.createRef();
  const hireMeRef = React.createRef();
  const getInRef = React.createRef();

  const handleHireButtonClick = (e) => {
    hireMeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleGetinButtonClick = () => {
    getInRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs.sendForm("service_vfhyini", "template_3zy3pb8", form.current, "h2zQUgThAxis_yMmC").then(
      (result) => {
        setModal(true);

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="flex flex-col max-w-max">
      <nav className="flex flex-row absolute sm:justify-between sm:items-center md:items-center" style={{ width: "100%" }}>
        <div className="p-6 w-[70%] sm:w-[50%] md:w-[50%]">
          <div className="w-min">
            <a href="#" className="font-bold text-white text-3xl">
              <p>DRAJAT</p>
            </a>
          </div>
        </div>

        {modal && (
          <div className="fixed w-full h-full top-[0px] bg-black bg-opacity-50 flex justify-center items-center flex-col z-50">
            <div className="w-[500px] h-[200px] bg-white rounded-t-sm flex items-center justify-center">
              <Image src="/success.svg" alt="" width={150} height={200} priority />
            </div>
            <div className="w-[500px] h-[70px] rounded-b-sm bg-[#25AE88] flex items-center text-white text-2xl justify-center">
              SUCCESS
            </div>
          </div>
        )}

        <div className="p-6 w-[30%] flex flex-row sm:block md:block justify-between sm:w-[50%] md:w-[50%] sm:text-right md:text-right">
          <div className="flex flex-col text-white">
            <a href="#" onClick={handleHireButtonClick} className="mb-2 underline">
              Hire Me
            </a>
            <a href="#" onClick={handleGetinButtonClick} className="underline ">
              Get in Touch
            </a>
          </div>

          <a href="#" className="h-max md:hidden sm:hidden">
            <div style={{ width: 30, borderWidth: 2, borderColor: "white", marginBottom: 3 }} />
            <div style={{ width: 30, borderWidth: 2, borderColor: "white", marginBottom: 3 }} />
            <div style={{ width: 30, borderWidth: 2, borderColor: "white", marginBottom: 3 }} />
          </a>
        </div>
      </nav>

      <div className="w-screen h-[600px] md:h-fit sm:h-fit bg-color md:bg-gradient-to-r md:from-green md:to-green sm:bg-gradient-to-r sm:from-green sm:to-green">
        <Image
          className="absolute left-[-130px] top-[280px] sm:hidden md:hidden"
          src="/net-green.png"
          alt=""
          width={280}
          height={280}
          priority
        />
        <Image
          className="absolute right-[-150px] top-[190px] sm:hidden md:hidden"
          src="/net-black.png"
          alt=""
          width={280}
          height={280}
          priority
        />

        <div className="mx-auto flex flex-wrap pt-32 max-w-[1000px]">
          <div className="flex-1 pl-[0px] sm:text-center md:text-center sm:pb-10 md:pb-10">
            <p className="text-white pb-6 text-5xl md:text-3xl sm:text-3xl"> Hello, I am</p>
            <p className="font-bold text-8xl md:text-6xl sm:text-6xl pb-5">
              Drajat Fikri <br /> Alfianto
            </p>
            <p className="text-2xl text-white">
              I am a <span className="font-bold text-black">Fullstack Developer</span> with experience in developing{" "}
              <br className="md:hidden sm:hidden" /> website, mobile applications and IoT.
            </p>
          </div>

          <div className="flex-none pr-[70px] sm:pr-0 md:pr-0 md:flex sm:flex md:justify-center md: items-center sm:bg-dark md:bg-dark sm:w-[100%] md:w-[100%] sm:h-96 md:h-96">
            <div className="border-8 border-green rounded-full" style={{ width: 295, height: 295 }}>
              <Image
                src="/iam.png"
                alt="Drajat Fikri Alfianto"
                className="dark:invert relative top-[-13px] right-[0px]"
                width={280}
                height={280}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-dark h-min-[400px] w-screen">
        <div className="mx-auto pt-[100px] pb-[100px] max-w-[1000px] sm:max-w-[300px] md:max-w-[300px]">
          <h1 className="font-bold text-5xl pb-3 text-green underline">SKILLS</h1>
          <p className="pb-3 text-2xl text-white">Some skills that I possess.</p>
          <div className="w-[100%] h-fit rounded-xl pt-5 pb-2 flex flex-wrap">
            {skills.map((e) => (
              <div className="w-fit h-fit rounded-xl bg-green p-3 mr-3 mb-3">
                <p className="text-white text-2xl">{e}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-min-[400px] w-screen">
        <div className="max-w-screen-lg mx-auto pt-[100px] pb-[100px] max-w-[1000px] sm:max-w-[300px] md:max-w-[300px]">
          <h1 className="font-bold text-5xl pb-3 text-green underline">PROJECTS</h1>
          <p className="pb-3 text-2xl text-grey2">
            Several personal and client <br /> projects that I have worked on.
          </p>

          <div className="flex flex-wrap pb-10">
            <Image src="/prakerin.png" alt="" width={300} height={200} priority />

            <div className="flex flex-col justify-between flex-1 pl-8 sm:pl-0 sm:pt-5 md:pl-0 md:pt-5">
              <p className="text-2xl text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit turpis nec auctor porttitor. Nullam vel
                dui sit amet erat dignissim lacinia quis tempor nibh.
              </p>
              <div>
                <p className="text-2xl text-justify">React Native | Bootstrap</p>
              </div>
              <div className="flex flex-row justify-end sm:pt-3 md:pt-3">
                <p className="text-2xl pr-4 text-blue font-bold self-center">Source Code</p>
                <div className="bg-blue rounded-md">
                  <p className="text-2xl pt-[5px] pb-[5px] pr-[15px] pl-[15px] text-white">Visit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={hireMeRef} className="bg-blue-dark h-min-[400px] w-screen">
        <div className="max-w-screen-lg mx-auto pt-[100px] pb-[100px] max-w-[1000px] sm:max-w-[300px] md:max-w-[300px]">
          <h1 className="font-bold text-5xl pb-3 text-green underline">HIRE ME</h1>
          <p className="pb-3 text-2xl text-white">Do you need my help?</p>

          <form ref={form}>
            <div className="pb-[20px]">
              <label for="name" className="text-1xl text-white">
                Your Name
              </label>
              <input
                name="user_name"
                onChange={(e) => setNameSender(e.target.value)}
                value={nameSender}
                type="text"
                className="w-full rounded-md pt-[10px] pb-[10px] pl-[10px] focus:outline-none"
                id="name"
                placeholder="Enter your name.."
              />
            </div>
            <div className="pb-[20px]">
              <label for="name" className="text-1xl text-white">
                Your Email
              </label>
              <input
                name="user_email"
                onChange={(e) => setEmailSender(e.target.value)}
                value={emailSender}
                type="email"
                className="w-full rounded-md pt-[10px] pb-[10px] pl-[10px] focus:outline-none"
                id="email"
                placeholder="Enter your email.."
              />
            </div>
            <div>
              <label for="name" className="text-1xl text-white">
                Your Message
              </label>
              <textarea
                name="message"
                onChange={(e) => setMessageSender(e.target.value)}
                value={messageSender}
                className="w-full rounded-md pt-[10px] pb-[10px] pl-[10px] focus:outline-none"
                id="name"
                placeholder="Enter your message.."
                rows="10"
              />
            </div>
            <div className="flex justify-end pt-[20px]">
              <a href="#" onClick={sendEmail} className="w-[150px] h-[50px] rounded-lg bg-blue flex items-center justify-center">
                <p className="text-white text-2xl">SUBMIT</p>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div ref={getInRef} className="h-min-[400px] w-screen">
        <div className="max-w-screen-lg pt-[100px] pb-[100px] flex flex-wrap justify-center items-center">
          <div>
            <Image src="/get-in.png" alt="" width={200} height={200} priority />
          </div>

          <div className="pl-5">
            <h1 className="font-bold text-5xl pb-3 text-green">GET IN TOUCH</h1>
            <div className="sm:pl-1 md:pl-1">
              <a href="https://www.linkedin.com/in/drajatfikri/" target="_blank" className="flex flex-row mb-[15px] w-fit">
                <Image src="linkedln.svg" width={30} height={30} priority />
                <p className="pl-[5px] text-1xl font-bold">drajatfikri</p>
              </a>
              <a href="https://github.com/drajat824" target="_blank" className="flex flex-row">
                <Image src="github.svg" width={32} height={32} priority />
                <p className="pl-[5px] text-1xl text-1xl font-bold">drajat824</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
