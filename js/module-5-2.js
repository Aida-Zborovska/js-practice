import { heroes } from './objects.js';
import { books } from './objects.js';
import { cars } from './objects.js';
import { users } from './objects.js';
import { users2 } from './objects.js';

// ============================  HEROES  ============================

//1. Напиши функцію, яка приймає масив героїв та повертає масив імен усіх героїв.
const heroNames = heroes => heroes.map(hero => hero.name);
// console.log(heroNames(heroes));

// 2. Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких
//  gender дорівнює 'Male'.
const filterMales = heroes =>
  heroes.filter(hero => hero.appearance.gender === 'Male');
// console.log(filterMales(heroes));

// 6. Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких
// publisher дорівнює 'Marvel Comics'
const filterPablisher = heroes =>
  heroes.filter(hero => hero.biography.publisher === 'Marvel Comics');
// console.log(filterPablisher(heroes));

// Напишу універсальну функцію для фільтрування heroes: (
const heroesFilter = (heroes, propertyPath, value) =>
  heroes.filter(hero => {
    const properties = propertyPath.split('.');
    let propertyValue = hero;
    properties.forEach(property => (propertyValue = propertyValue[property]));
    return propertyValue === value;
  });

// console.log(heroesFilter(heroes, 'appearance.gender', 'Male'));
// console.log(heroesFilter(heroes, 'biography.publisher', 'Marvel Comics'));

// 7. Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких
// powerstats.intelligence менше ніж 50.
const powerstatsIntelligence = heroes =>
  heroes.filter(hero => hero.powerstats.intelligence < 50);
// console.log(powerstatsIntelligence(heroes));

// 8. Напиши функцію, яка приймає масив героїв та повертає героя з name рівним
// 'Doctor Strange'.
const findDoctorStrange = heroes =>
  heroes.find(hero => hero.name === 'Doctor Strange');
// console.log(findDoctorStrange(heroes));

// 9. Напиши функцію, яка приймає масив героїв та повертає героя з максимальним
// значенням powerstats.strength.
const getMaxPowerstatsStrength = heroes => {
  const sorted = heroes.toSorted(
    (b, a) => a.powerstats.strength - b.powerstats.strength
  );
  return sorted[0];
};
// console.log(heroes.map(heroes => heroes.powerstats.strength));
// console.log(getMaxPowerstatsStrength(heroes));

const getMaxPowerstatsStrength2 = heroes =>
  heroes.reduce(
    (max, hero) =>
      hero.powerstats.strength > max.powerstats.strength ? hero : max,
    heroes[0]
  );
// console.log(getMaxPowerstatsStrength2(heroes));

// 10. Напиши функцію, яка приймає масив героїв та повертає героя з мінімальним
//  значенням powerstats.speed.
const getMinPowerstatsSpeed = heroes =>
  heroes.reduce(
    (min, hero) => (hero.powerstats.speed < min.powerstats.speed ? hero : min),
    heroes[0]
  );
// console.log(heroes.map(hero => hero.powerstats.speed));
// console.log(getMinPowerstatsSpeed(heroes));

// 11. Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких
// appearance.weight[1] менше 75 кг.
const getLightestHeroes = heroes =>
  heroes.filter(hero => {
    const weightParams = hero.appearance.weight[1].split(' ');
    return weightParams[0] < 75;
  });
// console.log(getLightestHeroes(heroes));

// 12. Напиши функцію, яка приймає масив героїв та повертає масив героїв, у яких
// appearance.height[1] більше 180 см.
const getHighestHeroes = heroes =>
  heroes.filter(hero => {
    const heightParams = hero.appearance.height[1].split(' ');
    return heightParams[0] > 180;
  });
// console.log(getHighestHeroes(heroes));

// 13. Напиши функцію, яка приймає масив героїв та повертає масив назв
// biography.firstAppearance усіх героїв.
const getFirstAppearances = heroes =>
  heroes.map(hero => hero.biography.firstAppearance);
// console.log(getFirstAppearances(heroes));

// 14. Напиши функцію, яка приймає масив героїв та повертає масив назв
//   work.occupation усіх героїв.
const getWorkOccupations = heroes =>
  heroes
    .map(hero => hero.work.occupation)
    .filter(workOccupation => workOccupation !== '-');
// console.log(getWorkOccupations(heroes));

// 15. Напиши функцію, яка приймає масив героїв та сортує його за зростанням
//  powerstats.intelligence.
const sortByIntelligenceAsc = heroes =>
  heroes.toSorted(
    (a, b) => a.powerstats.intelligence - b.powerstats.intelligence
  );
// console.log(
//   sortByIntelligenceAsc(heroes).map(hero => hero.powerstats.intelligence)
// );

// 16. Напиши функцію, яка приймає масив героїв та сортує його за спаданням
// powerstats.power.
const sortByPowerDesc = heroes =>
  heroes.toSorted((a, b) => b.powerstats.power - a.powerstats.power);
// console.log(sortByPowerDesc(heroes).map(hero => hero.powerstats.power));

// 17. Напиши функцію, яка приймає масив героїв та сортує його за алфавітом по
//  name.
const sortByNamesAZ = heroes =>
  heroes.toSorted((a, b) => a.name.localeCompare(b.name));
// console.log(sortByNamesAZ(heroes).map(hero => hero.name));

// 23. Напиши функцію, яка приймає масив героїв та повертає індекс героя з id
// рівним 226.
const findIndex = heroes => {
  const hero = heroes.find(hero => hero.id === 226);
  return heroes.indexOf(hero);
};
// console.log(heroes[findIndex(heroes)]);

const findIndex2 = heroes =>
  heroes.reduce(
    (targetIndex, hero, index) => (hero.id === 226 ? index : targetIndex),
    -1
  );
// console.log(heroes[findIndex2(heroes)]);

const findIndex3 = heroes => heroes.findIndex(hero => hero.id === 226);
// console.log(heroes[findIndex3(heroes)]);

// 24. Напиши функцію, яка приймає масив героїв та повертає масив довжин масиву
// aliases кожного героя.
