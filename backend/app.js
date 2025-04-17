// === dependencies ===
import express from 'express'
import "dotenv/config"


// === routes ===
import homePage from "./routes/home.js"
import userRoutes from "./routes/admin.js"

const app = express()
const port = process.env.PORT

app.use(homePage)
app.use('/admin',userRoutes)

app.listen(port,()=>{
    console.log(`Server is running on -http://localhost:${port}`)
})