
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


export function AllStars({ data }) {
    let redStars = [];
    let i = 0;
    const maxStar = 6;
    return (
        <div className="stars">
            {

                function () {
                    while (i < maxStar) {
                        if (i < data.rating) {
                            redStars.push(<FontAwesomeIcon key={i} icon={faStar} className="iconStarsRed" />)
                        }
                        if (i > data.rating) {
                            redStars.push(<FontAwesomeIcon key={i} icon={faStar} className="iconStarsWhite" />)
                        }
                        i++
                    }
                    return (redStars)
                }()
            }
        </div>
    )
}
