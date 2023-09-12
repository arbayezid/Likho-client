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
    <div className="w-full lg:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold text-white">
          <span className="text-[#e8ebee]">{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#408ed6"
          />
        </h2>
      </div>
    </div>
  );
}

export default TextAnimation;
