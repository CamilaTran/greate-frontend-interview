import { useEffect, useState, useRef } from "react";

export default function useThottle<T>(value: T, interval: number = 500) {
    const [newValue, setNewValue] = useState<T>(value)
    const lastUpdated = useRef<number>(0);

    useEffect(() => {
        const now = Date.now();

        if (lastUpdated.current && now - lastUpdated.current >= interval) {
            lastUpdated.current = now
            setNewValue(value)
        }
        else {
            const id = setTimeout(() => {
                lastUpdated.current = now;
                setNewValue(value)
            }, interval)

            return () => clearTimeout(id)
        }

    }, [value, interval])
    return newValue

}