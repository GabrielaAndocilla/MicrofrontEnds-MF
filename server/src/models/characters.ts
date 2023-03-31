export interface CharactersDTO{
  id:number,
  name:string,
  imagePath:string,
  description:{
    en:string,
    es:string
  }
}


export interface ICharacters{
  id:number,
  name:string,
  imagePath:string,
  description: string
}



export const charactersRickMorty:CharactersDTO[] = [
  {
    id:1,
    name:'Morty Smith',
    imagePath:'https://i.pinimg.com/originals/e7/3c/0a/e73c0a39c2eb2076d3542e029f46f3e6.png',
    description:{
      es:'Mortimer Chancuey Smith apodado como "Morty" de la dimensión Prime/Cronenberged es uno de los protagonistas principales de la serie animada Rick y Morty. Tiene constantes aventuras con su abuelo Rick Sánchez para ayudarlo siendo la mayoría de las ocasiones en contra de su voluntad y saliendo lastimado en casi todas ellas.',
      en:'Mortimer Chancuey Smith nicknamed "Morty" from the Prime/Cronenberged dimension is one of the main protagonists of the animated series Rick and Morty. He has constant adventures with his grandfather Rick Sanchez to help him being most of the times against his will and getting hurt in almost all of them.' 
    }
  },
  {
    id:2,
    name:'Rick Sánchez',
    imagePath:'https://www.geekmi.news/__export/1657911336768/sites/debate/img/2021/07/20/rick4_2.jpg_423682103.jpg',
    description:{
      es:'Richard Daniel "Rick" Sánchez de la Dimensión C-137 es un viejo científico alcohólico que acostumbra hablar de manera vulgar y entre eructos, la mayoría de las veces tiene un rastro de saliva en la boca. Es padre de Beth Smith y el abuelo materno de Summer y Morty.',
      en:'Richard Daniel "Rick" Sanchez of Dimension C-137 is an old alcoholic scientist who speaks vulgarly and between burps, most of the time he has a trail of saliva in his mouth. He is the father of Beth Smith and the maternal grandfather of Summer and Morty.'
    }
  },
  {
    id:3,
    name:'Beth Smith',
    imagePath:'https://vignette4.wikia.nocookie.net/rickandmorty/images/5/58/Beth_Smith.png/revision/latest/scale-to-width-down/250?cb=20151204220729',
    description:{
      es:'Beth Smith (nombre de soltera Beth Sánchez) de la Dimension C-131 es una de las protagonistas de la serie animada para adultos Rick y Morty Es la hija de Rick es la hija de un Rick muerto en un accidente, a lo que el Rick y Morty protagonistas ocuparon sus lugares. Es la esposa de Jerry y la madre de Summer y de Morty (quién murió en el mismo accidente que Rick).',
      en:'Beth Smith (maiden name Beth Sanchez) from Dimension C-131 is one of the main characters of the adult animated series Rick and Morty. She is the daughter of Rick, the daughter of a Rick who died in an accident, to which the Rick and Morty protagonists took their places. She is the wife of Jerry and the mother of Summer and Morty (who died in the same accident as Rick).'
  
    }
  },
  {
    id:4,
    name:'Summer Smith',
    imagePath:'https://i0.wp.com/lezwatchtv.com/wp-content/uploads/2020/05/Summer.jpg?fit=576%2C631&ssl=1',
    description:{
      es:'Summer Smith de la Dimension C-131 es una de los cinco personajes principales. Es miembro de la familia Smith e hija de Jerry Smith y Beth Smith, la hermana mayor de Morty Smith y la madre de Naruto Smith.',
      en:'Summer Smith of Dimension C-131 is one of the five main characters. She is a member of the Smith family and the daughter of Jerry Smith and Beth Smith, the older sister of Morty Smith and the mother of Naruto Smith.'
    }
  },
  {
    id:5,
    name:'Jerry Smith',
    imagePath:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rick-and-morty-jerry-2-1624026834.jpeg?crop=0.563xw:1.00xh;0.254xw,0&resize=480:*',
    description:{
      es:'Jerry Smith de la Dimension 5152 es uno de los protagonistas principales de la serie animada para Adulltos Rick y Morty es el yerno de 35 años de Rick Sánchez, esposo de Beth Smith y padre de Summer Smith y Morty Smith. Rick lo odia, no sabe cortejar a su mujer y ante sus hijos, es incapaz de admitir que está equivocado. A pesar de eso, hace lo que puede para ayudar ante los problemas cotidianos y sobrenaturales. Cuando más adelante en la serie se queda sin trabajo comienza a entrenar abejas, su familia no deja de reprochárselo, haciéndole sentir inseguro ante sus propios hijos.',
      en:"Jerry Smith of Dimension 5152 is one of the main protagonists of the animated series for Adulltos Rick and Morty is the 35-year-old son-in-law of Rick Sanchez, husband of Beth Smith and father of Summer Smith and Morty Smith. Rick hates him, doesn't know how to woo his wife and in front of his children, is unable to admit he's wrong. Despite that, he does what he can to help in the face of everyday and supernatural problems. When later in the series he becomes unemployed and starts training bees, his family keeps reproaching him, making him feel insecure in front of his own children."
    }
  }
]

