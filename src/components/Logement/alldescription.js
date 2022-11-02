
import React from 'react'
import { useIdlogement } from '../../Hooks/urlHook'
import { ResumeText } from '../def'

export function LogementDescription() {
    const datas = useIdlogement()
    let description = ""
    let equipement = ""

    if (datas && datas[0] && datas[0].description) {

        description = datas[0].description
    }
    if (datas && datas[0] && datas[0].equipments) {
        equipement = datas[0].equipments.join("<br/>")
    }
    return (
        <section className='containerDescription'>
            <div className='containersRectangle'>
                <ResumeText data={{ title: "Descriptions", description: description, class: "containerRectangle" }}> </ResumeText>
            </div>
            <div className='containersEquipement'>
                <ResumeText data={{ title: "Equipements", description: equipement, class: "containerEquipement" }}></ResumeText>
            </div>

        </section>
    )
}


