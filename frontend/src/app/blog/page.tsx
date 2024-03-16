'use client';
import Quiz from "@/components/ui/quiz";
import { time } from "console";
import { Content } from "next/font/google";
import * as React from "react";
import { CopyBlock, dracula } from 'react-code-blocks';

const testCode = `
// select relevant elements
const form = document.querySelector("form");
const input = document.querySelector("input");
messageList = document.querySelector("ul");

// establish socket.io connection
const socket = io();

// handle sending message to server & input reset
function sendMessage(e) {
  // prevent form submission refreshing page
  e.preventDefault();
  // send input value to server as type 'message'
  socket.emit("message", input.value);
  // reset input value
  input.value = "";
}
               `

interface CourseModuleProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  introContent: React.ReactNode;
  basicsContent: React.ReactNode;
}

const Text = ({
  title,
  description
}: { title: string, description: string }) => {
  return (
    <div className="    text-wrap">
      <h1 className="text-[#f3f4f6] text-5xl py-7">{title}</h1>
      <p className="text-[#d1d5dbb3] text-3xl py-7 text-justify">{description}</p>
    </div>
  );
};

const CodeBlock = ({
  title,
  description
}: { title: string, description: string }) => {
  return (
    <section className="   flex justify-center">
      <div className="   w-[50%] text-wrap">
        <h1 className="text-[#f3f4f6] text-5xl py-5">{title}</h1>
        <p className="text-[#d1d5dbb3] text-3xl py-2 text-justify">{description}</p>
      </div>
    </section>
  );
};

const SkillForge: React.FC = () => {
  return (
    <div className="flex flex-col font-medium    ">
      <div className="flex overflow-hidden relative flex-col w-full">

        {/* nav bar  */}
        <div className="flex  gap-5 justify-between px-16 py-7 w-full font-medium  bg-zinc-800 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className=" text-md flex gap-5 justify-between my-auto  text-white max-md:flex-wrap">
            <div className="grow text-2xl whitespace-nowrap ">Course Craft</div>
            <div>Theory Module </div>
            <div>Multiple-choice</div>
            <div className="grow whitespace-nowrap">Code writing</div>
          </div>
          <div className="flex gap-2.5 text-sm whitespace-nowrap">
            <div className="grow justify-center px-6 py-4 text-black bg-white rounded-2xl max-md:px-5 text-xl">
              Get started{" "}
            </div>
            <div className="grow justify-center px-3 py-3.5 bg-red-500 rounded-2xl text-stone-300 text-xl">
              Test knowledge
            </div>
          </div>
        </div>
        {/* nav bar ends */}


        {/* blog starts */}
        <section className="flex justify-center">
          <div className="w-[50%] text-wrap">
            {
              data2["Advanced layout techniques in Tailwind CSS"].map((item, index) => (
                <div className="">
                  {/* headding */}
                  <Text title={"Advanced layout techneque"} description={item.content} />
                  {/* code block */}
                  {
                    (item.code_example.length > 0) ?
                      <div className=" text-2xl py-7">
                        < CopyBlock
                          text={item.code_example.join('\n')}
                          language={'Python'}
                          showLineNumbers={false}
                          theme={dracula}
                        />
                      </div>
                      : null
                  }
                  {/* quiz */}
                  <Quiz data={item.quiz} />
                </div>
              ))
            }
          </div>
        </section>
      </div>
    </div>
  );
};

