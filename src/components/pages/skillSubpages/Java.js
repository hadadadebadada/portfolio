import React from 'react'

import { Title, TagLine, Div2, Div3 } from './DivAndTextStyles'
import './imageStyle.css'

function Java() {
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
        <Title>Desksharing App mit JWT-Login und Spring Boot Rest</Title>


    <h3> <a href="http://desksharingapp.surge.sh/">Frontend zum Rest Service</a></h3>
    <h3><a href="https://github.com/hadadadebadada/DeskSharingApp/tree/master/DeskSharingSpringBackend">Repositorium zum Spring Boot Rest Service</a> </h3>



        <TagLine>Die Applikation ist in Datenbank, Backend mit Spring Boot und Frontend mit React gekapselt, wie folgendes Diagramm zeigt: </TagLine>


        <img alt="kundemanagement" className="scaledPic" src="images/javakkmanagement/desksharing/SWDesign.png"></img>


        <TagLine>Der RestService wurde in einer typischen 3 Schichten Architektur aufgebaut</TagLine>

        <img alt="kundemanagement" className="scaledPic" src="images/javakkmanagement/desksharing/RestArchitecture.png"></img>


        <TagLine>Die Sicherheit wird mit Hilfe von JSON Web Tokens gewährleistet.</TagLine>


        <img alt="kundemanagement" className="scaledPic" src="images/javakkmanagement/desksharing/SecurityArchitecture.png"></img>




        <Title>Kunden- und Kreditmanagement nach dem MVC-Konzept mit JavaFX GUI über Zugriff auf eine SQL-Datenbank</Title>
        <TagLine>Zunächst erscheint ein Auswahlmenü</TagLine>
        <Div3><br></br></Div3>

        <TagLine>Ein Kunde wird in der Datanbank angelegt</TagLine>
        <Div3><br></br></Div3>
        <TagLine>Über den Button Kundenliste erscheint eine Liste aller Kunden mit der Möglichkeit bestehende Kundendaten zu verändern</TagLine>
        
        <img alt="kundemanagement" className="scaledPic" src="images/javakkmanagement/kundenManagement.png"></img>

        {/* <img alt="" src='images/javakkmanagement/kundenManagement.png' /> */}
        <Div3><br></br></Div3>
        <TagLine>Jedem Kunden können meherere Konsumenten- und/oder Immobilienkredite zuordnet und angezeigt werden</TagLine>
        <img alt="" className="scaledPic" src='images/javakkmanagement/kreditvertragManagement.png' />
        <Div3><br></br></Div3>
        <TagLine>Über ein DropDown-Menü kann ein anderer Kunde ausgewählt werden</TagLine>
        <img alt="" className="scaledPic"src='images/javakkmanagement/dropdown.png' />
        <Div3><br></br></Div3>


        <h3><a href="https://github.com/hadadadebadada/customercreditmanagement">Schauen Sie sich gerne das Repositorium zum Code dieser Anwendung auf GitHub an</a></h3>
      </Div2>
    </div>
  )
}

export default Java
