import picture from '../../assets/eric-muhr.jpg'

export function Picturemain() {
    return (
        <section className='containerPicture'>
            <div className='picture_main'>
                <img src={picture} className='picture_img' alt='nature' />
                <p className='picture_txt'>Chez vous, partout et ailleurs</p>
            </div>
        </section>
    )
}