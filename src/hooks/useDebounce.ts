import { useEffect, useRef, useState } from "react";

type useDebounceProps = {
    initialValue: string;
    delay: number 
}

export default function useDebounce({ initialValue, delay }: useDebounceProps) {
    const [debounceValue, setDebounceValue] = useState("");
    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    useEffect(() => {
        timerRef.current = setTimeout(() => setDebounceValue(initialValue), delay)

        return () => {
            clearTimeout(timerRef.current)
        }
    }, [initialValue, delay])

    return debounceValue;
}