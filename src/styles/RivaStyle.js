import BaseStyle from './BaseStyle'
import { StyleSheet } from 'react-native';

const pallete =
{
    background: '#070b52',
    primary: '#af1305',
    text: '#eeeeee'
}

export default StyleSheet.create
(
    {
        ...BaseStyle,

        container:
        {
            ...BaseStyle.container,
            backgroundColor: pallete.background
        },

        card:
        {
            ...BaseStyle.card,
            backgroundColor: pallete.primary,
            borderRadius: 4
        },

        text:
        {
            ...BaseStyle.text,
            color: pallete.text,
            fontSize: 16
        },
    }
)