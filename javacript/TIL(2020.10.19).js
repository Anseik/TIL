// 1. 변수

// * let : 선언은 한번만, 할당은 여러번 가능

let x = 1
x = 3
console.log(x)

// 재선언 할 경우 에러 발생
let x = 1
let x = 3
// Uncaught SyntaxError: Identifier 'x' has already been declared

// 블록 유효범위를 갖는다.({} 내부)
let x = 1

if (x === 1) {
  let x = 2
  console.log(x) // 2
}
console.log(x) // 1

// --------------------------------------------------------------------

// * const : 선언도 한번, 할당도 한번, 값이 변하지 않는 상수를 선언하는 키워드

// 선언 시 초기값을 설정하지 않으면 에러 발생 -> 반드시 초기값을 설정해야 한다.
const myFav
// Uncaught SyntaxError: Missing initializer in const declaration 에러 발생
const myFav = 7
console.log(myFav)

// const로 선언된 값은 재할당 및 재선언 불가

const myFav = 7
myFav = 5
// Uncaught TypeError: Assignment to constant variable.

const myFav = 10
var myFav = 10
let myFav = 10
// Uncaught SyntaxError: Identifier 'myFav' has already been declared

// --------------------------------------------------------------------

// * var : ES6 이전 변수를 선언하는 키워드

// var 키워드로 선언된 변수는 같은 var 키워드로 재선언 할 수 있다.
var num = 1
var num = 2
console.log(num) // 2

// 함수 유효 범위(function scope)를 가지고 있다.
var a = 1
let b = 2
if (true) {
  var a = 10 // 전역변수 a 덮어쓰기
  let b = 20 // if 내 지역변수
  console.log(a) // 10
  console.log(b) // 20
}
console.log(a) // 10
console.log(b) // 2

// 함수일때는 함수 내부가 유효 범위이다.
var a = 10
function test() {
  var a = 100
  console.log(a) // 100
}
test()
console.log(a) // 10

// if문일때는 전역이 유효 범위이다.
var b = 20
if (true) {
  var b = 200
  console.log(b) // 200
}
console.log(b) // 200


// --------------------------------------------------------------------

// 2. 타입과 연산자

// 2.1 타입

// * Number

const a = 13
console.log(a)
const b = -5
console.log(b)
const c = 3.14
console.log(c)
const d = 2.998e8 // e8 = 10^8
console.log(d)
const e = Infinity // 또는
const e = -Infinity
console.log(e)
const f = NaN // Not a Number
console.log(f)


// * Boolean

// python과는 다르게 첫글자를 대문자로 쓰지 않는다.
const isTrue = true 
console.log(isTrue)
const isFalse = false
console.log(isFalse)

// * Empty Value

// undefined : 값이 없을 경우 JavaScript가 할당 하는 값
// null : 값이 없음을 표현하기 위해서 개발자가 인위적으로 사용하는 값

let a // 선언만 하고 초기화하지 않음.
console.log(a) // undefined

let b = null // 의도적으로 값이 없음을 표현
console.log(b) // null

// typeof 연산자를 통해 확인해보면 서로 반환 값이 다르다.
typeof null // object
typeof undefined // undefined

// --------------------------------------------------------------------

// 2.2 연산자

// * 할당 연산자

let c = 0
console.log(c)
c += 10
console.log(c) // 10, c에 10을 더한다.
c -= 3
console.log(c) // 7, c에서 3을 뺀다.
c *= 10
console.log(c) // 70, c에 10을 곱한다.
c /= 10
console.log(c) // 7, c를 10으로 나눈다.
c++
console.log(c) // 8, c에 1을 더한다(증감식)
c--
console.log(c) // 7, c에서 1을 뺀다(증감식)

// * 비교 연산자

// 문자열 비교는 영어 소문자가 대문자보다 큰 값을 가진다.
// 알파벳은 오름차순으로 대소를 비교한다.

3 > 2 // true
3 < 2 // false

'A' < 'B' // true
'Z' < 'a' // true
'가' < '나' // true

// * 동등 연산자(==, !=)

// 비교 대상의 타입이 다른경우 가능하다면 같은 자료형으로 형변환하여 비교한다.
// 형변환은 예기치 못한 결과를 야기할 수 있기 때문에 동등 연산자의 사용은 지양한다.

