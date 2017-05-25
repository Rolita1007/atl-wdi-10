// var mongoose = require('mongoose');
// var Schema = require('./schema.js');
Email Providers
  -providers
  -email

Views
  -name
  -date
  -sender
  -message

var provider = {
  name: String,
  email: String,
}

var views = {
  name: String,
  date: Number,
  sender: String,
  message: String,
}

var exampleEmail = {
  provider: "Google",
  email: "beach_locations@gmail.com",
  views: [{
    name: "Lorenzo",
    date: 3/12/17,
    sender: "Mama Dukes",
    message: "Do the dishes",
  }],
}

var exampleViews = {
  name: "Lorenzo",
  date: 3/12/17,
  sender: "Mama Dukes",
  message: "Do the dishes",
  provider: [{
    provider: "Google",
    email: "beach_locations@gmail.com",
  }],
}

Popularity:
  -name
  -artist
  -title

Genre:
  -male
  -female

var popularity ={
  station: Number,
  artist: String,
  title: String,
}

var genre ={
  male: String,
  female: String,
}

var examplePopularity = {
  station: 103.3,
  artist: "Monica",
  title: "Still Standing"
  genre: [{
    female: "Missy",
    male: "Biggie",
  }],
}

var exampleGenre ={
  female: "Missy",
   male: "Biggie",
   popularity: [{
    station: 103.3,
    artist: "Monica",
    title: "Still Standing"
   }],
}

Tours:
  -name
  -date
  -time
  -price

Next Tours:
  -name
  -date
  -time
  -price

var tour = {
  name: String,
  date: Number,
  time: Number,
  price: Number,
}

var nextTour = {
  name: String,
  date: Number,
  time: Number,
  price: Number,
}

var exampleTour = {
  name: "Drake",
  date: 10/12/17,
  time: 7:00,
  price: $85.00,
  nexttour: [{
    name: "Drake",
    date: 12/25/17,
    time: 6:00,
    price: $105.00,
  }],
}

var exampleNextTour = {
  name: "Drake",
  date: 12/25/17,
  time: 6:00,
  price: $105.00,
  tour: [{
    name: "Drake",
    date: 10/12/17,
    time: 7:00,
    price: $85.00,
  }],
}

coffeeshops:
  -name
  -location
  -distance
  -hours

shop:
  -name
  -location
  -menu
  -price

shopping cart:
  -name
  -price
  -date

var coffeeshops = {
  name: String,
  location: String,
  distance: Number,
  hours: Number,
}

var shops = {
  name: String,
  location: String,
  menu: String,
  price: Number,
}

var shoppingCart ={
  name: String,
  price: Number,
  date: Number,
}

var exampleCoffeeShops ={
  name: "Home made coffee",
  location: "435 Liberty Street",
  distance: "1 mile",
  hours: 6-10,
  shops: [{
    name: "Starbucks",
    location: "879 Mall of GA"
    menu: "Hazel Nut Coffee",
    price: 8.00,
      shoppingCart: [{
        name: "Starbucks",
        price: 8.00,
        date: 5/12/17,
      }],
  }],
}

var exampleShops = {
  name: "Starbucks",
  location: "879 Mall of GA"
  menu: "Hazel Nut Coffee",
  price: 8.00,
  coffeeShops: [{
    name: "Home made coffee",
    location: "435 Liberty Street",
    distance: "1 mile",
    hours: 6-10,
      shoppingCart: [{
        name: "Starbucks",
        price: 8.00,
        date: 5/12/17,
      }],
  }],
}

var exampleShoppingCart = {
  name: "Starbucks",
    price: 8.00,
    date: 5/12/17,
    shops: [{
      name: "Starbucks",
      location: "879 Mall of GA"
      menu: "Hazel Nut Coffee",
      price: 8.00,
        coffeeShops: [{
          name: "Home made coffee",
          location: "435 Liberty Street",
          distance: "1 mile",
          hours: 6-10,
        }],
    }],
}


Team:
  -name
  -points
  -win
  -lose

Player:
  -name
  -id
  -team
  -points

var team = {
  name: String,
  points: Number,
  win: Number,
  lose: Number,
}

var player ={
  name: String;
  id: Number;
  team: String,
  points: Number,
}
var exampleTeam = {
  name: "Miami"
  points: 103.2,
  win: 45,
  lose: 6,
  player: [{
    name: "Dwyane Wade",
    id: 3,
    team: "Miami",
    points: 32.5,
  }]
}

var examplePlayer = {
  name: "Dwyane Wade",
  id: 3,
  team: "Miami",
  points: 32.5,
  team: [{
    name: "Miami",
    points: 103.2,
    win: 45,
    lose: 6,
  }]
}





