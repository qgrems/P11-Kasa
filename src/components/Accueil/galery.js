import '../../styles/card.css';
import { useCardHook } from '../../Hooks/cardHook'
import { Card } from './card'
import picture from '../../assets/eric-muhr.jpg'
export function Gallery() {

    const datas = useCardHook()
    console.log(datas)
    return (
        <>
            <section className='containerPicture'>
                <div className='picture_main'>
                    <img src={picture} className='picture_img' alt='nature' />
                </div>
                <div className='container_txt'>
                    <p className='picture_txt'>Chez vous, partout et ailleurs</p>
                </div>
            </section>

            <section className='gallery'>
                <ul className='carde_list'>
                    {
                        datas.map(data =>
                            <Card data={data} key={data.id}></Card>)
                    }
                </ul>
            </section>
        </>
    )
}