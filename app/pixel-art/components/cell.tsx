import { useState } from "react";
import { ModeType } from "./mode";

interface CellProps {
    color: string;
    background?: string;
    mode: ModeType;
}

const Cell = ({ color, background, mode }: CellProps) => {
    const [paintColor, setPaintColor] = useState(background)

    return <div
        className={`w-5 h-5 ${paintColor} cursor-pointer`}
        onMouseOver={() => {
            setPaintColor(mode === 'draw' ? color : background)
        }}
    />
}

export default Cell