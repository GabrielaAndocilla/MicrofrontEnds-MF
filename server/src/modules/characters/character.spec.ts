import { Test } from '@nestjs/testing';
import {CharactersController} from './characters.controller'

describe('CharactersController', () => {
  let characterController: CharactersController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        controllers: [CharactersController],
      }).compile();

      characterController = moduleRef.get<CharactersController>(CharactersController);
  });

  it('test get character', async() => {
    expect(await characterController.index('harryPotter','en')).not.toBe([]);
  })

})