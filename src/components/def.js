
import { Fade } from "./fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { React, useState } from "react";


export function ResumeText({ data, datas }) {
    const [open, setOpen] = useState(false)
    const [up, setUp] = useState(false)
    const toggle = () => {
        setOpen(o => !o)
        if (!up) {
            setUp(true)
        }
        else setUp(false)
    }
    return (
        <div className={datas.class}>
            <div className={data.class}>
                <p className="container-text">{data.title}</p>
                <FontAwesomeIcon onClick={toggle} icon={(up) ? faChevronUp : faChevronDown} className="icon" />
            </div>
            <Fade visible={open}>
                <div className='square'>
                    <p className="texte-Apropo" dangerouslySetInnerHTML={{ __html: data.description }}></p>
                </div>
            </Fade>
        </div>
    )
}