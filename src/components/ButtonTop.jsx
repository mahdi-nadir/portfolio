import { BsArrowUpCircleFill } from 'react-icons/bs'
import { useState } from 'react'

function ButtonTop({ onTop }) {
    const [top, setTop] = useState(false);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            setTop(true)
        } else {
            setTop(false)
        }
    })

    return (
        top && <BsArrowUpCircleFill className='topBtn' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        // <BsArrowUpCircleFill className='topBtn' onClick={() => handleTop()} />
    )
}

export default ButtonTop