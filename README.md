# Squad Page Team Spirit

We hebben een website voor ozne squad ontworpen en gemaakt met NodeJS en de WHOIS API en deze live gezet met render. 
link site (https://connect-your-tribe-team-squad-page-kb0l.onrender.com/)

## Beschrijving

(video / foto) toevoegen

sebas - We hebben gebruik gemaakt van een voor loop die op basis van ons huidige filter op de route een voor 1 alle personen uit de WHOIS API ophaalt en weergeeft:

https://github.com/Sebastiaan-hva/connect-your-tribe-team-squad-page/blob/f3724843a8fb7bca90acff4cbac3a88e26c6cb19/views/index.liquid#L6-L19

anouar - detail uitleggen

nayome - design keuzes uitleggen

yamen - responsiveness beschrijven en interactie uitleggen- Ik heb die website responsive gemaakt voor ik heb de design als een mobile first. ik heb ook die like button proberen te maken en ook een animatie aan die like button toe gevoeg.

## Kenmerken
Ik heb op bijna elke line wel comments toegevoegd dus het lijkt me handiger om de hele server.js file te bekijken maar hier zijn de belangrijkste dingen.

https://github.com/Sebastiaan-hva/connect-your-tribe-team-squad-page/blob/fb89018ad72d3d3882ccc298f0a3c539d2f364ec/server.js#L1-L5

https://github.com/Sebastiaan-hva/connect-your-tribe-team-squad-page/blob/fb89018ad72d3d3882ccc298f0a3c539d2f364ec/server.js#L8-L17

https://github.com/Sebastiaan-hva/connect-your-tribe-team-squad-page/blob/fb89018ad72d3d3882ccc298f0a3c539d2f364ec/server.js#L53-L61

https://github.com/Sebastiaan-hva/connect-your-tribe-team-squad-page/blob/fb89018ad72d3d3882ccc298f0a3c539d2f364ec/server.js#L65-L83

## Responsive design(mobile first)
Ik heb een min media toegevoegd aan die Ul list om die gebriuker krijg op mobile alleen een kaart te zien en op tablet 2 kaarten en op desktop 3 kaarten.
https://github.com/Sebastiaan-hva/connect-your-tribe-team-squad-page/blob/145e6478b62f631d3b6d7eb4878b63ed387898f4/public/styles/style.css#L29-L47

##f


## Installatie

Dit is een NodeJS project dat gebruik maakt van Express (5.0.1) en Liquidjs (10.21.0).

Om verder te werken aan deze repository moet je de repository forken en clonen via Github. 
Je moet nodejs geinstalleerd hebben op je device. (https://nodejs.org/en) (ik heb versie v22.14.0 gebruikt)
Nadat je de repository gecloned hebt open je de folder met een code IDE zoals Visual studio code. 
binnenin de IDE open je de terminal en run je de volgende commands.
Run eerst npm install in de Terminal om de juiste packages te installeren. 
Run npm start om de code te laten runnen.
Hierna draait de site lokaal op http://localhost:8000.

