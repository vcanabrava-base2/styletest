import React from 'react';
import { View, Text, Image } from 'react-native';
import features from './features';
import strings from './strings';
import styles from './styles';

export default () =>
(
    <View style={styles.container}>
        {
            features.FEATURE_A &&
            <View style={styles.card}>
                <Image
                    source={strings.LOGO_SRC}
                    style={styles.logo}
                />
                <Text style={styles.text}>
                    {strings.WELCOME}
                </Text>
                <Text style={styles.text}>
                    {`${strings.APP_INTRODUCTION}${strings.APP_NAME}`}
                </Text>
            </View>
        }
        {
            features.FEATURE_B &&
            <View style={styles.card}>   
                <View style={styles.card}>   
                    <Text style={styles.text}>
                        {strings.FEATURE_B}
                    </Text>
                </View>
            </View>
        }
        {
            features.FEATURE_C &&
            <View style={styles.card}>   
                <Text style={styles.text}>
                    {strings.FEATURE_C}
                </Text>
                <Text style={styles.text}>
                    {strings.FEATURE_C_DESCRIPTION}
                </Text>
            </View>
        }
    </View>
)