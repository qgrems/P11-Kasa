import picture from '../../assets/kralen-emsley.jpg'

export function Pictureapropos() {
    return (
        <section className='picture_main'>
            <img src={picture} className='picture_img' alt='nature' />
        </section>
    )
}