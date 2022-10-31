import { Link } from "react-router-dom";

export function Card({ data }) {
    // const link = UrlId();
    // console.log(link)
    return (
        <Link to={"/detail/" + data.id} className="card">

            <li className='' >
                <img src={data.cover} className="card_picture" alt="img"></img>
                <p key={data.id} className='card_title'>{data.title}</p>
            </li>
        </Link>
    )
}

