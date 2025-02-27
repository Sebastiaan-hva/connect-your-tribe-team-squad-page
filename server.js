import express from 'express'

import { Liquid } from 'liquidjs';


// Haal alle eerstejaars squads uit de WHOIS API op van dit jaar (2024–2025)
const squadResponse = await fetch('https://fdnd.directus.app/items/squad?filter={"_and":[{"cohort":"2425"},{"tribe":{"name":"FDND Jaar 1"}}]}')

// Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
const squadResponseJSON = await squadResponse.json()
// ons team
const teamName = 'spirit';


const app = express()

app.use(express.static('public'))

const engine = new Liquid();
app.engine('liquid', engine.express()); 

app.set('views', './views')

app.use(express.urlencoded({extended: true}))


app.get('/detail/:id', async function (request, response) {
  const messagesResponse = await fetch(`https://fdnd.directus.app/items/messages/?filter={"for":"Team ${teamName}"}`)
  const messagesResponseJSON = await messagesResponse.json()

  response.render('detail.liquid', {
    teamName: teamName,
    messages: messagesResponseJSON.data
  })
})




// maak een get route voor een detailpagina met een route parameter en een id
app.get('/', async function (request, response) {
  const personResponse = await fetch('https://fdnd.directus.app/items/person/?sort=team&fields=*,squads.squad_id.name,squads.squad_id.cohort&filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 1"}}}},{"squads":{"squad_id":{"cohort":"2425"}}}]}')

  const personResponseJSON = await personResponse.json()

  response.render('index.liquid', {persons: personResponseJSON.data, squads: squadResponseJSON.data})
})

// route voor alle eerstejaars uit de WHOISAPI
// 'https://fdnd.directus.app/items/squad?filter={"_and":[{"cohort":"2425"},{"tribe":{"name":"FDND Jaar 1"}}]}' 

app.post('/', async function (request, response) {
  await fetch('https://fdnd.directus.app/items/messages/', {
    method: 'POST',
    body: JSON.stringify({
      for: `Team ${teamName}`,
      from: request.body.from,
      text: request.body.text
    }),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });

  response.redirect(303, '/detail/:id')
})

// poort nummer 
app.set('port', process.env.PORT || 8000)


if (teamName == '') {
  console.log('Voeg eerst de naam van jullie team in de code toe.')
} else {

  app.listen(app.get('port'), function () {
    // toon bericht in console en geef het portnummer mee
    console.log(`Application started on http://localhost:${app.get('port')}`)
  })
}
app.post('/person/:id/like', async function (request, response) {
  const personId = request.params.id; 
  await fetch('https://fdnd.directus.app/items/messages/', {
    method: 'POST',
    body: JSON.stringify({
      for: `Team ${teamName} / Person ${personId} / Like`,
      from: '',
      text: ''
    }),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });

  response.redirect(303, `/person/$${personId}`)
})

app.post('/person/:id/unlike', async function (request, response) {

  const likesForPersonResponse = await fetch(`https://fdnd.directus.app/items/messages/?filter={"for":"Team ${teamName} / Person ${request.params.id} / Like"}`)
  const likesForPersonResponseJSON = await likesForPersonResponse.json()
  const likesForPersonResponseID = likesForPersonResponseJSON.data[0].id

  await fetch(`https://fdnd.directus.app/items/messages/${likesForPersonResponseID}`, {
    method: 'DELETE'
  });

  response.redirect(303, `/person/$${personId}`)
})

