import { NameOfOwner } from "./name";
import { Tags } from "./tags";

export function TitleOfLogement({ data }) {
    return (
        <div className="containersTitle">
            <div className="titlesPlacement">
                <h2 className="titleLogement">{data.title}</h2>
                <h3 className="locationLogement">{data.location}</h3>
            </div>
            <Tags data={data}></Tags>
        </div>
    )
}