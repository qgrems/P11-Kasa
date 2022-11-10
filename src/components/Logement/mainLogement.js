import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Tags } from "./tags";
import { useState } from "react";
import { AllStars } from "./stars";

export function PictureLogement({ data }) {
    const [index, setIndex] = useState(0)
    const [nbrIndex, setNbrIndex] = useState(1);
    if (index === data.pictures.length) {
        setIndex(index - index)
        setNbrIndex(nbrIndex - index)
    }
    else if (index < 0) {
        setIndex(index + data.pictures.length)
        setNbrIndex(index + data.pictures.length + 1)
    }

    return (
        <>
            <section className='logementPicture'>
                <div className="containerPictureChevron">
                    < img src={data.pictures[index]} key={data.pictures.length} className='picture_logement' alt='nature' />
                    {

                        (data.pictures.length > 1) ?
                            <>
                                <div className="containerChevrontBack">
                                    <FontAwesomeIcon onClick={() => setIndex(index - 1) + setNbrIndex(nbrIndex - 1)} icon={faChevronLeft} className="chevronBack" />
                                </div>
                                <div className="containerChevrontNext">
                                    <FontAwesomeIcon onClick={() => setIndex(index + 1) + setNbrIndex(nbrIndex + 1)} icon={faChevronRight} className="chevronNext" />
                                </div>

                            </> : ""
                    }
                </div >
                <div className="nbrIndex">
                    <span className="nbrOfPicture">{nbrIndex}/{data.pictures.length}</span>
                </div>
            </section>
            <section className='logementTitle'>
                <div className='ContainerlogementTitle'>
                    <div className="containersTitle">
                        <div className="titlesPlacement">
                            <h2 className="titleLogement">{data.title}</h2>
                            <h3 className="locationLogement">{data.location}</h3>
                        </div>
                        <Tags data={data}></Tags>
                    </div>
                    <section className='containerTagsStar'>
                        <div className="namePlacement">
                            <div className="containerOwner">
                                <h3 className="nameOfHost">{data.host.name}</h3>
                                <img src={data.host.picture} className="sizePicture" alt="Host" />
                            </div>
                            <div className="containerStars">
                                <AllStars data={data}></AllStars>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

        </>
    )
}