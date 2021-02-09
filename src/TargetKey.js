import RNConfigReader from 'react-native-config-reader';

export const TARGET_KEYS =
{
    DIRECIONAL: 'DIRECIONAL',
    RIVA: 'RIVA'
}

const TargetKey = RNConfigReader.TARGET_KEY || TARGET_KEYS.DIRECIONAL;
export default TargetKey;