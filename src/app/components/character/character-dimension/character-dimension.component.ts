import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-dimension',
  templateUrl: './character-dimension.component.html',
  styleUrls: ['./character-dimension.component.scss'],
})
export class CharacterDimensionComponent implements OnInit {
  CharacterList = [
    {
      id: 'ht',
      name: 'Henri Tale',
      title: 'Sergent',
      description:
        'Après les tragiques évènements du réveille des prototypes de défense de la planète, Henri reçu une promotion officielle de sergent et un grade officieux. Il fais toujours partie des défenses de la cité mais opère aussi aux tests de nouvelle technologie militaire. Il en cherche les failles et permet aussi aux recrues de s’entrainer ainsi face à lui en simulation de zone de combat réelle.',
      screen: '../../../../assets/video/character/DV-LO_Henri_Tale.mp4',
      mobile: '../../../../assets/video/mobile/DV-LO_Henri_Tale.mp4',
    },
    {
      id: 'gr',
      name: 'Gallila Ram',
      title: 'Docteur en science du transport spatial',
      description:
        'Après les tragiques évènements du réveille des prototypes de défense de la planète, Gallila vu sa renommée dans le monde de la science rejoindre presque celle de son père il y a plus de 20 ans. Elle put alors poursuivre ses recherches dans le domaine du transport et fit une percée en découvrant une technologie capable de plier l’espace-temps.',
      screen: '../../../../assets/video/character/DV-LO_Gallila_Ram.mp4',
      mobile: '../../../../assets/video/mobile/DV-LO_Gallila_Ram.mp4',
    },
    {
      id: 'sj',
      name: 'Sam Jones',
      title: 'UNKNOW',
      description:
        'Pilote hors pair mais sans License, celle-ci perdue lors d’un évènement tragique lors de son arrivée sur la planète connue sous le nom de « l’accident de l’Hindenburg ».',
      screen: '../../../../assets/video/character/DV_Sam_Jones.mp4',
      mobile: '../../../../assets/video/mobile/DV_Sam_Jones.mp4',
    },
    {
      id: 'ro',
      name: 'Richt Ofen',
      title: 'UNKNOW',
      description:
        'Directeur du centre de recherche et ancien <span class="hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae sapien sapien. Etiam at mi pulvinar, viverra augue ac, mollis nisl. Nam sodales dui quis risus fringilla, at luctus mauris dignissim. Phasellus maximus laoreet velit, nec imperdiet turpis accumsan in.</span>',
      screen: '../../../../assets/video/character/DV_M.Richt_ofen.mp4',
      mobile: '../../../../assets/video/mobile/DV_M.Richt_ofen.mp4',
    },
    {
      id: 'tb',
      name: 'Tayla Baïle',
      title: 'Assistant scientifique informatique et mécanique',
      description:
        'Assistante de Gallila Ram et génie inconsidérée en informatique et mécanique. Elle a 22 ans et sort des écoles de science de la capitale de la planète.',
      screen: '../../../../assets/video/character/DV_Tayla_Baïle.mp4',
      mobile: '../../../../assets/video/mobile/DV_Tayla_Baïle.mp4',
    },
    {
      id: 'p1',
      name: 'Passant N°1',
      title: 'NO TITLE',
      description:
        'Amis du sdf <span class="hidden">Aenean tincidunt placerat lorem, vitae.</span> sol<span class="hidden">Aenean tincidunt placerat lorem, vitae.</span> après la ch<span class="hidden">Aenean tincidunt placerat lorem, vitae.</span>',
      screen: '../../../../assets/video/character/clodo1.mp4',
      mobile: '../../../../assets/video/mobile/clodo1.mp4',
    },
    {
      id: 'p2',
      name: 'Passant N°2',
      title: 'NO TITLE',
      description:
        'Sdf aux ragots et ex-mi <span class="hidden">Aenean tincidunt placerat lorem, vitae.</span> renvo<span class="hidden">Aenean tincidunt placerat lorem, vitae.</span>',
      screen: '../../../../assets/video/character/clodo2.mp4',
      mobile: '../../../../assets/video/mobile/clodo2.mp4',
    },
    {
      id: 'p3',
      name: 'Passant N°3',
      title: 'NO TITLE',
      description: '',
      screen: '../../../../assets/video/character/clodo3.mp4',
      mobile: '../../../../assets/video/mobile/clodo3.mp4',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
