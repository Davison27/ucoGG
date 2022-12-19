import { useState } from "react";


export const useHomeScreen = (navigation)=>{

    const [championName, setChampionName] = useState<string>()

    const handleChange = (value: string)=>{
        setChampionName(value)
    }

    const handleSearchPress = ()=>{
        navigation.navigate('Champion', {championName})
    }

    return {
        handleChange,
        handleSearchPress
    }
}