export const charactersHarryPotter:CharactersDTO[] = [
  {
    id:1,
    name:'Harry Potter',
    imagePath:'https://www.hp-lexicon.org/wp-content/uploads/2016/04/harry_and_hedwig_by_uknow_who-200x0-c-default.jpg?ezimgfmt=ng:webp/ngcb22',
    description:{
      en:'Harry Potter is the Boy Who Lived, the Chosen One, the hero of the Wizarding world. He grew up with Muggles, and then came to Hogwarts where he faced dangers and terrors beyond his years. He, along with his friends Hermione Granger, Ron Weasley and Neville Longbottom, destroyed Voldemort’s Horcruxes. Harry faced Voldemort at the end of a climactic battle in Hogwarts castle and defeated him.',
      es:'Harry Potter es el niño que vivió, el elegido, el héroe del mundo mágico. Creció entre muggles y luego llegó a Hogwarts, donde se enfrentó a peligros y terrores más allá de su edad. Junto con sus amigos Hermione Granger, Ron Weasley y Neville Longbottom, destruyó los Horrocruxes de Voldemort. Harry se enfrentó a Voldemort al final de una batalla culminante en el castillo de Hogwarts y lo derrotó.'
    }
  },
  {
    id:2,
    name:'Albus Dumbledore',
    imagePath:'https://www.hp-lexicon.org/wp-content/uploads/2014/05/dumbledore-200x0-c-default.jpg?ezimgfmt=ng:webp/ngcb22',
    description:{
      en:'Albus Dumbledore was the Headmaster of Hogwarts for over thirty years, a time period that encompassed both of Voldemort’s attempts to take over the Wizarding world. Considered to be the most powerful wizard of his time, Dumbledore was awarded the Order of Merlin, First Class, and was the Supreme Mugwump of the International Confederation of Wizards as well as the Chief Warlock of the Wizengamot.',
      es:'Albus Dumbledore fue director de Hogwarts durante más de treinta años, un periodo de tiempo que abarcó los dos intentos de Voldemort de apoderarse del mundo mágico. Considerado el mago más poderoso de su época, Dumbledore fue condecorado con la Orden de Merlín, Primera Clase, y fue el Mago Supremo de la Confederación Internacional de Magos, así como el Brujo Jefe del Wizengamot.'
    }
  },
  {
    id:3,
    name:'Lord Voldemort',
    imagePath:'https://www.hp-lexicon.org/wp-content/uploads/2016/06/voldemort_by_bakke-200x0-c-default.jpg?ezimgfmt=ng:webp/ngcb22',
    description:{
      en:'Lord Voldemort, born Tom Marvolo Riddle, was the son of Merope Gaunt (a descendent of Salazar Slytherin) and Tom Riddle, a handsome, wealthy Muggle from Little Hangleton whom Merope ensnared with a love potion. When her husband found out she was a witch, he abandoned her while she was pregnant . Tom’s mother died shortly after giving birth to him one December 31, living just long enough to name him Tom Riddle, after his father and Marvolo, after his grandfather.',
      es:'Lord Voldemort, nacido Tom Marvolo Riddle, era hijo de Merope Gaunt (descendiente de Salazar Slytherin) y Tom Riddle, un apuesto y rico muggle de Little Hangleton a quien Merope atrapó con una poción de amor. Cuando su marido descubrió que era una bruja, la abandonó mientras estaba embarazada . La madre de Tom murió poco después de darle a luz, un 31 de diciembre, y vivió lo justo para ponerle Tom Riddle, como su padre, y Marvolo, como su abuelo.'
    }
  },{
    id:4,
    name:'Hermione Jean Granger',
    imagePath:'https://www.hp-lexicon.org/wp-content/uploads/2016/01/hermione-200x0-c-default.jpg?ezimgfmt=ng:webp/ngcb22',
    description:{
      en:'Resourceful, principled and brilliant, Hermione Jean Granger is easily the brightest witch of her generation. She, along with Ron Weasley, is one of Harry Potter’s closest friends. She is also Muggle-born (her parents were dentists ), and so is a living, breathing example of the fallacy of pureblood wizard supremacy.',
      es:'Ingeniosa, con principios y brillante, Hermione Jean Granger es sin duda la bruja más brillante de su generación. Junto con Ron Weasley, es una de las mejores amigas de Harry Potter. También es muggle de nacimiento (sus padres eran dentistas ), por lo que es un ejemplo viviente de la falacia de la supremacía de los magos de sangre pura.'
    }
  },
  {
    id:5,
    name:'Ron Weasley',
    imagePath:'https://www.hp-lexicon.org/wp-content/uploads/2014/05/ron-mk-200x0-c-default.jpg?ezimgfmt=ng:webp/ngcb22',
    description:{
      en:'Ron Weasley is Harry Potter’s best friend and the youngest son of Molly and Arthur Weasley. The story of Ron’s life is one of being overshadowed by his family and friends, yet it is Ron’s heart and humor that have solidified his friendships and given those around him the support they needed to carry through (BLC). Tall and gangly with bright red hair and freckles (PS6), Ron has a way of keeping things lighthearted that makes him well-liked, despite occasional bouts of stress (GF19). He also played an instrumental role in Voldemort’s defeat , and though history may not remember him for it as it will Harry, Ron learned as he grew that this did not make him any less important',
      es:'Ron Weasley es el mejor amigo de Harry Potter y el hijo menor de Molly y Arthur Weasley. La historia de la vida de Ron es la de haber sido eclipsado por su familia y amigos, pero es el corazón y el humor de Ron lo que ha solidificado sus amistades y ha dado a los que le rodean el apoyo que necesitaban para salir adelante (BLC). Alto y desgarbado, pelirrojo y con pecas (PS6), Ron tiene una manera de mantener las cosas alegres que le hace ser muy querido, a pesar de sus ocasionales ataques de estrés (GF19). También desempeñó un papel decisivo en la derrota de Voldemort y, aunque la historia no le recuerde por ello como a Harry, Ron aprendió a medida que crecía que eso no le hacía menos importante.'
    }
  }
] 