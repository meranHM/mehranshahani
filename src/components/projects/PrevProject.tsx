import { IoArrowBackCircleOutline } from "react-icons/io5"

export default function PrevProject({ prevProject }: { prevProject: () => void }) {
    return (
        <button
            onClick={prevProject}
            className="absolute top-1/2 left-4 z-40 text-color-neonGreen border border-color-neonGreen px-4 py-2 rounded-md hover:bg-color-neonGreen hover:text-black transition-colors text-sm md:text-base flex items-center gap-2"
        >
            <IoArrowBackCircleOutline className="text-3xl" />
        </button>
    )
}