import React from 'react'

import { Title, TagLine, Div2, Div3 } from './DivAndTextStyles'


import './imageStyle.css'




function R() {




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
        <Title>Warenkorbanalyse</Title>
        <TagLine>Der Beispiel Datensatz enthält verschiedene Produkte, welche von Kunden in einem Supermarkt gekauft wurden. Um sich einen groben Überblick über die
        Daten erhalten empfielt sich die itemFrequecyPlot()-Methode.
        Die Abbildung zeigt die relative Verteilung der 10 häufigsten Daten aus dem Datensatz Groceries.
        Erstellt werden kann dieser Plot mit dem Befehl: itemFrequencyPlot(Groceries, topN=10)
    </TagLine>

        <img alt="" className="scaledPic"src='images/R/itemfrequency.png' width="800" height="500" />
        <Div3><br></br></Div3>
        <TagLine>Vor der Auswahl für die Konfidenz- und Supportwerte ist es sinnvoll zu sehen, wie viele Regeln
        absolut vorhanden sind und wie viele man für die jeweilige Auswertung in einem Graphen
        visualisieren will. Die Abbildung zeigt die Anzahl der erzeugten Regeln mit dem Apriori-Algorithmus angewendet auf den
        Datensatz Groceries mit verschiedenen Support- und Konfidenzwerten.
        Man sieht schnell, dass eine starke negative Korrelation zwischen der Anzahl der Regeln und dem
        Support-Wert existiert. Bei einem Supportwert von 0,05% hat man noch 150.000 Regeln</TagLine>
        <img alt="" className="scaledPic"src='images/R/aprioriLinien.png' width="800" height="500" />
        <TagLine>Nun gibt es dutzende Möglichkeiten konkrete Regeln zu visualisieren eine davon wäre ein Graph-based plot.Graph-based plots stellen Assoziationsregeln als Kreise, in verschiedenen Größen dar. Je nach Größe
        erkennt man den Support und je nach Farbintensität den Lift-Wert der jeweiligen Regel. Auf diese
        Kreise weisen Pfeile, welche von unterschiedlichen Items ausgehen und in einem Kreis
        zusammenkommen, welcher dann die Assoziationsregel bildet. Die eingehenden Pfeilspitzen stellen
        die LHS und die ausgehenden die RHS, der jeweiligen Regel dar.</TagLine>
        <img alt="" className="scaledPic"src='images/R/graph.png' width="800" height="600" />
        <TagLine>Weitere Visualisierungsmöglichkeiten und eine vollständige Beschreibung finden Sie hier:</TagLine>
        <h1><a href="https://drive.google.com/file/d/1lQUyRQ6WEwgmPZyzJVmhrDDBxue1bAyv/view?usp=sharing">Link zum vollständigen Paper</a></h1>
        <Div3><br></br></Div3>

        <Div3><br></br></Div3>
        <Div3><br></br></Div3>
        <Div3><br></br></Div3>

        <Title>linerare ,multiple ,polynomiale und logistische Regression</Title>
        <TagLine>Der erste Beispieldatensatz enthält daten zu 654 Kindern und deren Alter, Lungenkapazität, Größe und Geschlecht nach folgendem Schema:</TagLine>
        <img alt="" className="scaledPic"src='images/R/table.png' />
        <Div3><br></br></Div3>


        <TagLine>Vorerst wird mit dem Befehl "mod = lm(LungenKap~Groesse, data=lkdat)" ein lineares Modell erstellt.</TagLine>

        <TagLine>Dieses Modell gilt es mit der summary()-Methode und den Diagnoseplots zu analysieren</TagLine>
        <img alt="" className="scaledPic"src='images/R/summary.png' />
        <Div3><br></br></Div3>
        <img alt="" className="scaledPic"src='images/R/diagnose1.png' />
        <Div3><br></br></Div3>
        <img alt="" className="scaledPic"src='images/R/diagnose2.png' />
        <TagLine>Die Summary lässt weist keine verdächtigen Werte auf, jedoch ist bei den Diagnoseplots eine leichte Kurve zuerkennen, was darauf schließen lässt, dass eine Variable womöglich fehlt. </TagLine>
        <TagLine>Durch anhängen eines quadratischen Terms mit dem Befehl "modlk2 = update(modlk, .~. +I(Groesse^2))" lässt sich das lineare Model optimieren,Nun zeigen die Diagnoseplots keine Auffälligkeiten und man kann das lineare Model mit Methode "mosaic::plotModel(mod)" ausgeben</TagLine>

        <img alt="" className="scaledPic"src='images/R/regression.png' />
        <Div3><br></br></Div3>
        <Div3><br></br></Div3>
        <Title>Eine Ausarbeitung zu Operations Research folgt in kürze</Title>


      </Div2>
    </div>

  )
}

export default R
