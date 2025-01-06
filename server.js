const express = require('express');
const app = express();
const db=  require('./models')
const patientRoutes= require('./routes/patientRoutes')
const medecinRoutes= require('./routes/medecinRoutes')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/', patientRoutes)
app.use('/', medecinRoutes)

const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})


