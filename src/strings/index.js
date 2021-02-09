import TargetKey, { TARGET_KEYS } from "../TargetKey";
import DirecionalStrings from "./DirecionalStrings";
import RivaStrings from "./RivaStrings";

const stringSet =
{
    [TARGET_KEYS.DIRECIONAL]: DirecionalStrings,
    [TARGET_KEYS.RIVA]: RivaStrings
}

export default stringSet[TargetKey]