import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./styles.css?inline"


export default component$(() => {
  useStyles$(styles)
  return (
    <div class="main">
      <div class="firstScreen scrollSnapDiv">
        <h2>Gruppen.app erfindet das erstellen von Gruppen neu. </h2>
        <p>Erstelle super schnell ausgeklügelte Gruppen, manage diese und bearbeite sie. Für den Fall der Fälle. Dabei wird nicht mal ein Account benötigt.</p>
      </div>

      <div class="secondSection scrollSnapDiv">
        <h2>Erstelle zufällige Teams oder gewollte Teams...</h2>
        <p>...indem du den Skilllevel angibst. Und das komplett Anonym, ohne das wir Daten nehmen und sie analysieren von deinen angegebenen Personen.</p>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "gruppen.app",
  meta: [
    {
      name: "description",
      content: "Gruppen.app ist eine online verfügbare Anweungung zum erstellen von Gruppen und dem managen als Gruppenersteller von diesen.",
    },
  ],
};
