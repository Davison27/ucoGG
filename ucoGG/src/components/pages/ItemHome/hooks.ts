import { useState } from "react";


export const useItem = (navigation)=>{

    const [itemName, setItemName] = useState<string>()

    const handleChange = (value: string)=>{
        setItemName(value)
    }

    const handleSearchPress = ()=>{
            
            navigation.navigate('Item', {itemName})
        //Peticion a la api de ddragon

    }

    return {
        handleChange,
        handleSearchPress
    }
}