import React from 'react'
import { useResumeHook } from '../../Hooks/resumHook'
import { ResumeText } from '../def'


export function ResumeMap() {
    const datas = useResumeHook()
    return (
        < section className='containerFiabilite' >
            {
                datas.map(data =>
                    <ResumeText data={data} key={data.title}></ResumeText>)
            }
        </section >
    )

}