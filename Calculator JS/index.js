let screen = document.getElementsByClassName("screen")[0] ;
let one = document.getElementById("one") ;
let two = document.getElementById("two") ;
let three = document.getElementById("three") ;
let four = document.getElementById("four") ;
let five = document.getElementById("five") ;
let six = document.getElementById("six") ;
let seven = document.getElementById("seven") ;
let eight = document.getElementById("eight") ;
let nine = document.getElementById("nine") ;
let clear = document.querySelector("#clear") ;
let plus = document.querySelector("#plus") ;
let minus = document.querySelector("#minus") ;
let multi = document.querySelector("#multi") ;
let divide = document.querySelector("#divide") ;
let screenValue = '' ;




  one.addEventListener('click',()=>{
    screen.value = screenValue + 1 ;
    screenValue = screen.value ;
  })
  two.addEventListener('click',()=>{
    screen.value = screenValue + 2 ;
    screenValue = screen.value ;
  })
  three.addEventListener('click',()=>{
    screen.value = screenValue + 3 ;
    screenValue = screen.value ;
  })
  four.addEventListener('click',()=>{
    screen.value = screenValue + 4 ;
    screenValue = screen.value ;
  })
  five.addEventListener('click',()=>{
    screen.value = screenValue + 5 ;
    screenValue = screen.value ;
  })
  six.addEventListener('click',()=>{
    screen.value = screenValue + 6 ;
    screenValue = screen.value ;
  })
  seven.addEventListener('click',(e)=>{
      e.preventDefault() ;
    screen.value = screenValue + 7  ;
    screenValue = screen.value ;
  }) ;
  eight.addEventListener('click',()=>{
    screen.value = screenValue + 8 ;
    screenValue = screen.value ;
  }) ;
  nine.addEventListener('click',()=>{
    screen.value = screenValue + 9 ;
    screenValue = screen.value ;
  })
  zero.addEventListener('click',()=>{
    screen.value = screenValue + 0 ;
    screenValue = screen.value ;
  }) ;

clear.addEventListener('click',()=>{
  screen.value = '' ;
  screenValue = screen.value ;
}) ;
  
plus.addEventListener('click',()=>{
  screenValue = screen.value + ' ' + '+' + ' ' ;
  screen.value = screenValue ;
}) ;

minus.addEventListener('click',()=>{
  screenValue = screen.value + ' ' + '-'  + ' ';
  screen.value = screenValue ;
}) ;

multi.addEventListener('click',()=>{
  screenValue = screen.value + ' ' + '*'  + ' ';
  screen.value = screenValue ;
}) ;

divide.addEventListener('click',()=>{
  screenValue = screen.value + ' ' + '/'  + ' ';
  screen.value = screenValue ;
}) ;

equal.addEventListener('click', () => {
  try {
    screen.value = eval(screenValue);
    screenValue = screen.value;
  } catch (error) {
    screen.value = 'Error';
    screenValue = '';
  }
});



// let screen = document.getElementsByClassName("screen")[0];
// let one = document.getElementById("one");
// let two = document.getElementById("two");
// let three = document.getElementById("three");
// let four = document.getElementById("four");
// let five = document.getElementById("five");
// let six = document.getElementById("six");
// let seven = document.getElementById("seven");
// let eight = document.getElementById("eight");
// let nine = document.getElementById("nine");
// let zero = document.getElementById("zero");
// let clear = document.getElementById("clear");
// let plus = document.getElementById("plus");
// let minus = document.getElementById("minus");
// let multi = document.getElementById("multi");
// let divide = document.getElementById("divide");
// let equal = document.getElementById("equal");

// let screenValue = "";
// let resultShown = false;

// function addValue(value) {
//   if (resultShown) {
//     screenValue = ""; // Clear screen if result was shown
//     resultShown = false;
//   }
//   screenValue += value;
//   screen.value = screenValue;
// }

// one.addEventListener('click', () => addValue('1'));
// two.addEventListener('click', () => addValue('2'));
// three.addEventListener('click', () => addValue('3'));
// four.addEventListener('click', () => addValue('4'));
// five.addEventListener('click', () => addValue('5'));
// six.addEventListener('click', () => addValue('6'));
// seven.addEventListener('click', () => addValue('7'));
// eight.addEventListener('click', () => addValue('8'));
// nine.addEventListener('click', () => addValue('9'));
// zero.addEventListener('click', () => addValue('0'));

// plus.addEventListener('click', () => addValue(' + '));
// minus.addEventListener('click', () => addValue(' - '));
// multi.addEventListener('click', () => addValue(' * '));
// divide.addEventListener('click', () => addValue(' / '));

// clear.addEventListener('click', () => {
//   screenValue = '';
//   screen.value = screenValue;
//   resultShown = false;
// });

// equal.addEventListener('click', () => {
//   try {
//     screen.value = eval(screenValue);
//     screenValue = screen.value;
//     resultShown = true; // Set flag to true after showing result
//   } catch (error) {
//     screen.value = 'Error';
//     screenValue = '';
//     resultShown = false;
//   }
// });
