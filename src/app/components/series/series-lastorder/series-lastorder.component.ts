import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-series-lastorder',
  templateUrl: './series-lastorder.component.html',
  styleUrls: ['./series-lastorder.component.scss'],
})
export class SeriesLastorderComponent implements OnInit {
  fragment: string;
  show = false;

  chapterList = [
    { 
      id: 'chapter1', 
      title: 'Pilot', 
      paragraph: "un vieil écran s’allume et grésille. L’image faisant par moment place à un nuage gris, brouillant et parasitant la lecture de ses données \n\n %%%%(parasites audios durant la vidéo)%%%% \n\n 2 scientifiques se tiennent cote à cote devant la caméra. Les 2 hommes semble plutôt heureux et fier de se trouver dans ce laboratoire de l’armée. Le laboratoire souterrain semble plutôt sombre dans les couloirs mais ses pièces sont éclairées comme immaculée par la lueur des lampes tapissant le plafond au-dessus des ordinateurs. Ces lueurs créé un contraste incroyable entre chaque section du souterrain. \n\n - Thomas Ram: jours 1, le professeur Clayton et moi-même sommes tout 2 réuni dans ce laboratoire pour pouvoir pratiquer librement nos recherches en robotique!\n\n - Clayton Fhalse: l’armée nous paye et nous offre un budget quasi illimité mais nous devons alors garder le secret le plus total. \n\n %%%%(parasites)%%%% \n\n T.R. semble émerveillé mais sa joie ne semble pas partagée malgré la raison. C.F semble plutôt fort préoccuper par ses propres recherches. \n\n - Thomas Ram: jours 55, on vient de m’annoncer que je ma petite fille est venue au monde !! je suis père ! \n\n - Clayton Fhalse: Félicitation camarade maintenant au travail. \n\n %%%%(parasites)%%%% \n\n La vidéo présente dorénavant un bureau encombré et mal ranger : des cannettes, documents, notes et autres outils s’en retrouve éparpillé. Ce qui ne plait guère à tout le monde mais le jeune père s’emble bien s’en moquer. \n\n - Thomas Ram: jour 400, le projet avance bien , nous avons déjà produit 3 prototypes de Mechanical Artificial Néo-Tech. Intelligence of Surveillance . AKA « MANTIS ». J’ai trouvé ce nom assez cool ! \n\n - Clayton Fhalse: Rhaaaa mais qu’est-ce que c’est que ce bordel devant la caméra ! On est sensé prendre ces enregistrements comme journal de l’évolution du projet ! Un peu de tenue non ?!\n\n - Thomas Ram: Je m’en fou, pour ce genre de chose, il n’y a que l’audio qui est important. Personne n’a envie de voir ma face en gros plan pendant %%%%(parasites)%%%%jours ici. \n\n %%%%(parasites)%%%%"
    },
    { 
      id: 'chapter2', 
      title: 'Épisode 2 - Last Order', 
      paragraph: "" 
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      this.fragment = fragment;
    });
  }

  ngAfterViewChecked(): void {
    try {
      if (this.fragment) {
        document.querySelector('#' + this.fragment).scrollIntoView();
      }
    } catch (e) {}
  }

  toggle() {
    this.show = !this.show;
  }
}
