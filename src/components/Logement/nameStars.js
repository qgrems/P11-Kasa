import { useIdlogement } from '../../Hooks/urlHook';
import { NameOfOwner } from './name';

export function DataTagsStars() {
    const datas = useIdlogement()
    return (
        <section className='containerTagsStar'>
            {
                datas.map(data =>
                    <NameOfOwner data={data} key={data.host.name}></NameOfOwner>
                )
            }
        </section>
    )
}