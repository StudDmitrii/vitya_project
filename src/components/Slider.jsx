import './Slider.css'

export default function Slider({children, count_in_row, gap='5px'}){
    const align_slider_count_center = count_in_row < 3 ? true : false

    return (
    <div className='slider'>
        <div className='container'>
            {children}
        </div>

        <div className='slider-controller'>
            {align_slider_count_center && <div></div>}

            <div className='slider-points'>
                {children.toArray().map((_, index)=>(
                    <div key={index} className='slider-point'></div>
                ))}
            </div>

            <div className='slider-arrows'>
                <div className='left-arrow'></div>
                <div className='right-arrow'></div>
            </div>
        </div>
    </div>
    )
}