

export function Tags({ data }) {
    let taggers = [];

    return (
        <div className="containerTagsStars">
            <div className="containerTags">
                {
                    function () {
                        for (let i in data.tags) {
                            taggers.push(<div className="tags" key={data.tags[i]}><p className="tagsfont">{data.tags[i]}</p></div>)
                        }
                        return taggers
                    }()
                }
            </div>
        </div>


    )
}