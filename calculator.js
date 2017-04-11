/**
 * Created by JSK on 2017-04-11.
 */

var calculator = (function () {

    var total = 0;


    function add(num1) {
        console.log("add");
        total += num1//프로퍼티 => 함수이다.
        return total
    }

    function sub(num1) {
        console.log("minus");
        total -= num1;
        return total
    }


    return {plus:add, minus:sub }

//calcuator => return으로 바로 감니다.


})();

console.log(calculator.plus(11))
console.log(calculator.plus(11))
console.log(calculator.plus(11))
console.log(calculator.plus(11))

calculator.minus(11)


//싱글턴패턴으로 객체 한개만 생성 var (function)()
