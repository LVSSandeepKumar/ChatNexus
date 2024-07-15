import { animationDefaultOptions } from "@/lib/utils";
import Lottie from "react-lottie";

const EmptyChatContainer = () => {
  return (
    <div className="bg-[#1c1d25] md:flex flex-1 flex-col justify-center items-center duration-1000 transition-all hidden ">
      <Lottie 
        isClickToPauseDisabled={true}
        height={200}
        width={200}
        options={animationDefaultOptions}
      />
      <div className="flex flex-col gap-5 text-opacity-80 text-white items-center mt-10 lg:text-4xl text-3xl text-center transition-all duration-300">
        <h3 className="poppins-medium">
          Welcome to <span className="text-purple-500">Chat Nexus</span>
        </h3>
      </div>
    </div>
  );
};

export default EmptyChatContainer;
