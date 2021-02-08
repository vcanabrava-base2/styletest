import React from 'react';
import { View, Text, Image } from 'react-native';
import strings from './strings';
import StyleKey from './StyleKey';
import styles from './styles';

export default () =>
(
    <View style={styles[StyleKey].container}>
        <View style={styles[StyleKey].card}>
            <Image
                source={strings[StyleKey].LOGO_SRC}
                style={styles[StyleKey].logo}
            />
            <Text style={styles[StyleKey].text}>
                {strings[StyleKey].WELCOME}
            </Text>
            <Text style={styles[StyleKey].text}>
                {`${strings[StyleKey].APP_INTRODUCTION}${strings[StyleKey].APP_NAME}`}
            </Text>
        </View>
    </View>
)