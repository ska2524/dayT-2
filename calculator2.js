/**
 * Created by JSK on 2017-04-11.
 */
function Calculator() {

    this.total = 0;

    this.add = function (num) {
        console.log("add")
        this.total += num
        return this.total
    }


}
//객체 여러개 생성할 수 있다.
// var calc = new Calculator();
// console.log(calc.add(10))
// console.log(calc.add(10))
// console.log(calc.add(10))
// console.log(calc.add(10))
