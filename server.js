const express = require('express');
const app = express();
const db=  require('./models')
const patientRoutes= require('./routes/patientRoutes')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/', patientRoutes)

const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})


