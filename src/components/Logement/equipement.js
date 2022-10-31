export function Equipement({ data }) {
    const taggers = []
    return (
        <div className='containerResume'>
            {
                function () {
                    for (let i in data.equipments) {
                        taggers.push(<p className="textOfResumeEquip" key={data.equipments[i]}>{data.equipments[i]}</p>)
                    }
                    return taggers
                }()
            }
        </div>
    )
}