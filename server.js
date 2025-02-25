import express from 'express'

import { Liquid } from 'liquidjs';


// ons team
const teamName = 'spirit';


const app = express()

app.use(express.static('public'))

const engine = new Liquid();
app.engine('liquid', engine.express()); 

app.set('views', './views')

app.use(express.urlencoded({extended: true}))


app.get('/', async function (request, response) {
  const messagesResponse = await fetch(`https://fdnd.directus.app/items/messages/?filter={"for":"Team ${teamName}"}`)
  const messagesResponseJSON = await messagesResponse.json()

  response.render('index.liquid', {
    teamName: teamName,
    messages: messagesResponseJSON.data
  })
})

app.get('/student:id', async function (request, response) {

  const personDetailResponse = await fetch('https://fdnd.directus.app/items/person/' + request.params.id);
  
  const personDetailResponseJSON = await personDetailResponse.json();

  response.render('detail.liquid', {person: personDetailResponseJSON.data, squads: squadResponseJSON.data});
});

// maak een get route voor een detailpagina met een route parameter en een id
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

  response.redirect(303, '/')
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