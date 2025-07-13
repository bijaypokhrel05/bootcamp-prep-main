/*Define a function, `attendanceCheck`, that accepts a day of the week as a string.

Using the globally-defined classRoom array, `attendanceCheck` should return a
 new array with only the names of the students present on the inputted day of
 the week.

 ```javascript

 classCheck('Monday'); // => ['Marnie', 'Shoshanna']

 classCheck('Wednesday'); // => ['Marnie', 'Lena']
```
*/

let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW
function attendanceCheck(day) {
    let presentStudent = [];

    for (let student of classRoom) {
        for (let key in student) {
            for (let data of student[key]) {
                for (let el in data) {
                    if (el === day && data[day] === true) {
                        presentStudent.push(key);
                    }
                }
            }
        }
    }
    return presentStudent;
}