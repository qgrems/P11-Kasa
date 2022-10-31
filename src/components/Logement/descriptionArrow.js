import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function ArrowDescription() {
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
        <FontAwesomeIcon onClick={toggle} icon={(up) ? faChevronUp : faChevronDown} className="icon" />
    )

}