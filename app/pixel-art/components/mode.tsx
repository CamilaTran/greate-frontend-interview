"use client"

export type ModeType = 'ease' | 'draw';


interface ModeProps {
    mode: ModeType;
    onChangeMode: (mode: ModeType) => void
}


const Mode = ({ mode, onChangeMode }: ModeProps) => {
    return <div className="flex">
        <button className={`border-1 border-black px-5 py-2 cursor-pointer ${mode === 'draw' && 'bg-black !text-white transition duration-100'}`} onClick={() => onChangeMode('draw')}>Draw</button>
        <button className={`border-1 border-black px-5 py-2 cursor-pointer ${mode === 'ease' && 'bg-black !text-white transition duration-100'}`} onClick={() => onChangeMode('ease')}>Ease</button>
    </div>

}

export default Mode