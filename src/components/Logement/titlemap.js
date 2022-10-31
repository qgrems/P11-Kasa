import { useIdlogement } from '../../Hooks/urlHook';
import { TitleOfLogement } from '../Logement/title'
import { DataTagsStars } from './nameStars';

export function DataTitle() {
    const datas = useIdlogement()
    return (
        <section className='logementTitle'>
            {
                datas.map(data =>
                    <TitleOfLogement data={data} key={data.title}></TitleOfLogement>
                )

            }
            <DataTagsStars></DataTagsStars>
        </section>
    )
}