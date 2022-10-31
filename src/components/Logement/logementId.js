import '../../styles/card.css';

import { PictureLogement } from './picture';
import { useIdlogement } from '../../Hooks/urlHook';
export function Pictures() {
    const datas = useIdlogement()
    return (

        <section className='logementPicture'>
            {
                datas.map(data =>
                    <PictureLogement data={data} key={data.id}></PictureLogement>
                )
            }
        </section>
    )
}