const a = 1
const b = '1'

console.log(a == b) // true
console.log(a == Number(b)) // true -Number를 통해 숫자로 형변환

// * 일치 연산자(===, !==)

// 타입과 값이 모두 같은지 비교, 동등 연산자와 다르게 엄격한 비교를 하기때문에 일치 연산자 사용을 권장
const a = 1
const b = '1'

console.log(a === b) // false
console.log(a === Number(b)) // true

// * 논리 연산자

// boolean 타입을 연산할 수 있는 연산자로 다음과 같이 세가지 연산을 지원한다.(and, or, not)

// and 연산은 && 연산자를 통해 연산한다. 모두 참일 경우 true를 반환한다.
true && false // false
true && true // true

// 단축평가 적용 : 첫번째 항이 false이면 두번째 항은 확인하지 않는다.
1 && 0 // 0
0 && 1 // 0
4 && 7 // 7

// or 연산은 || 연산자를 통해 연산한다. 둘 중 하나라도 참일 경우 true를 반환한다.
false || true // true
false || false // false
true || false // true

// 단축평가 적용 : 첫번째 항이 true이면 두번째 항은 확인하지 않는다.
1 || 0 // 1
0 || 1 // 1
4 || 7 // 4

// not 연산은 ! 연산자를 통해 연산하며, 단일 값에 사용하는 단항 연산자로 해당 논리 값을 반대로 뒤집는다.
!true // false
!false // true


// * 삼항 연산자

// 조건식이 참이면 : 앞의 값이 반환되며 그 반대일 경우 : 뒤의 값이 반환되는 연산자다.
// 삼항 연산자의 중첩 사용은 지양하며, 일반적으로 한 줄에 표현한다.

true ? 1 : 2 // 1
false ? 1 : 2 // 2

const result = Math.PI > 4 ? 'Yep' : 'Nope'
console.log(result) // Nope

// --------------------------------------------------------------------

// 조건문과 반복문

// 3.1 조건문

// * if, else if, else

const name = 'manager'

if (name === 'admin') {
  console.log('관리자님 환영합니다.')
} else if (name === 'manager') {
  console.log('매니저님 환영합니다.')
} else {
  console.log(`${name}님 환영합니다.`)
}

// * switch

// switch 문은 하나의 표현식을 평가하여, 일치하는 항목의 case 절을 실행하는 조건문
// 일차하는 항목이 없다면 default 절을 실행한다.
// break 키워드를 통해 switch 문을 벗어난다는 것을 명시한다.

const name = 'manager'

switch(name) {
  case 'admin': {
    console.log('관리자님 환영합니다.')
    break
  }
  case 'manager': {
    console.log('매니저님 환영합니다.')
    break
  }
  default: {
    console.log(`${name}님 환영합니다.`)
  }
}

// break 키워드가 명시되지 않을 경우 switch 문을 벗어나지 못하고 만족하는 case절 아래에 있는 내용모두를 출력하게 된다.
const name = 'manager'

switch(name) {
  case 'admin': {
    console.log('관리자님 환영합니다.')
  }
  case 'manager': {
    console.log('매니저님 환영합니다.')
  }
  default: {
    console.log(`${name}님 환영합니다.`)
  }
}

// --------------------------------------------------------------------

// 3.2 반복문

// * while

let i = 0

while (i < 6) {
  console.log(i) // 0 1 2 3 4 5
  i++
}

// * for
// 사용할 변수 하나를 정의하고, 변수가 특정 조건에 대해 false가 될 때까지 연산하는 반복문

for (let i = 0; i < 6; i++) {
  console.log(i)
}

// * for of
// 배열에서 요소를 하나씩 순회하는 반복문
// 매 요소는 블럭 내에서 새롭게 선언되기 때문에 반드시 변수 선언 키워드를 작성한다.
const numbers = [0, 1, 2, 3]

for (const number of numbers) {
  console.log(number) // 0 1 2 3
}

// * for in
// Object의 key 또는 Array의 index를 순회하는 반복문
const fruits = { a: 'apple', b: 'banana' }

for (const key in fruits) {
  console.log(key) // a b
  console.log(fruits[key]) // apple banana
}

const fruits = ['apple', 'banana']

