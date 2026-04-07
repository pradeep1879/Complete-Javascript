// var myNmae = 
// console.log( myNmae)

// console.log(undefined == null)
// console.log(undefined === null)


/**
 * Expressions and operators
 */

console.log((10 + "20")) // 1020
console.log((9 - "5")) // 4
console.log(("" + "")) // ""
console.log(("" + 0)) // 0
console.log(("Pradeep" + "kumar")) // "Pradeep kumar"
console.log((true + false)) // 1
console.log((true - false)) // 1
console.log((true - true)) // 0
console.log((false - false)) // 0
console.log((10 + undefined)) // NaN\
console.log([] + []) // empty string
console.log([] + {}) // 
console.log({} + []) // 

console.log([] == ![]) // true
/**
 * for ![]
 * []  is an object ---> all objects truthy then,
 * !truthy == false
 * 
 * [] == false, when comparing  object==primitive, JS converts the object to a primitive.
 * [] -> ""
 * 
 * "" == false  with ==, if types differ, JS coverts both side to numbers.
 * "" -> 0
 * false -> 0
 * 
 * final express => 0 == 0 (true)
 */


console.log("2" > "10")
/**
 * When both values are strings, JavaScript does lexicographical (dictionary) comparison,
 *  not numeric comparison.

Comparison process

"2" vs "10"

JS compares character by character

'2' is compared with '1'

ASCII values:

'2' → 50

'1' → 49

Since 50 > 49 → true
 */

console.log("2" > 10)
/**
 * What’s being compared?

"2" → string
10 → number
Rule used
When comparing string and number, JavaScript converts the string to a number.

Conversion
Number("2") → 2
 */

console.log("20" > "10")

console.log([] >= []) // "" >= "" // true
console.log([] >= {})
/**
 * []  → ""          // empty string
{}  → "[object Object]"
So now:

"" >= "[object Object]"
String comparison
First character:

"" (empty)

'[' (ASCII 91)

Empty string is considered less than any non-empty string.

Output
false
 */
console.log({} >= {})//true