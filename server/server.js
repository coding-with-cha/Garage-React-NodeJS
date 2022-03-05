const express = require('express')
const path = require('path')

const bodyparser = require('body-parser')

const stripe = require('stripe')("sk_test_51KWdWiFco45YlSX6VrPUWlEv1WKht1uRVXqsOlgf3AyZ3mcsHAwze12DTpvU6OoSBSCTSjAE18L2IFAamYcTK6yI003P4MQqlQ")

const uuid = require("uuid").v4;



const app = express()
require('dotenv').config()
// database config
const connectDB = require('./config/connectDB')
connectDB()
// settings
app.use(express.json());
const cors = require('cors');
app.use(cors('http://localhost:3000'))
// routes
app.use('/api/person', require('./routes/personRoute'))
app.use('/api/post', require('./routes/postRoute'))
app.use('/api/commande', require('./routes/commandeRoute'))


//images path
app.use('/uploads', express.static(path.join(__dirname,'../','client','build','media')))



//
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
//
app.use(express.static(path.join(__dirname,'../','client','build')))
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'../','client','build','index.html'))
})

app.get("/", (req, res) => {
    res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
  });
  
  app.post("/checkout", async (req, res) => {
    console.log("Request:", req.body);
  
    let error;
    let status;
    try {
      const { product, token } = req.body;
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id,
      });
  
      const idempotency_key = uuid();
      const charge = await stripe.charges.create(
        {
          amount: product.price * 100,
          currency: "eur",
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchased the ${product.name}`,
          shipping: {
            name: token.card.name,
            address: {
              line1: token.card.address_line1,
              line2: token.card.address_line2,
              city: token.card.address_city,
              country: token.card.address_country,
              postal_code: token.card.address_zip,
            },
        },
      },
      {
        idempotency_key,
      }
    );
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});




// config server
app.listen(process.env.PORT,(err)=> 
err 
? console.log(err)
: console.log(`server is running on localhost:${process.env.PORT}`));