for (const idx in fruits) {
  console.log(idx) // 0 1
  console.log(fruits[idx]) // apple banana
}

// --------------------------------------------------------------------

// * 4. 함수

// * 함수 선언식
function add (num1, num2) {
  return num1 + num2
}

add(2, 7) // 9

// * 함수 표현식
// 아래처럼 이름이 없는 함수를 익명 함수(anonymous function)라고 한다. 익명함수는 함수 표현식에서만 사용할 수 있다.
const sub = function (num1, num2) {
  return num1 - num2
}

sub(7, 2) // 5

// 기명 함수도 함수 표현식이 가능하다.
const mysub = function sub (num1, num2) {
  return num1 - num2
}

mysub(7, 2) // 5

// * 기본 인자(Default Arguments)
const greeting = function (name='홍길동') {
  console.log(`안녕하세요 ${name}님!`)
}
greeting()
greeting('안세익')

// * 화살표 함수
// 함수 선언 시 function 키워드와 중괄호를 생략하기 위해 고안된 단축 문법
const arrow = function (name) {
  return `hello! ${name}`
}
arrow('안세익')

// 1. function 키워드 삭제, 화살표 추가
const arrow = (name) => { return `hello! ${name}` }
arrow('안세익')

// 2. 매개변수가 하나일 경우 '( )' 생략
const arrow = name => { return `hello! ${name}` }
arrow('안세익')

// 3. 함수 바디가 하나의 표현식일 경우 '{ }'와 return 생략
const arrow = name => `hello! ${name}`
arrow('안세익')

// 4. 단, 표현식이 object 객체일 경우 '( )' 안쪽에 객체 표현
const arrow = name => ({ message: `hello! ${name}` })
arrow('안세익')
// '()'없이 표현하면 object의 {}를 함수의 {}로 인식하고 return이 없어 undefined로 출력된다.
const arrow = name => { message: `hello! ${name}` }
arrow('안세익')

// --------------------------------------------------------------------

// 5. 자료구조(Array와 Object)

// * 5.1 Array (배열)

// * 기본 사용법
const numbers = [1, 2, 3, 4]
numbers[0] // 1
numbers[-1] // undefined => 정확한 양의 정수 index만 가능
numbers.length // 4

// * reverse(원본도 바꾸고 return값도 있다.)
const numbers = [1, 2, 3, 4]
numbers.reverse() // [4, 3, 2, 1]
numbers // [4, 3, 2, 1]
numbers.reverse() // [1, 2, 3, 4]
numbers // [1, 2, 3, 4]

// * push & pop
const numbers = [1, 2, 3, 4]
numbers.push('a') // 5 => 새로운 배열의 길이
numbers // [1, 2, 3, 4, 'a']
numbers.push('b', 'c') // 7 => 2개 이상의 요소를 한번에 추가할 수 있다.
numbers // [1, 2, 3, 4, 'a', 'b', 'c']

numbers.pop() // 'a' => 가장 마지막 요소
numbers // [1, 2, 3, 4]

numbers.pop(0) // 4 => 몇번째 요소를 pop할지 선택할 수 없고 항상 맨 마지막 요소가 pop된다.
numbers // [1, 2, 3]

// * unshift & shift
const numbers = [1, 2, 3, 4]
numbers.unshift('a') // 5 => 새로운 배열의 길이
numbers // ['a', 1, 2, 3, 4]

numbers.shift() // 'a' => 가장 처음 요소
numbers // [1, 2, 3, 4]

numbers.shift(3) // 1 => 몇번째 요소를 shift할지 선택할 수 없고 항상 맨 처음 요소가 shift된다.
numbers // [2, 3, 4]

// * includes
const numbers = [1, 2, 3, 4]
numbers.includes(1) // true
numbers.includes(0) // false

// * indexOf
const numbers = [1, 2, 3, 4]
numbers.push('a', 'a') // 6 => 요소 2개를 한번에 추가
numbers // [1, 2, 3, 4, 'a', 'a']
numbers.indexOf('a') // 4 => 같은 값인 요소가 복수인 경우 앞에 있는 요소의 인덱스가 반환된다.
numbers.indexOf('b') // - 1 => 없는 값의 인덱스를 찾으면 -1이 반환된다.

