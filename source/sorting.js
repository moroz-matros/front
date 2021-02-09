'use strict';

// сортируем по каждому свойству из массива свойств в обратном порядке
// т.е. начиная с меньшего приоритета, передаем ф-цию сравнения в sort()
function sorting(initial, fields){
    fields.reverse().forEach((item) => {
        initial.sort((prev, next) => {
            if (prev[item] < next[item]) return -1;
            if (prev[item] > next[item]) return 1;
        })
    }
    )
    return initial;
}

