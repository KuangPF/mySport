/**
 * Created by ForeverW on 2017/5/25.
 */
/**
 * 定义一个Animals类
 **/

function Animal(name) {
    //添加一个属性
    this.name=name || 'Tom';

    //添加一个方法
    this.sleep=function () {
        console.log(this.name+' is sleep...')
    }
}

//Animal原型方法

Animal.prototype.eat=function (food) {
    console.log(this.name+'正在吃'+food);
};


/**
 * 原型继承
 * 核心：父类的一个实例是子类的原型
 **/
/*
function Cat() {
    
}
Cat.prototype=new Animal();
Cat.prototype.name='cat';


//test code
var cat=new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat.eat('fish'));
*/


/**
 * 构造继承
 * 核心：使用父类构造函数来增强子类实例，等于复制父类实例给子类
 **/

/*function Cat(name) {
    Animal.call(this);
    this.name=name || 'Tom';
};

//test code
var cat =new Cat('cat');
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Cat);*/


/**
 * 实例继承
 * 核心：为父类实例添加新特性，作为子类返回
 **/

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
























