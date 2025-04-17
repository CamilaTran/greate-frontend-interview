"use client"

import Canvas from "./components/canvas";
import Pallet from "./components/pallet";
import Mode from "./components/mode";
import { useState } from "react";
import { ModeType } from "./components/mode";
import { COLORS, ColorType } from "./data";


const PixelArt = () => {
    const [mode, setMode] = useState<ModeType>('ease');
    const [color, setColor] = useState<ColorType>(COLORS.black);

    const onChangeMode = (mode: ModeType) => {
        setMode(mode)
    }

    const onChangeColor = (color: ColorType) => {
        setColor(color)
    }

    return <div className="w-screen h-screen flex justify-center items-center bg-pink-50 gap-10 flex-col">
        <Canvas mode={mode} color={color}/>
        <div className="flex justify-between gap-20 items-center">
            <Mode mode={mode} onChangeMode={onChangeMode} />
            <Pallet color={color} onChangeColor={onChangeColor} />
        </div>
    </div>
}


export default PixelArt;