Math.round(x)

// Rounds to nearest integer

Math.round(4.5);  // 5
Math.round(4.4);  // 4
Math.round(-4.5); // -4


// 5 rounds towards +∞

// Math.floor(x)

//Rounds down

Math.floor(4.9);   // 4
Math.floor(-4.1);  // -5 ❗

// Math.ceil(x)

// Rounds up

Math.ceil(4.1);   // 5
Math.ceil(-4.9);  // -4

// Math.trunc(x)

// Removes decimal part

Math.trunc(4.9);   // 4
Math.trunc(-4.9);  // -4

// POWER & ROOT METHODS
// Math.pow(base, exp)
Math.pow(2, 3); // 8


// Modern alternative:

2 ** 3;

// Math.sqrt(x)
Math.sqrt(25); // 5

// Math.cbrt(x)

// Cube root

Math.cbrt(27); // 3

// MIN / MAX METHODS
// Math.min()
Math.min(3, 1, 6); // 1


// With array:

Math.min(...[3, 1, 6]);

// Math.max()
Math.max(3, 1, 6); // 6

// RANDOM METHODS (VERY IMPORTANT)
// Math.random()

// Returns value between 0 (inclusive) and 1 (exclusive)

Math.random(); // 0.0 → 0.999...

// Random 1–10
Math.floor(Math.random() * 10) + 1;

//Random min–max
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// NUMBER METHODS
// Math.abs(x)

//Absolute value

Math.abs(-10); // 10

//  Math.sign(x)

// Returns sign

Math.sign(10);  // 1
Math.sign(-10); // -1
Math.sign(0);   // 0

//  Math.imul(a, b)

// 32-bit integer multiplication

Math.imul(2, 4); // 8


// Used in performance-critical code.

//  TRIGONOMETRY (Radians!)
// Math.sin(x)
Math.sin(Math.PI / 2); // 1

// Math.cos(x)
Math.cos(0); // 1

//  Math.tan(x)
Math.tan(Math.PI / 4); // ~1



