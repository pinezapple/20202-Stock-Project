module.exports = function(){
    var faker = require("faker")
    var _ = require("lodash")
    
    return {
// nhập stock input
       stockInput: _.times(60, function(n){
        return {
           id:n,
           from: faker.date.recent(),
           to: faker.date.recent(),
           name :faker.lorem.word()
        }
       }),
// stock price
       stockPredicted: _.times(60, function(n){
           return {
               id: n,
               from: faker.date.recent(),
               to: faker.date.recent(),
               name: faker.lorem.word(),
               predictedPrice : faker.commerce.price(),
               actualPrice: faker.commerce.price(),
            //    days : faker.date.between(from,to)
           }
       }),

    }     
}