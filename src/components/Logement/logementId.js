import '../../styles/card.css';

import { PictureLogement } from './mainLogement';
import { useIdlogement } from '../../Hooks/urlHook';
export function Pictures() {
    const datas = useIdlogement()
    return (
        <>
            {
                datas.map(data =>
                    <PictureLogement data={data} key={data.id}></PictureLogement>
                )
            }
        </>
    )
}