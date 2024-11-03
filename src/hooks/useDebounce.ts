import { useEffect, useRef, useState } from "react";

export default function useDebounce(initialValue: string, delay: number) {
    const [debounceValue, setDebounceValue] = useState(initialValue);
    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    useEffect(() => {
        timerRef.current = setTimeout(() => setDebounceValue(initialValue), delay)

        return () => {
            clearTimeout(timerRef.current)
        }
    }, [initialValue, delay])

    return debounceValue;
}