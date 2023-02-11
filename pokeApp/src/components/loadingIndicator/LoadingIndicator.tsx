import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const LoadingIndicator = () => {
    return (

        <View style={{
            ...styles.containerIndicator
        }}>
            <ActivityIndicator
                size={50}
                color="black"
            />
        </View>

    )
}

export default LoadingIndicator;
const styles = StyleSheet.create({
    containerIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }

})