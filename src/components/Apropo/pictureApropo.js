import picture from '../../assets/kralen-emsley.jpg'

export function Pictureapropos() {
    return (
        <section className='picture_mainApropros'>
            <div className='pictureContainer'>
                <img src={picture} className='picture_img_propos' alt='nature' />
            </div>
        </section>
    )
}