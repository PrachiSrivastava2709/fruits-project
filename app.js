import mongoose from 'mongoose';
const url = 'mongodb://127.0.0.1:27017/fruitsDB';

// establishing connection
await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
// With Mongoose, everything is derived from a Schema. Each schema maps to a MongoDB collection 
// and defines the shape of the documents within that collection.
const fruitsSchema = new mongoose.Schema({  
                                            name: {
                                                type: String,
                                                required: [true, "Please check your data entry, no name specified!"]
                                            },
                                            rating: {
                                                type: Number,
                                                min: 1,
                                                max: 10
                                            },
                                            review: String
                                        });
// The next step is compiling our schema into a Model.
const Fruit = mongoose.model('Fruit', fruitsSchema);
await Fruit.deleteOne({_id: "651a78bdc14dd0f74a2bd60f"});
await Fruit.deleteOne({_id: "6519b54ec635d37d96895fbf"});
const fruits = await Fruit.find({});
fruits.forEach((fruit) => {
    console.log(fruit.name);
});

mongoose.connection.close()



// Adding Documents in collections
// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 10,
//     review: "Best fruit ever"
// });
// const orange = new Fruit({
//     name: "Orange",
//     rating: 8,
//     review: "I like it"
// });
// const banana = new Fruit({
//     name: "Banana",
//     rating: 9,
//     review: "I hate it, but my Nanu loves it!"
// });
// Fruit.insertMany([kiwi, orange, banana]);


// async function main(){
//     await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
//     const peopleSchema = new mongoose.Schema({
//         name: String,
//         age: Number
//     });

//     const People = new mongoose.model('People', peopleSchema);

//     const person = new People({
//         name: 'John',
//         age: 37
//     });
//     person.save();
//     console.log(person);
// }