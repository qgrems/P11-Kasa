import { Link } from "react-router-dom";

export function Card({ data }) {
    return (
        <Link to={"/detail/" + data.id} className="card">
            <li className="sizeRelative">
                <img src={data.cover} className="card_picture" alt="img"></img>
                <div className="voile"></div>
                <h1 key={data.id} className='card_title'>{data.title}</h1>
            </li>
        </Link>
    )
}

