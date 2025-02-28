# Squad Page Team Spirit


We hebben een website voor ozne squad ontworpen en gemaakt met NodeJS en de WHOIS API en deze live gezet met render. 
link site (https://connect-your-tribe-team-squad-page-kb0l.onrender.com/)

De website bestaat uit twee responsive webpagina:

<p>Squadpage</p>
<img width="450" alt="Scherm­afbeelding 2025-02-28 om 10 06 03" src="https://github.com/user-attachments/assets/a6517c3f-3271-4dfe-9d98-973a4e6d1bfb" />
<p>de squadpage bestaat uit alle twee de squad die gesorteerd zijn op team hierin zie je de verschillende studenten.</p>

<p>detailpage</p>
<img width="446" alt="Scherm­afbeelding 2025-02-28 om 10 06 30" src="https://github.com/user-attachments/assets/0bfc97ad-6fac-4476-b74f-cc7e602e5f4d" />
<p>de detailpage kun je inzoomen op een student hier kom je door te klikken op de naam of foto van de student.</p>

### Beschrijving


sebas - We hebben gebruik gemaakt van een voor loop die op basis van ons huidige filter op de route een voor 1 alle personen uit de WHOIS API ophaalt en weergeeft:

https://github.com/Sebastiaan-hva/connect-your-tribe-team-squad-page/blob/f3724843a8fb7bca90acff4cbac3a88e26c6cb19/views/index.liquid#L6-L19

detailpagina
https://github.com/Sebastiaan-hva/connect-your-tribe-team-squad-page/blob/e9d1e551fd5ae786ded7be2551b84d139a2fa6a5/server.js#L33-L48
ik had specifieke data nodig uit de link met iedereen zijn naam, hiervoor heb ik request.params.id gebruikt om te zorgen dat ik steeds bij elk persoon de date ophaal van dat id.




## Responsive design(mobile first)
Ik heb een min media toegevoegd aan die Ul list om die gebriuker krijg op mobile alleen een kaart te zien en op tablet 2 kaarten en op desktop 3 kaarten.

![mobile-first](https://github.com/user-attachments/assets/1af374b9-77e6-4f72-afcd-1e03572c87e4)

https://github.com/Sebastiaan-hva/connect-your-tribe-team-squad-page/blob/145e6478b62f631d3b6d7eb4878b63ed387898f4/public/styles/style.css#L29-L47

## interactie 
Hier te zien the website interactie en hoe kunt die gebruiker in ons website navigeren
![user-story](https://github.com/user-attachments/assets/49f3837f-8493-4c7a-8d69-d8bd6284528f)
![user-story2](https://github.com/user-attachments/assets/04e7d95d-f98e-4f75-af45-5229256360d4)

## Kenmerken
Ik heb op bijna elke line wel comments toegevoegd dus het lijkt me handiger om de hele server.js file te bekijken maar hier zijn de belangrijkste dingen.

https://github.com/Sebastiaan-hva/connect-your-tribe-team-squad-page/blob/fb89018ad72d3d3882ccc298f0a3c539d2f364ec/server.js#L1-L5

https://github.com/Sebastiaan-hva/connect-your-tribe-team-squad-page/blob/fb89018ad72d3d3882ccc298f0a3c539d2f364ec/server.js#L8-L17

https://github.com/Sebastiaan-hva/connect-your-tribe-team-squad-page/blob/fb89018ad72d3d3882ccc298f0a3c539d2f364ec/server.js#L53-L61

https://github.com/Sebastiaan-hva/connect-your-tribe-team-squad-page/blob/fb89018ad72d3d3882ccc298f0a3c539d2f364ec/server.js#L65-L83

## Installatie

Dit is een NodeJS project dat gebruik maakt van Express (5.0.1) en Liquidjs (10.21.0).

Om verder te werken aan deze repository moet je de repository forken en clonen via Github. 
Je moet nodejs geinstalleerd hebben op je device. (https://nodejs.org/en) (ik heb versie v22.14.0 gebruikt)
Nadat je de repository gecloned hebt open je de folder met een code IDE zoals Visual studio code. 
binnenin de IDE open je de terminal en run je de volgende commands.
Run eerst npm install in de Terminal om de juiste packages te installeren. 
Run npm start om de code te laten runnen.
Hierna draait de site lokaal op http://localhost:8000.

