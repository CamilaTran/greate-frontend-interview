import { COLORS, ColorType } from "../data"

interface PalletProps {
    color: ColorType;
    onChangeColor: (color: ColorType) => void
}

const Pallet = ({ color = COLORS.black, onChangeColor }: PalletProps) => {

    return (
        <div className="flex">
            {Object.values(COLORS).map((i) => (
                <div
                    className={`w-5 h-5 bg-[${i}] cursor-pointer ${color === i && 'border-1 border-black'}`}
                    key={i}
                    onClick={() => onChangeColor(i)}
                />
            ))}
        </div>
    )
}


export default Pallet