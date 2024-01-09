

const moviesPoster = [

    {
        name : "OMG 2",
        cover : "https://assetscdn1.paytm.com/images/cinema/OMG-app-55ef9e90-30f2-11ee-af29-7fab96e04e94.jpg",
        rating : "4.5/5",
        ticketPrice : "350",
        link : "https://www.netflix.com/in/"
    },

    {
        name : "Tiger 3",
        cover : "https://assets-in.bmscdn.com/discovery-catalog/events/et00313411-fetjquphud-landscape.jpg",
        rating : "3.5/5",
        ticketPrice : "120",
        link : "https://www.netflix.com/in/"
    },

    {
        name : "Sam Bahadur",
        cover : "https://m.media-amazon.com/images/M/MV5BMDBkMGRkMDQtMDFhZC00OWU5LWExZWMtYjBlZjEyYWMwNjI5XkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_.jpg",
        rating : "4/5",
        ticketPrice : "280",
        link : "https://www.netflix.com/in/"
    },

    
    {
        name : "Ghoomer",
        cover : "https://m.media-amazon.com/images/M/MV5BMDcwYzg2ZDctNTFjMi00YjliLWFkNmYtOTBkZjQ1YzQ1MTNhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
        rating : "5/5",
        ticketPrice : "330",
        link : "https://www.netflix.com/in/"
    },
    {
        name : "Dunki",
        cover : "https://m.media-amazon.com/images/M/MV5BMzQ0NDRhNmItYzllYS00NDdlLTk0YTctZDQ5YmFkYjdkNDcyXkEyXkFqcGdeQXVyNTYwMzA0MTM@._V1_FMjpg_UX1000_.jpg",
        rating : "4/5",
        ticketPrice : "240",
        link : "https://www.netflix.com/in/"
    },
    {
        name : "Animal",
        cover : "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91zTlD7AY1L.jpg",
        rating : "3.5/5",
        ticketPrice : "350",
        link : "https://www.netflix.com/in/"
    },
    

]

moviesPoster.map((cavl)=>{

    document.querySelector('#moviesDate').innerHTML += `
                    <div class="col-md-4 mb-5">
                        <div class="card">
                            <img class="card-img-top" src=${cavl.cover} alt="Card image cap" height=300px>
                            <div class="card-body">
                            <h5 class="card-title">${cavl.name}</h5>
                            <p class="card-text">${cavl.rating} <br/> &#8377 ${cavl.ticketPrice}</p>
                            <a href=${cavl.link} class="btn btn-primary" target="_blank">WATCH NOW</a>
                            </div>
                        </div>
                    </div>
    `

})