const data =
  [
    {
      "content": "For loops iterate over a sequence of elements, such as a list or tuple. The syntax for a for loop is as follows:\n\n```python\nfor element in sequence:\n  # code to execute\n```",
      "quiz": [
        {
          "question": "What is the purpose of a for loop?",
          "options": [
            "To execute a block of code repeatedly",
            "To iterate through a list of elements",
            "Both (a) and (b)",
            "None of the above"
          ],
          "correct": "Both (a) and (b)"
        },

        {
          "question": "What is the purpose of a for loop?",
          "options": [
            "To execute a block of code repeatedly",
            "To iterate through a list of elements",
            "Both (a) and (b)",
            "None of the above"
          ],
          "correct": "Both (a) and (b)"
        }
      ]
    },
    {
      "content": "While loops execute a block of code repeatedly as long as a condition is true. The syntax for a while loop is as follows:\n\n```python\nwhile condition:\n  # code to execute\n```",
      "quiz": [
        {
          "question": "What is the condition in a while loop evaluated against?",
          "options": [
            "True or False",
            "0 or 1",
            "None of the above"
          ],
          "correct": "True or False"
        }
      ]
    },
    {
      "content": "Do-while loops are similar to while loops, but they execute the code block at least once before checking the condition. The syntax for a do-while loop is as follows:\n\n```python\ndo:\n  # code to execute\nwhile condition:\n  # continue executing\n```",
      "quiz": [
        {
          "question": "What is the main difference between a while loop and a do-while loop?",
          "options": [
            "Do-while loops execute the code block at least once, while while loops do not",
            "While loops execute the code block at least once, while do-while loops do not",
            "There is no difference between the two loop types",
            "None of the above"
          ],
          "correct": "Do-while loops execute the code block at least once, while while loops do not"
        }
      ]
    }
  ]


const data2 = {
  "Advanced layout techniques in Tailwind CSS": [
    {
      "content": "Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom designs. It provides a wide range of utility classes that you can use to style your website, including classes for flexbox, grid, and responsive layouts.",
      "quiz": [
        {
          "question": "What is the main benefit of using Tailwind CSS?",
          "options": ["It is easy to learn and use", "It provides a wide range of utility classes", "It is highly customizable", "All of the above"],
          "correct": "All of the above"
        }
        /* More quiz questions as needed */
      ],
      "code_example": []
    },
    {
      "content": "Flexbox is a one-dimensional layout system that allows you to align and distribute items in a flexible way. It is perfect for creating responsive layouts that can adapt to different screen sizes.",
      "quiz": [
        {
          "question": "Which property is used to control the direction of a flexbox layout?",
          "options": ["flex-direction", "flex-wrap", "justify-content", "align-items"],
          "correct": "flex-direction"
        }
        /* More quiz questions as needed */
      ],
      "code_example": [
        ".container {",
        "  display: flex;",
        "  flex-direction: row;",
        "  justify-content: center;",
        "  align-items: center;",
        "}"
      ]
    },
    {
      "content": "Grid is a two-dimensional layout system, which provides more control over the layout of your content. It is ideal for creating complex layouts, such as dashboards and e-commerce websites.",
      "quiz": [
        {
          "question": "Which property is used to control the number of columns in a grid layout?",
          "options": ["grid-template-columns", "grid-template-rows", "grid-gap", "justify-items"],
          "correct": "grid-template-columns"
        }
        /* More quiz questions as needed */
      ],
      "code_example": [
        ".grid-container {",
        "  display: grid;",
        "  grid-template-columns: repeat(3, 1fr);",
        "  grid-gap: 1rem;",
        "}"
      ]
    },
    {
      "content": "Responsive layouts are essential for creating websites that work well on all devices. Tailwind CSS provides a range of utility classes that you can use to create responsive layouts, such as classes for breakpoints, media queries, and utility classes for hiding and showing content.",
      "quiz": [
        {
          "question": "Which media query is used to target devices with a width of 768px or less?",
          "options": ["@media (max-width: 768px)", "@media (min-width: 768px)", "@media (max-width: 767px)", "@media (min-width: 769px"],
          "correct": "@media (max-width: 768px)"
        }
        /* More quiz questions as needed */
      ],
      "code_example": [
        "@media (max-width: 768px) {",
        "  .container {",
        "    display: flex;",
        "    flex-direction: column;",
        "  }",
        "}"
      ]
    }
  ]
}
export default SkillForge;