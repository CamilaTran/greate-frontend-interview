import { useEffect, useState } from "react"


export default function useDebounce<T>(value: T, delay: number) {

    const [newValue, setNewValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setNewValue(value)
        }, delay)

        return () => {
            clearTimeout(timer)
        }

    }, [value, delay])

    return newValue

}