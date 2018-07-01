import { RegistratioonModule } from './registratioon.module';

describe('RegistratioonModule', () => {
  let registratioonModule: RegistratioonModule;

  beforeEach(() => {
    registratioonModule = new RegistratioonModule();
  });

  it('should create an instance', () => {
    expect(registratioonModule).toBeTruthy();
  });
});
