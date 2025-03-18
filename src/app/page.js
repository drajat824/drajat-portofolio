"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

export default function Home() {
  const skills = ["NodeJs", "Python", "React & React Native", "HTML & CSS", "MYSQL", "ExpressJs", "Tailwind", "Figma", "Bootstrap", "Firebase", "OneSignal"];
  const skills2 = ["Internet Of Things", "MQTT", "Electronics Circuit Design", "Soldering", "Basic Network Administration"];
  // const data = {
  //   [{title: "Zwallet", desc: "Zwallet adalah blablblalbalbalbal", "skills": ["React", "React Native", "ExpressJs"], "video": "google.com", "sc1": "asdasd", "sc2": ""}]
  // }

  const scrollRef = React.createRef();
  const getInRef = React.createRef();
  const handleGetinButtonClick = () => {
    getInRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const [klik, setKlik] = useState("all");
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("Scroll Y:", window.scrollY);

      if (window.scrollY > 500) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    });
  }, []);


  return (
    <div className="flex flex-col max-w-max">
      <nav className="flex flex-row absolute sm:justify-between sm:items-center md:items-center" style={{ width: "100%" }}>

        <div className="p-6 w-[70%] sm:w-[50%] md:w-[50%]">
          <div className="">

            <p className="font-bold text-white text-2xl sm:hidden">
              Want to check out <br /> my <span className="text-3xl bg-[#343434] underline"><a href="https://flozistor.blogspot.com/">Blog?
                <Image src="/cursor.png" alt="" width={60} height={60} priority className="absolute top-[70px] left-20" />
              </a>
              </span>
            </p>

            <a className="font-bold text-white text-2xl text-3xl bg-[#343434] underline invisible sm:visible" href="https://flozistor.blogspot.com/" >Blog?
              <Image src="/cursor.png" alt="" width={60} height={60} priority className="absolute top-11" />
            </a>

          </div>
        </div>

        <div className="lg:absolute lg:right-5 lg:top-5 lg:p-0 lg:w-fit flex justify-between w-[30%] p-7">

          <div className="space-y-5">
            <a className="" href="https://drive.google.com/file/d/1KrKzxaP1QEVRpMyDJOr9ygwJEkRtgDWb/view?usp=sharing" target="_blank">
              <p className="underline text-white text-xl">Download CV</p>
            </a>
            <button onClick={handleGetinButtonClick}>
              <p className="underline text-white text-xl">Get in Touch</p>
            </button>
          </div>

          <a href="#">
            <Image src="burger.svg" priority width={50} height={50} className={`h-max md:hidden sm:hidden lg:hidden right-[25px] ${isFixed ? "fixed" : "absolute bottom-[-430px]"}`} title="Burgir" />
          </a>

          {/* <a href="#" className="h-max md:hidden sm:hidden">
            <div style={{ width: 30, borderWidth: 2, borderColor: "white", marginBottom: 3 }} />
            <div style={{ width: 30, borderWidth: 2, borderColor: "white", marginBottom: 3 }} />
            <div style={{ width: 30, borderWidth: 2, borderColor: "white", marginBottom: 3 }} />
          </a> */}
        </div>

      </nav>

      <div className="w-screen h-[600px] xl:h-[700px] lg:h-[700px] md:h-fit sm:h-fit bg-color md:bg-gradient-to-r md:from-green md:to-green sm:bg-gradient-to-r sm:from-green sm:to-green">
        <Image
          className="absolute left-[-130px] top-[280px] sm:hidden md:hidden xl:hidden lg:hidden"
          src="/net-green.png"
          alt=""
          width={280}
          height={280}
          priority
        />

        <div className="mx-auto flex flex-wrap pt-32 max-w-[1000px] xl:max-w-[800px] lg:max-w-[800px]">
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

      <div ref={scrollRef} className="bg-blue-dark h-min-[400px] w-screen">
        <div className="mx-auto pt-[100px] pb-[100px] max-w-[1000px] sm:max-w-[300px] md:max-w-[300px] xl:max-w-[800px] lg:max-w-[800px]">
          <h1 className="font-bold text-5xl pb-3 text-white underline">SKILLS</h1>
          <div className="w-[100%] h-fit rounded-xl pt-5 flex flex-wrap">
            {skills.map((e, i) => (
              <div key={`skills1_${i}`} className="w-fit h-fit rounded-xl bg-green p-3 mr-3 mb-3">
                <p className="text-white text-2xl">{e}</p>
              </div>
            ))}
            {skills2.map((e, i) => (
              <div key={`skills1_${i}`} className="w-fit h-fit rounded-xl bg-[#da5964] p-3 mr-3 mb-3">
                <p className="text-white text-2xl">{e}</p>
              </div>
            ))}
          </div>
          {/* <div className="w-[100%] h-fit rounded-xl pb-2 flex flex-wrap">
            {skills2.map((e, i) => (
              <div key={`skills2_${i}`} className="w-fit h-fit rounded-xl bg-[#da5964] p-3 mr-3 mb-3">
                <p className="text-white text-2xl">{e}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      <div className="h-min-[400px] w-screen bg-[#ebebeb]">
        <div className="max-w-screen-lg mx-auto pt-[100px] pb-[100px] max-w-[1000px] sm:max-w-[300px] md:max-w-[300px] xl:max-w-[800px] lg:max-w-[800px]">
          <h1 className="font-bold text-5xl text-blue-dark underline">PROJECTS</h1>

          <div className="flex flex-row gap-3 py-8">
            <button onClick={() => setKlik("all")} className={`p-3 rounded-[20px] min-w-[70px] shadow ${klik == "all" ? "bg-[#00B1B6]" : "bg-[#D9D9D9]"}`} >
              <p className={`text-xl ${klik == "all" ? "text-white" : "text-black"}`}>all</p>
            </button>
            <button onClick={() => setKlik("iot")} className={`p-3 rounded-[20px] min-w-[70px] shadow ${klik == "iot" ? "bg-[#00B1B6]" : "bg-[#D9D9D9]"}`} >
              <p className={`text-xl ${klik == "iot" ? "text-white" : "text-black"} break-words`}>internet of things</p>
            </button>
            <button onClick={() => setKlik("apps")} className={`p-3 rounded-[20px] min-w-[70px] shadow ${klik == "apps" ? "bg-[#00B1B6]" : "bg-[#D9D9D9]"}`} >
              <p className={`text-xl ${klik == "apps" ? "text-white" : "text-black"} break-words`}>mobile/website</p>
            </button>
          </div>

          {/* Double Lock Box */}
          {klik == "all" || klik == "iot" || klik == "apps" ? <div>
            <div className="flex flex-wrap justify-between" >
              <p className="text-2xl text-justify font-bold hidden sm:block">Double Lock Box</p>
              <p className="text-xl py-3 hidden sm:block">Arduino IDE | React Native | MQTT | OneSignal Notification</p>
              <div className="w-[400px]">
                <Image src="/porto/dlb.jpg" alt="" width={400} height={400} priority />
                <div className="flex flex-col w-fit space-y-3 pt-3" >
                  <div className="bg-blue rounded-md w-fit">
                    <a target="_blank" href="https://unyku.id/IpkZxwzus6">
                      <p className="text-xl pt-[5px] pb-[5px] pr-[15px] pl-[15px] text-white">Video</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-3 md:pl-0 pl-7">
                <p className="text-2xl text-justify font-bold sm:hidden">Double Lock Box</p>
                <p className="text-xl sm:hidden">Arduino IDE | React Native | MQTT | OneSignal Notification</p>
                <p className="text-2xl text-justify sm:text-left">Double Lock Box adalah sistem IoT pengunci brankas dengan integrasi Face Recognition dan Fingerprint, dilengkapi aplikasi untuk mengatur dan memonitor pengaturan sistem. Aplikasi juga akan menerima notifikasi saat brankas dalam kondisi mencurigakan.</p>
              </div>
            </div>
            <div className="w-[100%] border-[0.1px] border-grey my-10" />
          </div> : <div />}

          {/* AntiSectaBot */}
          {klik == "all" || klik == "iot" ? <div>
            <div className="flex flex-wrap justify-between" >
              <p className="text-2xl text-justify font-bold hidden sm:block">AntiSectaBot</p>
              <p className="text-xl py-3 hidden sm:block">Arduino IDE | Raspberry Pi</p>
              <div className="w-[400px]">
                <Image src="/porto/antisecta.jpg" alt="" width={400} height={400} priority />
                <div className="flex flex-col w-fit space-y-3 pt-3" >
                  <div className="bg-blue rounded-md w-fit">
                    <a target="_blank" href="https://www.youtube.com/@Antisecta-bot">
                      <p className="text-xl pt-[5px] pb-[5px] pr-[15px] pl-[15px] text-white">Video</p>
                    </a>
                  </div>
                  <a className="text-xl text-blue font-bold" target="_blank" href="https://github.com/drajat824/wallfollower-antisecta">Source Code - Wall Follower</a>
                </div>
              </div>
              <div className="flex-1 space-y-3 pl-7 md:pl-0">
                <p className="text-2xl text-justify font-bold sm:hidden">AntiSectaBot</p>
                <p className="text-xl sm:hidden">Arduino IDE | Raspberry Pi</p>
                <p className="text-2xl text-justify sm:text-left">AntiSectaBot adalah project yang diajukan untuk PKM (Program Kreativitas Mahasiswa), robot berbasis Machine Learning dan Wall Follower yang dirancang untuk membantu petani bawang merah dalam memberantas hama serangga secara otomatis. Pada project ini, bertugas merancang dan mengimplementasikan wall follower dengan Fuzzy Logic, menggunakan sensor Ultrasonic dan QMC5883 (Kompas).</p>
              </div>
            </div>
            <div className="w-[100%] border-[0.1px] border-grey my-10" />
          </div> : <div />}

          {/* Media Pembelajaran */}
          {klik == "all" || klik == "iot" ? <div>
            <div className="flex flex-wrap justify-between" >
              <p className="text-2xl text-justify font-bold hidden sm:block">Media Pembelajaran ANFIS</p>
              <p className="text-xl py-3 hidden sm:block">Raspberry Pi | Python | MATLAB & Simulink</p>
              <div className="w-[400px]">
                <Image src="/porto/mediapem.jpg" alt="" width={400} height={400} priority />
                <div className="flex flex-col w-fit space-y-3 pt-3" >
                  <div className="bg-blue rounded-md w-fit">
                    <a target="_blank" href="https://unyku.id/ZCrBkZChSb">
                      <p className="text-xl pt-[5px] pb-[5px] pr-[15px] pl-[15px] text-white">Video</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-3 pl-7 md:pl-0">
                <p className="text-2xl text-justify font-bold sm:hidden">Media Pembelajaran ANFIS</p>
                <p className="text-xl sm:hidden">Raspberry Pi | Python | MATLAB & Simulink</p>
                <p className="text-2xl text-justify sm:text-left">Sebuah media pembelajaran ANFIS (Adaptive Neuro Fuzzy Inference System), dengan integrasi Matlab & Simulink. Menggunakan Raspberry Pi untuk menjalankan program dengan input dari sensor MQ-2 (Deteksi Gas), DHT11 (Temperatur), dan HuskyLens (Deteksi Jumlah Orang), serta menghasilkan output berupa sinyal PWM untuk mengontrol kecepatan kipas.</p>
              </div>
            </div>
            <div className="w-[100%] border-[0.1px] border-grey my-10" />
          </div> : <div />}

          {/* Mini Project RC */}
          {klik == "all" || klik == "iot" ? <div>
            <div className="flex flex-wrap justify-between" >
              <p className="text-2xl text-justify font-bold hidden sm:block">Mini Project RC</p>
              <p className="text-xl py-3 hidden sm:block">Arduino IDE | React Native</p>
              <div className="w-[400px]">
                <Image src="/porto/minipr.jpg" alt="" width={400} height={400} priority />
                <div className="flex flex-col w-fit space-y-3 pt-3" >
                  <div className="bg-blue rounded-md w-fit">
                    <a target="_blank" href="https://unyku.id/SeuUJOLpzq">
                      <p className="text-xl pt-[5px] pb-[5px] pr-[15px] pl-[15px] text-white">Video</p>
                    </a>
                  </div>
                  <a className="text-xl text-blue font-bold" target="_blank" href="https://github.com/drajat824/rcproject">Source Code - Aplikasi</a>
                  <a className="text-xl text-blue font-bold" target="_blank" href="https://github.com/drajat824/komdat-esp32">Source Code - Alat</a>
                </div>
              </div>
              <div className="flex-1 space-y-3 pl-7 md:pl-0">
                <p className="text-2xl text-justify font-bold sm:hidden">Mini Project RC</p>
                <p className="text-xl sm:hidden">Arduino IDE | React Native</p>
                <p className="text-2xl text-justify sm:text-left">Tugas akhir mata kuliah Komunikasi Data, sebuah mobil RC (Remote Control)  yang dikendalikan melalui aplikasi menggunakan BLE (Bluetooth Low Energy). Dilengkapi dengan Streaming Kamera dan Sensor LDR untuk menyalakan lampu otomatis di tempat gelap.</p>
              </div>
            </div>
            <div className="w-[100%] border-[0.1px] border-grey my-10" />
          </div> : <div />}

          {/* ZWALLET */}
          {klik == "all" || klik == "apps" ? <div>
            <div className="flex flex-wrap justify-between" >
              <p className="text-2xl text-justify font-bold hidden sm:block">Zwallet Web & Mobile</p>
              <p className="text-xl py-3 hidden sm:block">ReactJs | React Native | ExpressJs | Firebase Notification</p>
              <div className="w-[400px]">
                <Image src="/porto/zwallet.jpg" alt="" width={400} height={400} priority />
                <div className="flex flex-col w-fit space-y-3 pt-3" >
                  <a className="text-xl text-blue font-bold" target="_blank" href="https://github.com/drajat824/Z-Wallet-Web">Source Code - Web</a>
                  <a className="text-xl text-blue font-bold" target="_blank" href="https://github.com/drajat824/Z-Wallet-Mobile">Source Code - Mobile</a>
                </div>
              </div>
              <div className="flex-1 space-y-3 pl-7 md:pl-0">
                <p className="text-2xl text-justify font-bold sm:hidden">Zwallet Web & Mobile</p>
                <p className="text-xl sm:hidden">ReactJs | React Native | ExpressJs | Firebase Notification</p>
                <div className="flex items-center">
                  <Image className="mr-3" src="/warning.svg" alt="" width={30} height={30} priority />
                  <p className="text-[#efc82a] text-xl font-semibold">Sedang Dalam Pemeliharaan</p>
                </div>
                <p className="text-2xl text-justify sm:text-left">Zwallet adalah aplikasi payment untuk memudahkan melakukan pembayaran secara online dengan mudah dan cepat. Memiliki beberapa fitur seperti Transfer Balance, Notification, Search & Filter Data, Authentication.</p>
              </div>
            </div>
            <div className="w-[100%] border-[0.1px] border-grey my-10" />
          </div> : <div />}

        </div>
      </div>
      <div ref={getInRef} className="bg-blue-dark h-min-[400px] w-screen">
        <div className="max-w-screen-lg pt-[100px] pb-[100px] flex flex-wrap justify-center items-center">
          <div>
            <Image src="/get-in.png" alt="" width={200} height={200} priority />
          </div>

          <div className="pl-5">
            <h1 className="font-bold text-5xl pb-3 text-green">GET IN TOUCH</h1>
            <div className="sm:pl-1 md:pl-1 space-y-5">
              <div className="flex space-x-5">
                <a href="https://www.linkedin.com/in/drajatfikri/" target="_blank" className="flex flex-row w-fit">
                  <Image src="linkedln.svg" width={30} height={30} priority />
                  <p className="pl-[5px] text-1xl font-bold text-white">drajatfikri</p>
                </a>
                <a href="mailto:drajat.fikria@gmail.com" target="_blank" className="flex flex-row">
                  <Image src="gmail.svg" width={32} height={32} priority />
                  <p className="pl-[5px] text-1xl text-1xl font-bold text-white">drajat.fikria@gmail.com</p>
                </a>
              </div>
              <a href="https://github.com/drajat824" target="_blank" className="flex flex-row">
                <Image src="github.svg" width={32} height={32} priority />
                <p className="pl-[5px] text-1xl text-1xl font-bold text-white">drajat824</p>
              </a>
            </div>
          </div>

        </div>

        <div className="bg-[#D0D0D0] p-5 p" >
          <p>Made by Drajat Fikri Alfianto, 2025.</p>
        </div>

      </div>

    </div>
  );
}
