// 1. Створіть масив persons та додайте в нього 5 обєктів типу { name: ‘John’, age: 23, city:
// ‘Boston’}. Для масиву persons встановіть властивості groupName=’A’, teacher=’Joan Doe’,
// year=’2023’. З допомогою різних версій циклу for виведіть елементи масиву та властивості
// масиву

// Створення масиву persons
const persons = [
  { name: 'John', age: 23, city: 'Boston' },
  { name: 'Mary', age: 29, city: 'New York' },
  { name: 'Peter', age: 34, city: 'San Francisco' },
  { name: 'Samantha', age: 25, city: 'Chicago' },
  { name: 'David', age: 31, city: 'Los Angeles' }
];

// Встановлення властивостей масиву persons
persons.groupName = 'A';
persons.teacher = 'Joan Doe';
persons.year = '2023';

// Виведення елементів масиву persons з допомогою циклу for
for (let i = 0; i < persons.length; i++) {
  console.log(persons[i]);
}

// Виведення властивостей масиву persons з допомогою циклу for...in
for (let prop in persons) {
  console.log(prop + ': ' + persons[prop]);
}

// Виведення елементів масиву persons з допомогою методу forEach()
persons.forEach(function(person) {
  console.log(person);
});

// Виведення властивостей масиву persons з допомогою методу Object.keys()
Object.keys(persons).forEach(function(prop) {
  console.log(prop + ': ' + persons[prop]);
});

// 2. Створіть обєкт defaults призначений для збереження налаштувань програми який містить
// поля mode=test, debugLevel=error, logFolder=root. Створіть обєкт userSetting який містить
// поля mode=production, debugLevel=trace. Створіть функцію яка прийме як аргументи дані
// два обєкти та обєднає властивості цих двох обєктів в один обєкт надаючи пріоритет
// властивостям з обєкта userSetting. Запропонуєти як мінімум 3 способи для вирішення цієї
// задачі.

//Перший спосіб
const defaults = { mode: 'test', debugLevel: 'error', logFolder: 'root' };
const userSettings = { mode: 'production', debugLevel: 'trace' };

function mergeSettings(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const mergedSettings = mergeSettings(defaults, userSettings);

console.log(mergedSettings);

//Другий спосіб
const defaults = { mode: 'test', debugLevel: 'error', logFolder: 'root' };
const userSettings = { mode: 'production', debugLevel: 'trace' };

function mergeSettings(obj1, obj2) {
  const merged = {};
  for (let key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      merged[key] = obj2[key];
    } else {
      merged[key] = obj1[key];
    }
  }
  return merged;
}

const mergedSettings = mergeSettings(defaults, userSettings);

console.log(mergedSettings);

//Третій спосіб
const defaults = { mode: 'test', debugLevel: 'error', logFolder: 'root' };
const userSettings = { mode: 'production', debugLevel: 'trace' };

function mergeSettings(obj1, obj2) {
  const merged = {};
  Object.keys(obj1).forEach((key) => {
    merged[key] = obj2.hasOwnProperty(key) ? obj2[key] : obj1[key];
  });
  return merged;
}

const mergedSettings = mergeSettings(defaults, userSettings);

console.log(mergedSettings);


// 3. Для обєкта person із завдання 1 додайте можливість отримати рік народження не додаючи
// додаткової властивості до цього обєкта. Зробіть дане поле доступним тільки для читання.

// конструктор об'єкту Person
function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
  
  // визначаємо рік народження та зберігаємо його в приватній властивості
  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - age;
  let _birthYear = birthYear; // приватна змінна
  Object.defineProperty(this, 'birthYear', {
    get() { return _birthYear; } // публічний метод для отримання року народження
  });
}

// створюємо об'єкт Person
const person = new Person('John', 23, 'Boston');

// використовуємо публічний метод для отримання року народження
console.log(person.birthYear); // 2000

// намагаємося змінити рік народження, але зміни не відбувається, оскільки властивість приватна
person.birthYear = 1990;
console.log(person.birthYear); // 2000


//4. Якими способами можна обєднати два масиви?

// Використання методу concat(): цей метод створює новий масив, який містить елементи обох масивів, які були передані в метод.

// Приклад:

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = arr1.concat(arr2);
console.log(newArr); // [1, 2, 3, 4, 5, 6]

// Використання оператора spread: цей оператор дозволяє розгорнути масиви в окремі елементи, які можна передавати в інші масиви або функції.

// Приклад:

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = [...arr1, ...arr2];
console.log(newArr); // [1, 2, 3, 4, 5, 6]

// Використання методу push() з поширенням: цей метод додає елементи другого масиву в кінець першого масиву за допомогою поширення.

// Приклад:

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);
console.log(arr1); // [1, 2, 3, 4, 5, 6]

// Використання методу splice(): цей метод дозволяє вставляти елементи другого масиву в перший масив за певним індексом.

// Приклад:

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.splice(2, 0, ...arr2);
console.log(arr1); // [1, 2, 4, 5, 6, 3]


// 5. Напишіть алгоритм який перетворить масив persons у масив текстових фрагментів типу
// ’John from Boston born in 2000’

