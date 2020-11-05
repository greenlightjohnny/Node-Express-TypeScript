import express from "express"
import * as bookController from "./controllers/bookController"

const app = express()
app.set("port", 3000)

app.get("/books", bookController.allBooks)
app.get("/book:/id", bookController.getBook)
app.put("/book", bookController.addBook)
app.delete("/book/:id", bookController.deleteBook)
app.post("/book/:id", bookController.updateBook)

app.listen(app.get("port"), () => {
  console.log("App is up and running!", app.get("port"))
})
