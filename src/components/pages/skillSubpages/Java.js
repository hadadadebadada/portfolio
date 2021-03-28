import React from 'react'

import { Title, TagLine, Div1, Div2, Div3 } from './DivAndTextStyles'


function Java() {
  return (
    <Div1>
      <Div2>
        <Title>Kunden- und Kreditmanagement nach dem MVC-Konzept mit JavaFX GUI über Zugriff auf eine SQL-Datenbank</Title>
        <TagLine>Zunächst erscheint ein Auswahlmenü</TagLine>
        <img src='images/javakkmanagement/hauptmenue.png' />
        <Div3><br></br></Div3>

        <TagLine>Ein Kunde wird in der Datanbank angelegt</TagLine>
        <img src='images/javakkmanagement/kundenAnlegen.png' />
        <Div3><br></br></Div3>
        <TagLine>Über den Button Kundenliste erscheint eine Liste aller Kunden mit der Möglichkeit bestehende Kundendaten zu verändern</TagLine>
        <img src='images/javakkmanagement/kundenManagement.png' />
        <Div3><br></br></Div3>
        <TagLine>Jedem Kunden können meherere Konsumenten- und/oder Immobilienkredite zuordnet und angezeigt werden</TagLine>
        <img src='images/javakkmanagement/kreditvertragManagement.png' />
        <Div3><br></br></Div3>
        <TagLine>Über ein DropDown-Menü kann ein anderer Kunde ausgewählt werden</TagLine>
        <img src='images/javakkmanagement/dropdown.png' />
        <Div3><br></br></Div3>
        <TagLine>Anlegen eines Kredites</TagLine>
        <img src='images/javakkmanagement/konsumentenkreditAnlegen.png' />
        <Div3><br></br></Div3>

        <h1><a href="https://github.com/hadadadebadada/customercreditmanagement">Schauen Sie sich gerne das Repositorium zum Code dieser Anwendung auf GitHub an</a></h1>

      </Div2>
    </Div1>
  )
}

export default Java
