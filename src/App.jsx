
import "./App.css";
import { useState } from "react";
import axios from "axios";


function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    setAnswer("Loading... ");
    const response = await axios({
      url:`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.REACT_APP_API_KEY}`,

      method: "post",

      data: {
        contents: [{ parts: [{ text: question }] }],
      },
    });
    
      setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"])
  }
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-center my-4 bg-blue-300 p-5 rounded-lg mx-[200px]">
          Gemini Chatbot
        </h1>
        <div className="grid grid-cols-2 p-[50px] grid-flow-col justify-center gap-[100px] h-[470px] w-full">
        
         <textarea
          placeholder="Enter The Question Here ... "
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="border-2 border-black p-7 text-2xl resize-none rounded-lg"
            cols={50}
            rows={10}
          ></textarea>
         
          <textarea
          value={answer}
          placeholder="Click On The Generate Answer After Writing the Question In The Question Bar ... "
            className="border-2 border-black p-7 text-xl  resize-none  rounded-lg"
            cols={50}
            rows={10}
          >
            <pre></pre>
          </textarea>
        </div>
        <button
          onClick={generateAnswer}
          className="border-2 border-black p-3 rounded-lg my-6 "
        >
          Generate Answer
        </button>
      </div>


      <footer className="text-xl text-center p-3 bg-black text-white"> All Rights Reseverd. Developed By Prayanshu Chourasia </footer>
    </>
  );
}

export default App;
