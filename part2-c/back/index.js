const express = require("express")
const app = express()

app.use(express.json())

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    {
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]


function generateId(max=10000){
  return Math.floor(Math.random() * max)
}


app.get("/api/persons", (request, response) => {
	response.json(persons)
})

app.get("/info/", (request, response) => {
	response.send(`<h1> There are currently ${persons.length} numbers stored in the phonebook. <h1/>\n
                 <h3> Current date: ${Date()} <h3/>`
                )
})

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(p => p.id === id)
  response.json(person)
})

app.delete("/api/persons/:id", (request, response) =>{
  const id = Number(request.params.id)
  persons = persons.filter(p => p.id !== id)
  response.status(204).end()
})

app.post("/api/persons", (request, response) => {
  const newId = generateId()
  const body = request.body
  if ((!body.name) || (!body.number)){
    return response.status(400).json({
      error: "Couldn't find name or number of new entry."
    })
  }

  if (persons.find(p => p.name === body.name)){
    return response.status(400).json({
      error: "The user already exists in the database."
    })
  }
  
  const person = {
    id: newId,
    name: body.name.toString(),
    number: body.number.toString()
  }

  persons = persons.concat(person)
  response.status(204).end()
})


const PORT = 3001
app.listen(PORT)

console.log("Launching the server...")
