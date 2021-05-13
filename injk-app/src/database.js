const mongoose=require('mongoose');

const MONGODB_URI=process.env.MONGODB_URI;

var options = {
    useNewUrlParser:true,
    //native_parser: true,
    useUnifiedTopology: true,
    //Unified topology hace que no sea necesario el autorecconect, reconnecttires, y el reconnect invervals
    //auto_reconnect: false,
    poolSize: 10,
    connectWithNoPrimary: true,
    sslValidate: false,
    useCreateIndex: true
  };


  mongoose.connect(MONGODB_URI,options).then(
    ()=> {
      console.log("Mongoose Connected");
      mongoose.connection.db.listCollections().toArray(function(err, names){
        if(err) console.log(err)
        console.log(names);
      });
    },
    err => console.log('Mongoose Error: ${err}')
);