// * join
const numbers = [1, 2, 3, 4, 'a', 'a']
numbers.join() // '1,2,3,4,a,a'
numbers.join('') // '1234aa'
numbers.join('-') // '1-2-3-4-a-a'

// --------------------------------------------------------------------

// * 5.2 Object(객체/오브젝트)

// * 선언
const me = {
  name: '홍길동', // key가 한 단어일 때 ''생략 가능
  'phone number': '01012345678', // key가 여러 단어일 때
  appleProducts: {
    ipad: '2018pro',
    iphone: '7+',
    macbook: '2019pro',
  }, // trailing comma를 찍어준다.
}

console.log(me)

// * 요소 접근
// key를 식별자로 활용할 수 없는 경우 반드시 []로 접근해야 한다.
/* 식별자는 코드 내의 변수, 함수, 혹은 속성을 식별하는 문자열입니다.
JavaScript의 식별자는 대소문자를 구별하며 유니코드 글자, $, _, 숫자(0-9)로 구성할 수 있지만, 
숫자로 시작할 수는 없습니다. -사용은 불가능 */

me.name // '홍길동'
me['name']  // '홍길동'
me.phone number // 불가능(Uncaught SyntaxError: Unexpected identifier)
me['phone number'] // '01012345678'
me.appleProducts // { ipad: '2018pro', ... }
me.appleProducts.ipad // '2018pro'

// * Object 축약 문법
// 객체를 정의할 때 key와 할당하는 변수의 이름이 같으면 아래와 같이 축약이 가능하다.
const name = '안세익'
const score = '100'

const student = {
  // name: name,
  // score: score,
  name,
  score,
}

console.log(student) // { name: '안세익', score: '100'}

// --------------------------------------------------------------------

// * 5.3 Array Helper Method(ES6+ Features)

// * forEach
// 문법
arr.forEach(callback(element, index, array))

// 사용 예시
const colors = ['red', 'blue', 'green']

colors.forEach(function (color, index, array) {
  console.log(color, index, array)
})

// * map
/* 배열 내 모든 요소에 대해 주어진 callback 함수를 실행하며, 함수의 반환값을 요소로
하는 새로운 배열을 반환한다. 배열을 다른 모습으로 바꿀 때 사용한다. */

// 문법
arr.map(callback(element, index, array))

// 사용 예시
const nums = [1, 2, 3]

const doubleNums = nums.map(function (num) {
  return num * 2
})
console.log(doubleNums) // [2, 4, 6]

// * filter
// 주어진 callback 함수의 테스트를 만족하는 요소만으로 만든 새로운 배열을 반환한다.
// callback 함수를 통해 원하는 요소만 추릴 수 있다.

// 문법
arr.filter(callback(element, index, array))

// 사용 예시
const products = [
  { name: 'cucumber', type: 'vegetable'},
  { name: 'banana', type: 'fruit' },
  { name: 'carrot', type: 'vegetable' },
  { name: 'apple', type: 'fruit' },
]

const fruits = products.filter(function (product) {
  return product.type === 'fruit'
})
console.log(fruits)
// [{name: "banana", type: "fruit"}, {name: "apple", type: "fruit"},]

const fruitsList = fruits.map(function (fruit) {
  return fruit.name
})
console.log(fruitsList) // ["banana", "apple"]

// * find
// 주어진 callback 함수의 테스트를 만족하는 첫번째 요소를 반환한다.
// 값이 없다면 undefined를 반환한다.

// 문법
arr.find(callback(element, index, array))

// 사용 예시
const avengers = [
  { name: 'Tony Stark', age: 45 },
  { name: 'Steve Rogers', age: 32 },
  { name: 'Thor', age: 40 },
]

const avenger = avengers.find(function (avenger) {
  return avenger.name === 'Tony Stark'
})
console.log(avenger) // { name: 'Tony Stark', age: 45 }

// * some
/* 배열 안의 하나의 요소라도 callback 함수의 테스트를 만족하면 true를 반환, 
아닐 경우 false를 반환한다. 단, 빈 배열에서 호출 시 false를 반환한다. */
// 요소 하나라도 테스트를 만족해야 하는데 테스트할 요소 자체가 없는 경우 false를 반환한다.

// 문법
arr.some(callback(element, index, array))

// 사용 예시
cons