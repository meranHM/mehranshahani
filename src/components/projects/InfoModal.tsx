import FadeInDiv from "../design/FadeInDiv"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { InfoModalProps } from "@/types/types"


export default function InfoModal({ closeModal }: InfoModalProps) {
    return (
        <FadeInDiv
            className="fixed top-0 left-0 w-full h-full text-white bg-color-terminalBlack z-50 flex items-center justify-center overflow-clip transition-all"
        >
            <div
                className="flex flex-col items-center justify-center text-center max-w-3xl mx-5 p-4 md:p-6 gap-8 rounded-lg border-2 border-indigo-800 shadow-md shadow-indigo-800/80 backdrop-blur-lg"
            >
                <h2
                    className="text-nowrap text-sm md:text-xl lg:text-2xl"
                >
                    WELCOME TO MY UNIVERSE
                </h2>
                <p
                    className="text-sm md:text-base leading-9 md:leading-10"
                >
                    Use left and right arrow keys to navigate between projects
                </p>
                <span className="flex gap-6 animate-bounce text-2xl">
                    <FaArrowLeft /> <FaArrowRight/>
                </span>
                <div
                    className="flex gap-6"
                >
                    <button
                        onClick={() => closeModal()}
                        className="text-sm md:text-base py-2 px-4 bg-indigo-800 rounded-md hover:bg-indigo-700"
                    >
                        Continue
                    </button>
                    <button
                        onClick={() => closeModal()}
                        className="text-sm md:text-base py-2 px-4 bg-indigo-800 rounded-md hover:bg-indigo-700 flex flex-nowrap"
                    >
                        Back <span className="hidden md:block">to Home</span>
                    </button>
                </div>
            </div>
        </FadeInDiv>
    )
}