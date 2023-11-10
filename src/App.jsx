import { useState } from "react";
import Switcher from "./component/Switcher";
import "./App.css";
import Card from './component/Card'
import ph from './assets/q6-1.png'
import ph2 from './assets/q6-2.png'
import ph3 from './assets/q6-3.png'
import ph4 from './assets/q6-4.png'
import ph5 from './assets/q6-5.png'
import ph6 from './assets/q6-6.png'
import phImg from "./assets/q7.png";
import phImg2 from "./assets/q7-2.png";

function App() {
  return (
    <>
      <div className="dark:bg-black dark:text-white p-10">
        <div className="flex justify-between sm:justify-around sm:gap-[520px] items-center">
          <img src="src/assets/q1.png" alt="" />
          <div className="hidden sm:flex  items-center gap-3">
            <ul className="hidden sm:flex gap-10 mr-[20px] text-[#666666]">
              <li>Home</li>
              <li>About</li>
              <li>Tech Stack</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
            <img src="src/assets/q2-1.svg" alt="" />
            <img src="src/assets/q2-2.svg" alt="" />
            <img src="src/assets/q2-3.svg" alt="" />
            <Switcher />
          </div>
          <p className="sm:hidden">=</p>
        </div>
        <div className="sm:flex mt-[7%] justify-around items-center gap-[320px]">
          <div>
            <h3 className="pb-24 text-5xl font-bold text-[#42446E]">
              HI 👋,, <br /> MY Name is <br /> ISROIL H <br /> I build things
              for web
            </h3>
          </div>
          <img src="src/assets/q3.png" alt="" />
        </div>
        <div className="mt-[9%] sm:flex justify-around gap-[250px]">
          <div className="1">
            <div className="mb-[60px]">
              <h3 className="text-center sm:text-start pb-7 text-5xl font-bold text-[#42446E]">
                About Me
              </h3>
              <p className="text-[#666666] sm:w-[440px]">
                The Generator App is an online tool that helps you to export
                ready-made templates ready to work as your future website. It
                helps you to combine slides, panels and other components and
                export it as a set of static files: HTML/CSS/JS.
              </p>
            </div>
            <div>
              <h3 className="pb-3 text-5xl font-bold text-[#42446E]">
                Education
              </h3>
              <div className="flex gap-2 items-center">
                <p className="text-[#666666]">
                  Bachelor in Electronics & Communication
                </p>
                <p className="bg-[#D7FFE0] text-[#018C0F] rounded-[120px] text-center  sm:h-[30px]   p-1 sm:w-[120px]">
                  Full Time
                </p>
              </div>
              <div className="flex gap-5 mt-3">
                <div className="flex items-center">
                  <img src="src/assets/q4.png" alt="" />
                  <p className="text-[#A7A7A7]">
                    Bangalore Instutute of Technology
                  </p>
                </div>
                <div className="flex gap-1 items-center">
                  <img src="src/assets/q4.png" alt="" />
                  <p className="text-[#A7A7A7]">Aug 2015 - Dec 2020</p>
                </div>
              </div>
              <hr className="mt-5" />
            </div>
          </div>
          <div className="mr-[20px]">
            <div>
              <h3 className="pb-7 text-5xl font-bold text-[#42446E]">
                Work Experience
              </h3>
              <div className="flex gap-[111px] sm:gap-[215px] items-center">
                <p className="text-[#666666]">Junior Web Developer</p>
                <p className="bg-[#D7FFE0] text-[#018C0F] rounded-[120px] text-center  sm:h-[30px]   p-1 sm:w-[120px]">
                  Full Time
                </p>
              </div>
              <div className="flex sm:gap-[70px] mt-1">
                <div className="flex items-center">
                  <img src="src/assets/q4.png" alt="" />
                  <p className="text-[#A7A7A7]">
                    Bangalore Instutute of Technology
                  </p>
                </div>
                <div className="flex gap-1 items-center">
                  <img src="src/assets/q4.png" alt="" />
                  <p className="text-[#A7A7A7]">Aug 2015 - Dec 2020</p>
                </div>
              </div>
              <div className="2 mt-[7%]">
                <hr className="p-2 " />
                <div className="flex gap-[51px] sm:gap-[200px] items-center">
                  <p className="text-[#666666]">Web Development Intern</p>
                  <p className="bg-[#D7FFE0] text-[#018C0F] rounded-[120px] text-center  h-[30px]   p-1 w-[120px]">
                    Internship
                  </p>
                </div>
                <div className="flex gap-[px] sm:gap-[140px] mt-1">
                  <div className="flex items-center">
                    <img src="src/assets/q4.png" alt="" />
                    <p className="text-[#A7A7A7]">IonPixelz Web Solutions</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img src="src/assets/q4.png" alt="" />
                    <p className="text-[#A7A7A7]">Aug 2015 - Dec 2020</p>
                  </div>
                </div>
                <hr className="mt-7 " />
              </div>
              <div className="3 mt-[5%]">
                <div className="flex gap-[91px] sm:gap-[235px] items-center">
                  <p className="text-[#666666]">SEO / SEM Specialist</p>
                  <p className="bg-[#D7FFE0] text-[#018C0F] rounded-[120px] text-center  h-[30px]   p-1 w-[120px]">
                    Internship
                  </p>
                </div>
                <div className="flex gap-[131px] sm:gap-[270px] mt-1">
                  <div className="flex items-center">
                    <img src="src/assets/q4.png" alt="" />
                    <p className="text-[#A7A7A7]">HAAPS</p>
                  </div>
                  <div className="flex sm:gap-1 items-center">
                    <img src="src/assets/q4.png" alt="" />
                    <p className="text-[#A7A7A7]">Aug 2015 - Dec 2020</p>
                  </div>
                </div>
                <hr className="mt-6 " />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[9%]  ">
          <div className="text-center">
            <h3 className="pb-9 text-5xl font-bold text-[#42446E]">
              My Tech Stack
            </h3>
            <p> Technologies I’ve been working with recently</p>
          </div>
          <div className="flex gap-[32px] flex-wrap sm:flex sm:flex-wrap sm:gap-[111px] sm:p-10 sm:ml-9 mt-[7%]">
            <img src="src/assets/q5-1.svg" alt="" />
            <img src="src/assets/q5-2.svg" alt="" />
            <img src="src/assets/q5-3.svg" alt="" />
            <img src="src/assets/q5-4.svg" alt="" />
            <img src="src/assets/q5-5.png" alt="" />
            <img src="src/assets/q5-6.svg" alt="" />
            <img src="src/assets/q5-7.svg" alt="" />
            <img src="src/assets/q5-8.svg" alt="" />
            <img src="src/assets/q5-9.svg" alt="" />
            <img className="dark:bg-[red] " src="src/assets/q5-10.svg" alt="" />
            <img src="src/assets/q5-11.svg" alt="" />
            <img className="dark:bg-[red]" src="src/assets/q5-12.svg" alt="" />
          </div>
        </div>
        <div className="mt-[7%]">
          <div className="text-center">
            <h3 className="pb-9 text-5xl font-bold text-[#42446E]">Projects</h3>
            <p> Things I’ve built so far</p>
          </div>
          <div className="flex  justify-around mt-[7%] flex-wrap gap-14">
            <Card
              img={ph}
              text="Project Tile goes here"
              text2="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
              text3="Tech stack : HTML , JavaScript, SASS, React"
              img2={phImg}
              text4="Live Preview"
              img3={phImg2}
              text5="View Code"
            />
            <Card
              img={ph2}
              text="Project Tile goes here"
              text2="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
              text3="Tech stack : HTML , JavaScript, SASS, React"
              img2={phImg}
              text4="Live Preview"
              img3={phImg2}
              text5="View Code"
            />
            <Card
              img={ph3}
              text="Project Tile goes here"
              text2="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
              text3="Tech stack : HTML , JavaScript, SASS, React"
              img2={phImg}
              text4="Live Preview"
              img3={phImg2}
              text5="View Code"
            />
            <Card
              img={ph4}
              text="Project Tile goes here"
              text2="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
              text3="Tech stack : HTML , JavaScript, SASS, React"
              img2={phImg}
              text4="Live Preview"
              img3={phImg2}
              text5="View Code"
            />
            <Card
              img={ph5}
              text="Project Tile goes here"
              text2="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
              text3="Tech stack : HTML , JavaScript, SASS, React"
              img2={phImg}
              text4="Live Preview"
              img3={phImg2}
              text5="View Code"
            />
            <Card
              img={ph6}
              text="Project Tile goes here"
              text2="This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
              text3="Tech stack : HTML , JavaScript, SASS, React"
              img2={phImg}
              text4="Live Preview"
              img3={phImg2}
              text5="View Code"
            />
          </div>
        </div>
        <div className="mt-[11%]">
          <div className=" mb-14 flex items-center justify-around sm:gap-[581px]">
            <img src="src/assets/q1.png" alt="" />
            <div className="flex sm:gap-14 items-center">
              <p> +91 12345 09876</p>
              <p>info@example.com</p>
              <img src="src/assets/q2-1.svg" alt="" />
              <img src="src/assets/q2-2.svg" alt="" />
              <img src="src/assets/q2-3.svg" alt="" />
            </div>
          </div>
          <hr />
          <div className=" flex justify-between p-3 mt-[8%]">
            <ul className="hidden sm:flex gap-10 mr-[20px] text-[#666666]">
              <li>Home</li>
              <li>About</li>
              <li>Tech Stack</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
            <p>Designed and built by Pavan MG with Love & Coffee</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
