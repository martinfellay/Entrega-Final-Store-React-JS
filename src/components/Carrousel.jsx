const Carrousel = () => {
    return(
        <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img
                src="https://tmslighting.com/images/products/avril-171142.jpg
                "
                className="d-block w-100"
                alt="..."/>
            </div>
            <div className="carousel-item">
            <img
            src="https://images.squarespace-cdn.com/content/v1/6423b950e431652e2e8c595d/f8723850-9923-44bd-9be4-b4142850c53c/AdobeStock_659820089.jpeg?format=2500w"
            className="d-block w-100 "
            alt="..."/>
            </div>
            <div className="carousel-item">
            <img 
            src="https://images.squarespace-cdn.com/content/v1/6423b950e431652e2e8c595d/c836def4-19fb-4939-adf7-e9863738d699/AdobeStock_611238910.jpeg" 
            className="d-block w-100"
            alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    )
}

export default Carrousel ;