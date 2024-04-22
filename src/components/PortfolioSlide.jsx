export default function PortfolioSlide({img, title, date}){
    return (
        <div className="portfolio-slide">
            <img src={img}/>
            <p className="portfolio-slide-title">{title}</p>
            <p className="portfolio-slide-date">{date}</p>
        </div>
    )
}