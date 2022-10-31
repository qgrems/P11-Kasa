import Datas from '../Json/apropos.json'

import { useState, useEffect } from 'react'

export function useResumeHook() {
    const [data, setTitle] = useState([])
    useEffect(() => {

        setTitle(Datas)

    }, [data])

    return data
}