import { AllStars } from "./stars";

export function NameOfOwner({ data }) {
    return (
        <div className="namePlacement">
            <div className="containerOwner">
                <h3 className="nameOfHost">{data.host.name}</h3>
                <img src={data.host.picture} className="sizePicture" alt="Host" />
            </div>
            <div className="containerStars">
                <AllStars data={data}></AllStars>
            </div>
        </div>
    )
}