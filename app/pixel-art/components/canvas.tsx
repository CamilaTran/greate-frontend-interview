import { WIDTH, HEIGHT, COLORS, ColorType } from "../data"
import Cell from "./cell";
import { ModeType } from "./mode";

const widthArr = Array.from({ length: WIDTH }, (_, i) => i);
const heightArr = Array.from({ length: HEIGHT }, (_, i) => i);

interface CanvasProp {
    mode: ModeType;
    color: ColorType;

}
const Canvas = ({ mode, color }: CanvasProp) => {
    return <div>
        <div className="flex flex-col">
            {heightArr.map((_, colId) => {
                return (
                    <div className="flex" key={colId}>
                        {widthArr.map((_, rowId) => (
                            <Cell
                                mode={mode}
                                color={`bg-[${color}]`}
                                key={`${colId}_${rowId}`}
                                background={((rowId % 2 === 0 && colId % 2 === 0) || (rowId % 2 !== 0 && colId % 2 !== 0)) ? `bg-[${COLORS.white}]` : `bg-[${COLORS.gray}]`}
                            />
                        ))}
                    </div>
                );
            })}
        </div>


    </div>

}

export default Canvas