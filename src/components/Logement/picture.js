import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export function PictureLogement({ data }) {
    const [index, setIndex] = useState(0)

    if (index === data.pictures.length) {
        setIndex(index - index)
    }
    else if (index < 0) {
        setIndex(index + data.pictures.length)
    }
    return (

        <div className="containerPictureChevron">
            < img src={data.pictures[index]} key={data.pictures.length} className='picture_logement' alt='nature' />
            {
                (data.pictures.length > 1) ?
                    <>
                        <FontAwesomeIcon onClick={() => setIndex(index + 1)} icon={faChevronRight} className="chevronNext" />
                        <FontAwesomeIcon onClick={() => setIndex(index - 1)} icon={faChevronLeft} className="chevronBack" />
                    </> : ""
            }

        </div >
    )
}