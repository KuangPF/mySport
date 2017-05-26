/**
 * Created by ForeverW on 2017/5/26.
 */

function Animal(name) {
    //
    this.name=name || 'Tom';
    this.sleep=function () {
        console.log(this.name+'正在睡觉');
    }
}

Animal.prototype.eat= function (food) {
    console.log(this.name+'在吃'+food);
};

/**
 * 原型链继承
 * 父类的一个实例是子类的原型
 **/

/*function Cat() {

}
Cat.prototype=new Animal();
Cat.prototype.name='cat';

//test code
var cat=new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat.eat('fish'));*/

/**
 * 构造继承
 *复制父类的属性给子类
 **/
/*
function Cat(name) {
    Animal.call(this);
    this.name= name || 'Tom';
}

//test code
var cat=new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal);
console.log(cat instanceof Cat);
*/

/**
 * 实例继承
 * 为父类实例添加新特性，作为子类返回
 * */

function Cat(name) {
    var instance=new Animal();
    instance.name=name || 'Tom';
    return instance;
}

//test code
var cat=new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal);
console.log(cat instanceof Cat);




















