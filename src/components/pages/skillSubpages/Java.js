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
        <Title>Kunden- und Kreditmanagement nach dem MVC-Konzept mit JavaFX GUI über Zugriff auf eine SQL-Datenbank</Title>
        <TagLine>Zunächst erscheint ein Auswahlmenü</TagLine>
        <img alt="" className="scaledPic"src='images/javakkmanagement/hauptmenue.png' />
        <Div3><br></br></Div3>

        <TagLine>Ein Kunde wird in der Datanbank angelegt</TagLine>
        <img alt="" className="scaledPic"src='images/javakkmanagement/kundenAnlegen.png' />
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
        <TagLine>Anlegen eines Kredites</TagLine>
        <img alt="" className="scaledPic"src='images/javakkmanagement/konsumentenkreditAnlegen.png' />
        <Div3><br></br></Div3>

        <h1><a href="https://github.com/hadadadebadada/customercreditmanagement">Schauen Sie sich gerne das Repositorium zum Code dieser Anwendung auf GitHub an</a></h1>

      </Div2>
    </div>
  )
}

export default Java
