import TargetKey, { TARGET_KEYS } from "../TargetKey";
import DirecionalFeatures from "./DirecionalFeatures";
import RivaFeatures from "./RivaFeatures";

const featureSet =
{
    [TARGET_KEYS.DIRECIONAL]: DirecionalFeatures,
    [TARGET_KEYS.RIVA]: RivaFeatures
}

export default featureSet[TargetKey];