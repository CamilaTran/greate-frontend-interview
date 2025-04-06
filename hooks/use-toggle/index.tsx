import { useState, Dispatch, SetStateAction } from "react";


const useToggle = (initialValue: boolean = false): [boolean, () => void, Dispatch<SetStateAction<boolean>>] => {
    const [value, setValue] = useState<boolean>(Boolean(initialValue) ?? false);

    const toggle = () => {
        setValue(prev => !prev)
    }

    return [value, toggle, setValue]
}

export default useToggle;