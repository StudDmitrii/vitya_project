import './Slider.css'
import { Children, useState } from 'react'

export default function Slider({children, count_in_row, gap='5px'}){
    const [currentSlide, setCurrentSlide] = useState(0)
    const childs = Children.toArray(children)

    function leftArrowHandler(e){
        setCurrentSlide(old=>old-1)
        checkCurrentSlide()
    }

    function rightArrowHadler(e){
        setCurrentSlide(old=>old+1)
        checkCurrentSlide()
    }

    return (
    <div className='slider'>
        <div className='container'>
            {childs.map(slide=>{
                return slide
            })}
        </div>

        <div className='slider-controller'>
            {count_in_row != 1 && <div></div>}

            <div className='slider-points'>
                {childs.map((_, index)=>(
                    <div key={index} className='slider-point'></div>
                ))}
            </div>

            <div className='slider-arrows'>
                <button className='left-arrow' onClick={leftArrowHandler}></button>
                <button className='right-arrow' onClick={rightArrowHadler}></button>
            </div>
        </div>
    </div>
    )
}