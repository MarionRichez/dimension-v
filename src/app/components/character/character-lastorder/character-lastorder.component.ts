import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-lastorder',
  templateUrl: './character-lastorder.component.html',
  styleUrls: ['./character-lastorder.component.scss'],
})
export class CharacterLastorderComponent implements OnInit {
  characterList = [
    {
      id: 'gr',
      name: 'Gallila Ram',
      title: 'Étudiante en science du transport en sous espace',
      description:
        'Elle a 23 ans, fille de scientifique de renommée planétaire disparu durant la guerre interplanétaire où plus communément renommée par les ancien habitant : « La chute ». Comme son père elle aussi à suivit la voie de la recherche et de la science. Jeune scientifique orienté dans le développement de transport en sous espace.',
      screen: '../../../../assets/video/character/DV-LO_Gallila_Ram.mp4',
      mobile: '../../../../assets/video/mobile/DV-LO_Gallila_Ram.mp4',
    },
    {
      id: 'ht',
      name: 'Henri Tale',
      title: 'Garde de sécurité : recrue',
      description:
        'Descendant des nouveaux habitants venus après l’alliances entre les 2 planètes. Fils de lieutenant de division d’assaut orbital. Il s’est fait engager comme garde de sécurité de la ville, on pourrait appeler cela une « police » mais leur mission peuvent avoir certaines variations militaires de niveau terrestre, aériennes et orbital. Il a 23 ans et est une recrue fraîchement sortie des camps d’entrainement.',
      screen: '../../../../assets/video/character/DV-LO_Henri_Tale.mp4',
      mobile: '../../../../assets/video/mobile/DV-LO_Henri_Tale.mp4',
    },
    {
      id: 'tr',
      name: 'Thomas Ram',
      title: 'Professeur en robotique et l’Intelligence Artificielle',
      description:
        'Scientifique de renommée planétaire et un génie dans le domaine de la robotique et l’intelligence artificielle. Jeune marié et enthousiaste étendre ses recherches et son savoir du monde. Grand rêveur et naïf sur le nerf du Monde humain.',
      screen: '../../../../assets/video/character/LO_Thomas_Ram.mp4',
      mobile: '../../../../assets/video/mobile/LO_Thomas_Ram.mp4',
    },
    {
      id: 'cf',
      name: 'Clayton Fhalse',
      title: 'Professeur en mécanique électrique et armement',
      description:
        'Originaire d’une famille de mineurs dans les mines du sud, il sut se faire sortir du lot par sa débrouillardise et son ingéniosité. Après les accidents de Turkof, il fut accepté dans une école de science pour mettre son talent à profit dans l’avenir. Débrouillard et malin, il a compris le véritable sens de la société et n’hésitera pas à faire ce qu’il faut pour arriver à ses fins.',
      screen: '../../../../assets/video/character/LO_Clayton_Fhalse.mp4',
      mobile: '../../../../assets/video/mobile/LO_Clayton_Fhalse.mp4',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
