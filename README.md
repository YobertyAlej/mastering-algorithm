# Mastering Algorithm by Colt Steele

Designed to solve Dynamic Programming problems, excel searching algorithms, sorting algorithms, data structures from scratch, including linked lists, trees, heaps, hash tables, and graphs.

## Big 0 Notation - Branch 0-big-o-notation

Its a way to formalize fuzzy counting, it allows us to talk in a formal way about how the runtime of an algorithm grows as the inputs grow

We don't care about the details, only about the trend

### Why do we need Big 0 Notation

Imagine we have multiple implementations or solutions to a given task?
How do we know what's the best possible solution or the most performant solution to it?

Right there is where Big O' Notation comes through, it offers a way to compare and measure the which one is "best"

- It helps to talk about your code, and how it performs against others solutions.
- Useful for discussing about trade-offs between different approaches
- Allows to identify WHERE your code is being slow down, so it's pretty good for debuging

What does BETTER mean?

We mesuare if a code runs:

- Faster
- Less memory-intensive
- More Readable

### Faster code · Time Complexity

If you decide to measure your code using time as metric you will find out that it's hard to rely on it.

Mainly because time may differ from machine to machine, and most importantly, the time may differ in the SAME machine.

So, what do we do?

We compare the _number_ of simple operations the computer has to perform

#### Big 0 Notations

It could be:

- Linear · f(n) = n (The number of operations will grow the same way n grows)
- Quadratic · f(n) = n^2 (The number of operations will grow in an exponential way)
- Constant · f(n) = 1 (It doesn't matter the value of n, the number of operations will remain the same)
- Something else...

#### Simplifying Big 0 Notations (Rules of thumb)

- Constant don't matter

If we found ourselves with O(2n), you can safely say then O(n)
If we found ourselves with O(500), you can safely say then O(1)
If we found ourselves with O(12n^2), you can safely say then O(n^2)

- Smaller terms don't matter

If we found ourselves with O(n + 10), you can safely say then O(n)
If we found ourselves with O(1000n + 50), you can safely say then O(n)
If we found ourselves with O(n^2 + 5n + 8), you can safely say then O(n^2)

#### Big 0 Shorthands

- Arithmetic operations are constant O(1) · + - \* / etc
- Variable assignment is constant O(1) · let a = 3
- Accessing elements in an array (by index) or object (by key) is constant · a[30], b['foo']
- In a loop, the complexity is the lenght of the loop times the complexity of whatever happens inside of it

### Less memory-intesive · Space Complexity

The space required by the algorithm not including the space taken by the inputs.

This is also known as auxiliary space complexity

#### Rules of thumb

- Most primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space, where n is the length of the string
- Reference types are generally O(n), where n is the length of the array or the number of keys in an object

### Logarithms

Even thought we've encountered some of the most common complexities: O(1), O(n), O(n^2), sometimes Big 0 expressions will involve more complex mathematical expressions.

One than appears more often than you might like is the logarithm.

#### Log

A log is the inverse of exponentiation

#### Rule of thumb for Logs

The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than equal or equal to one

Logarithm time complexity is great!

## Arrays and Objects Performance

Let's dive into the performance of the these JS built-in data structures through the lens of the Big 0 Notation

### Objects

When you don't need ordering, objects are a great choice!

- Insertion O(1)
- Removal O(1)
- Searching O(N)
- Access O(1)

And some methods like:

- Object.keys O(n)
- Object.values O(n)
- Object.entries O(n)
- Object.hasOwnProperty O(1)

### Arrays

Are the only ordering data structure we get for free in JS

- Insertion It depends...
- Removal It depends...
- Searching O(N)
- Access O(1)

Insertion and removal depends on WHERE it has being added or removed the element.

Adding and removing elements to te beginning of an array is an expensive operations, mainly because it has to re-index all the next elements of it, and it grows as N grows: AKA O(n)

push() and pop() performs faster than shift() and unshift()

Some Array methods performance

- push O(1)
- pop O(1)
- shift O(n)
- unshift O(n)
- concat O(n)
- slice O(n)
- splice O(n)
- sort O(n \* log(n))
- forEach/map/filter/reduce/etc O(n)
