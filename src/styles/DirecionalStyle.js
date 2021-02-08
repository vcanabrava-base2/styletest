import BaseStyle from './BaseStyle'
import { StyleSheet } from 'react-native';

const pallete =
{
    background: '#bf2315',
    primary: '#eeeeee',
    text: '#070b52'
}

export default StyleSheet.create
(
    {
        ...BaseStyle,

        container:
        {
            ...BaseStyle.container,
            backgroundColor: pallete.background,
            justifyContent: 'flex-start'
        },

        card:
        {
            ...BaseStyle.card,
            backgroundColor: pallete.primary,
            borderRadius: 10,
            borderWidth: 4,
            borderColor: pallete.text,
        },

        text:
        {
            ...BaseStyle.text,
            color: pallete.text
        }
    }
)