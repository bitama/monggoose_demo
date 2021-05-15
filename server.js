// const express = require("express");
// const app = express();
// const port = 8000;

// require("./server/config/mongoose.config")

// app.use(express.json()), express.urlencoded({ extended: true })

// require("./server/routes/rock.route")(app)

// app.listen(port, ()=>console.log(`Listening on on ${port}!!!!!! is  new way I like to be`))
const express = require("express");
const app = express();
const port = 8000;
    
require("./server/config/mongoose.config");
    
app.use(express.json(), express.urlencoded({extended:true}));
    
require("./server/routes/rock.routes")(app)

    
app.listen(port, () => console.log("The server is all fired up on port 8000"));
