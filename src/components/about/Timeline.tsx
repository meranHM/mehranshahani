import { timelineData } from "@/constants"
import TimelineItem from "./TimelineItem"

export default function Timeline() {

  return (
    <div
        className="relative flex flex-col items-center"
    >
        <h2 className="text-2xl md:text-3xl font-bold text-color-neonGreen mb-6">Career Timeline</h2>
        <div
            className="w-full max-w-4xl"
        >
            {timelineData.map((item, index) => (
                <TimelineItem
                    key={index}
                    year={item.year}
                    title={item.title}
                    description={item.description}
                    future={item.future}
                />
            ))}
        </div>


    </div>
  )
}