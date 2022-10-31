import '../../styles/card.css';
import { useCardHook } from '../../Hooks/cardHook'
import { Card } from './card'

export function Gallery() {

    const datas = useCardHook()
    return (
        <section className='gallery'>
            <ul className='carde_list'>
                {
                    datas.map(data =>
                        <Card data={data} key={data.id}></Card>)
                }
            </ul>
        </section>
    )
}