const persons = [
  { name: 'John', age: 23, city: 'Boston' },
  { name: 'Mary', age: 27, city: 'New York' },
  { name: 'Peter', age: 31, city: 'Chicago' }
];

const textFragments = persons.map(person => {
  const birthYear = new Date().getFullYear() - person.age;
  return `${person.name} from ${person.city} born in ${birthYear}`;
});

console.log(textFragments);
// Output: ["John from Boston born in 1998", "Mary from New York born in 1994", "Peter from Chicago born in 1990"]


// 6. Напишіть алгоритм який з масиву persons вибере людей старше 20 років.

const persons = [
  { name: 'John', age: 23, city: 'Boston', birthYear: 2000 },
  { name: 'Mary', age: 18, city: 'New York', birthYear: 2005 },
  { name: 'Alex', age: 31, city: 'Chicago', birthYear: 1990 },
  { name: 'Kate', age: 27, city: 'San Francisco', birthYear: 1994 },
  { name: 'Peter', age: 19, city: 'Los Angeles', birthYear: 2002 },
];

const filteredPersons = persons.filter(person => person.age >= 20);

console.log(filteredPersons);


// 7. З допомогою деструктуризації присвойте значення полів name, city із обєкта person у
// окремі змінні. З допомогою деструктуризації присвойте перший елемен масиву persons у
// зокрему змінну.

// Для витягування значень поля name та city з об'єкта person, можна зробити наступне:

const person = { name: 'John', age: 23, city: 'Boston' };
const { name, city } = person;
console.log(name); // виведе 'John'
console.log(city); // виведе 'Boston'

// Для витягування першого елемента масиву persons можна зробити наступне:

const persons = [{ name: 'John', age: 23, city: 'Boston' }, { name: 'Jane', age: 30, city: 'New York' }];
const [firstPerson] = persons;
console.log(firstPerson); // виведе об'єкт { name: 'John', age: 23, city: 'Boston' }


// 8. Створіть функцію getUserData яка приймє аргументом імя користувача та повертає обєкт із
// масиву persons. Якщо обєкт з таким іменем не знайдений функція має згенерувати обєкт
// помилки new Error(‘Unable to find user’). Створіть функцію showUserInfo яка приймає
// аргументом імя, виводить в консоль текст ‘Loading’, викликає функцію getUserData, якщо
// користувач знайдений – виводить його поля в консоль і текст ‘Loading finished’, якщо
// користувач не знайдений виведіть текст помилки та текст ‘Loading finished’.

const persons = [
  { name: 'John', age: 23, city: 'Boston', birthYear: 2000 },
  { name: 'Sarah', age: 31, city: 'New York', birthYear: 1992 },
  { name: 'Tom', age: 19, city: 'Chicago', birthYear: 2004 }
];

function getUserData(name) {
  const user = persons.find(person => person.name === name);
  if (!user) {
    throw new Error('Unable to find user');
  }
  return user;
}

function showUserInfo(name) {
  console.log('Loading');
  try {
    const user = getUserData(name);
    console.log(`Name: ${user.name}, Age: ${user.age}, City: ${user.city}`);
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log('Loading finished');
  }
}

// Приклад використання
showUserInfo('Sarah');
// Виведе:
// Loading
// Name: Sarah, Age: 31, City: New York
// Loading finished

showUserInfo('Alex');
// Виведе:
// Loading
// Unable to find user
// Loading finished


// 9. Напишіть функцію яка перетворить текстовий фрагмент у масив букв.

function stringToArray(str) {
  return str.split("");
}

// 10. Створіть функцію яка відобразить букви слова у зворотньому порядку.

function reverseString(str) {
  // Розділяємо рядок на масив букв
  var letters = str.split('');

  // Перетворюємо масив в зворотньому порядку
  var reversedLetters = letters.reverse();

  // Об'єднуємо масив букв знову у рядок
  var reversedString = reversedLetters.join('');

  // Повертаємо зворотній рядок
  return reversedString;
}


// 11. Напишіть функцію яка визначатиме чи передане імя файлу файл формату ‘.js’

function isJSFile(filename) {
  return filename.endsWith('.js');
}

// 12. Напишіть функцію яка перетворить речення на масив слів

function sentenceToArray(sentence) {
  return sentence.split(' ');
}

// Приклад використання

const sentence = 'Це приклад речення для перетворення на масив слів';
const words = sentenceToArray(sentence);
console.log(words); // ['Це', 'приклад', 'речення', 'для', 'перетворення', 'на', 'масив', 'слів']


// 13. Напишіть алгорим який замінеть певне словj у текстовому фрагмент

function replaceWord(text, oldWord, newWord) {
  // Розбиваємо текст на масив слів
  const words = text.split(' ');
  
  // Замінюємо всі входження старого слова на нове слово
  const replacedWords = words.map(word => word === oldWord ? newWord : word);
  
  // Злиття масиву слів назад в рядок
  return replacedWords.join(' ');
}


// Тепер можна використати цю функцію, щоб замінити слово brown на слово green в тексті:

const text = "The quick brown fox jumps over the lazy dog";
const newText = replaceWord(text, "brown", "green");
console.log(newText); // "The quick green fox jumps over the lazy dog"