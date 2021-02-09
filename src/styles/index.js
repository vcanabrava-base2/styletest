import TargetKey, { TARGET_KEYS } from "../TargetKey";
import DirecionalStyle from "./DirecionalStyle";
import RivaStyle from "./RivaStyle";

const styleSet =
{
    [TARGET_KEYS.DIRECIONAL]: DirecionalStyle,
    [TARGET_KEYS.RIVA]: RivaStyle
}

export default styleSet[TargetKey];