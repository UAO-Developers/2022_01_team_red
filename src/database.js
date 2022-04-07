const mongoose = require('mongoose')

const {NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE, MONGODB_URI}= process.env;

mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
})

    .then(db => console.log('databasCe us connected'))
    .catch(err => console.log(err));