
import React from 'react'
import { useIdlogement } from '../../Hooks/urlHook'
import { ArrowDescription } from './descriptionArrow'
import { DataDescription } from './descriptionData'
import { Equipement } from './equipement'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Fade } from '../fade'
import { ResumeMap } from '../Apropo/resumeMap'
import { ResumeText } from '../def'

export function LogementDescription() {
    const datas = useIdlogement()
    console.log(datas)
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


