import { StyleSheet } from "react-native";

export const colors = {
    dark: '#000',
}

export const styless = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    
    imgHome: {
        position: 'absolute',
        top: -100,
        right: -100,
        width: 300,
        height: 300,
        alignSelf: 'flex-end',
        opacity: 0.5,
    },
    titleText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: colors.dark,
    }
})
