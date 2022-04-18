import React from 'react'
import { Title, TagLine, Div2 } from './DivAndTextStyles'

import './imageStyle.css'
function Android() {
  return (
    

    <div
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      display:'flex'
    }}
  >


      <Div2>

        <Title>Digitale Vertragsabwicklung für EWE- und OsnaTel-Produkte </Title>
        <TagLine>Im Rahmen meiner Tätigkeit als Handelsvertreter programmierte ich eine digitale Vertragsabwicklung
        für die D&G Direktvertrieb GmbH. Das Hauptmenue zeigt die Auswahl verschiedener Verträge, welche in der App bearbeitet werden können.
        Über den Button EWE bzw. Osnatel öffnet sich das Hauptformular mit dem der Vertriebler dem Kunden ein OsnaTel bzw. EWE Produkt verkaufen kann. Optional kann der Kunde ein SEPA-Lastschrift-, einen Anbieterwechsel- oder ein Hausanschlussformular ausfüllen.
          </TagLine>
        <img alt="" className="scaledPic"src='images/digitalpaper/hauptmenue.png' />
        <TagLine> Es erscheinen 2 ScrollViews, welche horizontal gegenüber liegen, um dem Kunden einen
        besseren Überblick über das gesammte Formular zu gewährleisten. Ebenso wird zur reachtlichen Absicherung
        der Standort über ein GPS-Signal auf dem Formular gespeichert. Im zweiten und dritten Formular ist jeweils eine digitale Unterschrift notwendig.
        </TagLine>
        <img alt="" className="scaledPic"src='images/digitalpaper/auftrag1.png' />

        <img alt="" className="scaledPic"src='images/digitalpaper/auftrag12.png' />

        <img alt="" className="scaledPic"src='images/digitalpaper/auftrag2.png' />
        <img alt="" className="scaledPic"src='images/digitalpaper/auftrag22.png' />
        <img alt="" className="scaledPic"src='images/digitalpaper/auftrag3.png' />

        <TagLine>
          Aus technischer Sicht wird vorerst auf ein leeres Formular, welches im lokalen Speicher des Tablets liegt, zugegeriffen und in ein BitMap konvertiert.
          Dieses BitMap wird nun mit den ausgewählten Texteingaben verändert und schließlich wieder in eine PDF umgewandelt.
          So ist es leicht möglich bei Änderung der Verträge mit nur leichten Anpassungen die Funktionalität der App zu gewährleisten.
          Nach der Bearbeitung der Formulare erhält man folgende PDF Dateien.
        </TagLine>
        <img alt="" className="scaledPic"src='images/digitalpaper/pdf1.png' />
        <img alt="" className="scaledPic"src='images/digitalpaper/pdf2.png' />
        <img alt="" className="scaledPic"src='images/digitalpaper/pdf3.png' />

        <TagLine>
          Diese können nun über den Punkt "Senden an:" im Hauptmenü versendet werden.
          Zur Absicherung von Datenschutzrichlinien werden nach Versendung werden alle PDF's gelöscht.

        </TagLine>
        <br></br>
        <br></br>
        <h1>


          <a href="https://github.com/hadadadebadada/DigitalAndroidPaper"> Hier finden Sie den Code zur beschriebenen Applikation</a>
        </h1>
      </Div2>
   </div>

  )
}

export default Android
