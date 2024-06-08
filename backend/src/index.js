import app from "./app.js"
import { getConnection } from "./database/connection.js";

const port = 4000;

app.set('port', 4000)

app.listen(app.get('port'),() =>{
  console.log(`Listening on port: ${port}`)
 getConnection()
})