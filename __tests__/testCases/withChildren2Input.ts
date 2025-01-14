import { E2eTestUserInput } from '../../src/types/E2eTestUserInput'

export const withChildren2Input: E2eTestUserInput = {
  priloha3_r11_socialne: '1000',
  priloha3_r13_zdravotne: '1000',
  r001_dic: '233123123',
  r003_nace: '62010 - Počítačové programovanie',
  r005_meno: 'Fake',
  r004_priezvisko: 'Name',
  r007_ulica: 'Mierova',
  r008_cislo: '4',
  r009_psc: '82105',
  r010_obec: 'Bratislava 3',
  r011_stat: 'Slovensko',
  t1r10_prijmy: '27000',
  datum: '22.02.2020',
  children: [
    {
      id: 1,
      priezviskoMeno: 'Morty Smith',
      rodneCislo: '1607201167',
      wholeYear: false,
      monthFrom: '6',
      monthTo: '11',
    },
  ],
  hasChildren: true,
  prijmyPredJul22: true,
  zaciatokPrijmovDen: null,
  zaciatokPrijmovMesiac: null,
  zaciatokPrijmovRok: null,

  expectNgoDonationPage: true,
}
