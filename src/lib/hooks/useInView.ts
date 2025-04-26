import { useEffect, useState, useRef } from "react"

const useInView = (threshold = 0.2) => {
    const [isInView, setIsInView] = useState(false)
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                }
            },
            { threshold }
        )

        if (ref.current) observer.observe(ref.current)

        return () => observer.disconnect()
    }, [threshold])

    return { ref, isInView }
}

export default useInView
