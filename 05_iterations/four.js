// for in Loop ((The "Key" Getter)
// output (js shortcut is for javascript ,
// cpp shortcut is for C++,rb shortcut is for ruby
// for in  Objects  The Key (e.g., the property name like username)


const myObject ={
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby'

}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming =["js", "python", "java"]

for (const key in programming) {
    //console.log(programming [key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('FR', "France")

for (const key in map) {
    
    console.log(key);
}