/*
***
Объекты.Задание 5

Переписать консольное приложение из предыдущего юнита на классы.
*/

// Классы

// *** 
//switchOn - прибор включен
//powerConsumption - потребляемая мощность (Вт/ч)
//switchTime - время работы электроприбора (в минутах)
//deviceName - название прибора
//rusGen - род (мужской или женский в названии прибора)

class Electro {
    constructor() {
        this.timeUnit = 'минут';
        this.measUnit = 'Вт';
    }

    energyConsumed(switchOn, powerConsumption, switchTime, deviceName, rusGen) {
        if (switchOn) {
            console.log(`${this.devicePlace} ${deviceName} за ${switchTime} ${this.timeUnit} потребил${rusGen} ${powerConsumption * switchTime / 60} ${this.measUnit}`);
        }
        else {
            console.log(`${deviceName} не включен${rusGen}`)
        }
    }
}

class RoomDevice extends Electro { //комнатные приборы
    constructor() {
        super();
        this.devicePlace = 'Работая в комнате,'
    }

}
class KitchenDevice extends Electro { //кухонные приборы
    constructor() {
        super();
        this.devicePlace = 'Работая на кухне,'
    }
}

// 1й вариант решения

const comp = new RoomDevice();
const lamp = new RoomDevice();
const iron = new KitchenDevice();
const microwave = new KitchenDevice();

comp.energyConsumed(true, 300, 120, 'компьютер', '');
lamp.energyConsumed(false, 60, 180, 'настольная лампа', 'а');
iron.energyConsumed(true, 1800, 10, 'утюг', '');
microwave.energyConsumed(true, 1200, 30, 'микроволновка', 'а');

// 2й вариант решения

const comp2 = {
    func: new RoomDevice(),
    switchOn: true,
    power: 300,
    time: 120,
    name: 'компьютер',
    rusGen: ''
};
const lamp2 = {
    func: new RoomDevice(),
    switchOn: true,
    power: 60,
    time: 180,
    name: 'настольная лампа',
    rusGen: 'а'
};
const iron2 = {
    func: new KitchenDevice(),
    switchOn: true,
    power: 1800,
    time: 10,
    name: 'утюг',
    rusGen: ''
};
const microwave2 = {
    func: new KitchenDevice(),
    switchOn: true,
    power: 1200,
    time: 30,
    name: 'микроволновка',
    rusGen: 'а'
};

function switchDevice(arg) {
    if (arg === undefined) {
        console.log('ни один прибор не отслеживается');
    }
    else {
        for (let i = 0; i < arguments.length; i++) {
            arguments[i].func.energyConsumed(arguments[i].switchOn, arguments[i].power, arguments[i].time, arguments[i].name, arguments[i].rusGen);
        }
    }
};

lamp2.switchOn = false; // выключим лампу

switchDevice(); //ни один не отслеживается
switchDevice(comp2, lamp2); // только два отслеживаются
// switchDevice(comp2,lamp2,iron2,microwave2); // все отслеживаются
