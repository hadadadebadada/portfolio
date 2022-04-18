import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'
import TorusTunnel from './JavaScriptSub/TorusTunnel'
import { Title, TagLine, Div2, Div3 } from './DivAndTextStyles'

function JavaScript() {
    return (

        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90%',
            width: '100%'
          }}
            >
                <Div2>
                <a href="https://github.com/hadadadebadada/DeskSharingApp/tree/master/DeskSharingFrontend">Hier finden Sie das Repositorium zum DeskSharingApp Frontend mit React</a>

                <TagLine>Das Frontend der DesksharingApp ist nach folgender Struktur aufgebaut:</TagLine>
                <img alt="kundemanagement" className="scaledPic" src="images/js/frontendarchitecture.png"></img>
                <TagLine>Auf der Landingpage hat man die Auswahl zwischen verschiedenen Sprachen, die Möglichkeit zum Login und eine ansprechende Animation</TagLine>
                <img alt="kundemanagement" className="scaledPic" src="images/js/home.png"></img>
                <TagLine>Will man nun einen Platz buchen erscheint der Grundriss eines Gebäudes und die geblockten Arbeitsplätze. Mit einem Klick auf den grünen freien Platz kann man nun buchen. </TagLine>
                <img alt="kundemanagement" className="scaledPic" src="images/js/DKBUERO.png"></img>
                <TagLine>Ist der Platz gebucht, hat man bei seinen eigenen Buchungen einen Überblick über diese und die Möglichkeit seinen Arbeitsplatz frühzeitig zu verlassen</TagLine>
                <img alt="kundemanagement" className="scaledPic" src="images/js/bookings.png"></img>

          

<TagLine>Weitere Beispiele finden Sie auf Github:</TagLine>
<a href="https://github.com/hadadadebadada/threejs">Eine kleine ThreeJs Animation</a>
<a href="https://github.com/hadadadebadada/miningcontractwebsite">Website zum Anbieten von Cryptomining Verträgen</a>
<h1>         <a href="https://github.com/hadadadebadada/Portfolio">Diese Website habe ich mit React programmiert. Schauen Sie sich gerne das Repositorium dieser Seite auf GitHub an</a></h1>

  
                <TorusTunnel></TorusTunnel>

                </Div2>



                    
        
         

        </div>
    )
}

export default JavaScript
