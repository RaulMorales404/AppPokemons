import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, View, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useDebounsValue from '../../hooks/useDebounsValue';

interface Props {
    onDebounce: (value: string) => void;
}

const SearchInput = ({ onDebounce }: Props) => {
    const [textInput, setTextInput] = useState('');
    useDebounsValue(textInput);
    const topScreen = useSafeAreaInsets().top;
    const os = () => {
        return Platform.OS === "android";
    }

    useEffect(() => {

        onDebounce(textInput);

        return () => {

        }
    }, [textInput])

    return (
        <View style={{
            ...styles.containerSearch,
            top: os() ? 30 : topScreen,
        }}>
            <View style={{
                ...styles.textBagkroun,
                height: os() ? 50 : 42,
                elevation: os() ? 9 : 5,

            }}>
                <TextInput
                    style={{
                        ...styles.textInput,
                        top: os() ? -1 : 0,
                        fontSize: os() ? 20 : 18,
                    }}
                    placeholder='Buscar Pokemon'
                    placeholderTextColor="#999"
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={textInput}
                    onChangeText={setTextInput}
                />
                <Icon name="search" color="#999" size={os() ? 35 : 28} />
            </View>
        </View>

    )
}

export default SearchInput;
const styles = StyleSheet.create({
    containerSearch: {
        position: 'absolute',
        zIndex: 9999,
        width: '100%',


    },
    textBagkroun: {
        width: '84%',
        backgroundColor: '#f1f3f1',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.83,

        elevation: 5,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
    },

})