db.movies.insert({
    title:"Im Deutschland",
    poster:"path",
    release_year: ISODate('1990-11-24'),
    duration:90,
    genres:[
       db.genres.findOne({"name":"Comedy"})._id,
    ],
    actors:[db.actors.findOne({"name":"Shoney A"})._id],   
    ratting:4,
    revenue:NumberDecimal(100.50),
    productionhouse_id:db.productionhouse.findOne({"title":"ABC corp"})._id
})

