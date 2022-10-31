import Datas from '../Json/data.json'
import { useState, useEffect } from 'react'

export function useCardHook() {
    const [data, setTitle] = useState([])
    useEffect(() => {

        setTitle(Datas)

    }, [data])

    return data
}
