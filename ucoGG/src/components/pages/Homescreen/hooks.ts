import { useState } from "react";


export const useHomeScreen = (navigation)=>{

    const [championName, setChampionName] = useState<string>()

    const handleChange = (value: string)=>{
        setChampionName(value)
    }

    const handleSearchPress = ()=>{
        if(championName){
            const formatedChampionName = championName.charAt(0).toUpperCase() + championName.slice(1).toLowerCase()
            console.log(formatedChampionName);
            
            navigation.navigate('Champion', {championName: formatedChampionName})
        }
        //Peticion a la api de ddragon

    }

    return {
        handleChange,
        handleSearchPress
    }
}