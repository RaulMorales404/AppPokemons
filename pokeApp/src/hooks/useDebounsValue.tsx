import { useEffect, useState } from "react"


const useDebounsValue = (textInput: string = '', time: number = 500) => {
    const [debaunsValue, setDebaunsValue] = useState(textInput);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setDebaunsValue(textInput);
        }, time);

        return () => {
            clearTimeout(timeOut);
        }
    }, [textInput])

    return debaunsValue;

}

export default useDebounsValue