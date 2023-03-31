import { Controller, Get, Param, Query } from '@nestjs/common';
import {charactersHarryPotter, charactersRickMorty ,ICharacters, CharactersDTO} from '../../models/characters'

@Controller('characters')
export class CharactersController {
  characters = {
    harryPotter: charactersHarryPotter,
    rickMorty: charactersRickMorty
  }
  constructor() {}

  @Get(':name')
  async index(@Param('name')name:string,@Query('locale') locale?: number): Promise<ICharacters[]> {    
    const lang = locale ?? 'en'
    const characters = this.characters[name].reduce((characters:ICharacters[], character:CharactersDTO):ICharacters[] => {
      characters.push({...character,description:character.description[lang]})
      return characters
    }, [])
    return characters
  }
}
