// express is een webframework voor Node.js waarmee je routes en servers kunt maken
import express from 'express'

// liquid is een "template engine" waarmee je HTML pagina's dynamisch kan genereren.
import { Liquid } from 'liquidjs';


// Haal alle eerstejaars squads uit de WHOIS API op van dit jaar (2024–2025)
const squadResponse = await fetch('https://fdnd.directus.app/items/squad?filter={"_and":[{"cohort":"2425"},{"tribe":{"name":"FDND Jaar 1"}}]}')

// Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
const squadResponseJSON = await squadResponse.json()
// ons team dit wordt later gebruikt om de berichten te filteren op het team
const teamName = 'spirit';

// maakt een nieuwe express app aan
const app = express()

// dit is de path waarvaan de browser moet zoeken naar de css & assets
app.use(express.static('public'))

// hier wordt liquidjs ingesteld als template-engine voor de HTML rendering.
const engine = new Liquid();
app.engine('liquid', engine.express()); 

// Hier staan de liquid bestanden
app.set('views', './views')

// dit zorgt ervoor dat Express de inkomende form data kan verwerken.
app.use(express.urlencoded({extended: true}))

// maak een get route voor een detailpagina met een route parameter en een id
app.get('/detail/:id', async function (request, response) {
  const messagesResponse = await fetch(`https://fdnd.directus.app/items/messages/?filter={"for":"Team ${teamName}"}`)

  // dit haalt de ID op uit de URL en zoekt de persoon uit de WHOIS API
  const personResponse = await fetch('https://fdnd.directus.app/items/person/'+request.params.id)

  const messagesResponseJSON = await messagesResponse.json()
  const personResponseJSON = await personResponse.json()
  
// de data wordt na deze pagina gestuurd als die gerendert wordt
  response.render('detail.liquid', {
    teamName: teamName,
    messages: messagesResponseJSON.data,
    person: personResponseJSON.data
  })
})




// maakt een route aan voor de index pagina die iedereen uit jaar 2425 ophaalt en sorteerd op teamname
app.get('/', async function (request, response) {
  const personResponse = await fetch('https://fdnd.directus.app/items/person/?sort=team&fields=*,squads.squad_id.name,squads.squad_id.cohort&filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 1"}}}},{"squads":{"squad_id":{"cohort":"2425"}}}]}')

  const personResponseJSON = await personResponse.json()

  // lijst wordt naar index gestuurd en wordt gegenereerd.
  response.render('index.liquid', {persons: personResponseJSON.data, squads: squadResponseJSON.data})
})



// wordt aangeroepen wanneer iemand een bericht instuurt via een formulier
// bericht wordt als JSON naar API gestuurd
// in dit geval voor ons team wat we eerder gedefineerd hadden
// hij geeft de gegevens mee van wie het bericht stuurt en wat het bericht is
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

// poort nummer instellen
app.set('port', process.env.PORT || 8000)


if (teamName == '') {
  console.log('Voeg eerst de naam van jullie team in de code toe.')
} else {

  app.listen(app.get('port'), function () {
    // toon bericht in console en geef het portnummer mee
    console.log(`Application started on http://localhost:${app.get('port')}`)
  })
}
// like button
app.get('/', async function (request, response) {
  const personResponse = await fetch('https://fdnd.directus.app/items/person/?sort=team');
  const personResponseJSON = await personResponse.json();

  const likesResponse = await fetch('https://fdnd.directus.app/items/messages/');
  const likesJSON = await likesResponse.json();

  let likedPersons = {};
  likesJSON.data.forEach(like => {
      const personId = like.for.split(" / ")[1].split(" ")[1]; 
      likedPersons[personId] = true;
  });

  response.render('index.liquid', {
      persons: personResponseJSON.data,
      likedPersons: likedPersons 
  });
});
