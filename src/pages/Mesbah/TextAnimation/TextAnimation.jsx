import { useTypewriter, Cursor } from "react-simple-typewriter";


const TextAnimation = () => {
  const [text] = useTypewriter({
    words: ['Edit PDFs Online for Free', 'Streamline Your Documents', 'Likho Assistant Chatbot', 'Powerful Writer-Powerful Words'],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,


  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">

        {/* <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-[#ff014f] capitalize w-16 h-16 -md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-white cursor-pointer">............</span>

        </h1> */}


        <h2 className="text-4xl font-bold text-white">
          <span className="text-[#e8ebee]">{text}</span>
          {/* <span className="text-[#ff014f]">{text}</span> */}
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#408ed6"
          />
        </h2>

      </div>
      {/* Media */}

    </div>
  );
}

export default TextAnimation







