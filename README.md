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

## Algorithm making and problem solving

Algorithm: Set of steps to accomplish a task

Strategies

- Device a plan for solving problems
- Master common problem solving patterns (Identify the kind of problem and solve it using the steps)

### Problem Solving Strategies

1. Understand the problem
1. Explore concrete examples
1. Solve/Simplify the problem
1. Look back and refactor

#### Understand the problem

Steps:

1. Can i restate the problem with my own words?
1. What are the inputs that go into the problem
1. What are the outputs that should come from the solution of the problem?
1. Can the outputs be determined from the inputs? In other words, do i have enough information to solve the problem?
1. How should i label the important pieces of data that are a part of the problem?

#### Explore concrete examples

- Coming up with examples can help you understand the problem better
- Examples also provides sanity checks that your eventual solution works as it should (User stories or Unit Tests)

1. Start with simple examples
1. Progress to more complex examples
1. Explore examples with Empty Inputs
1. Explore examples with Invalid Inputs

#### Break it down! (Back-coding)

Explicitly write out the steps you need to take in order to solve the problem, this forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or missunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.

TL;DR: You care about the problem solving steps, not the details.

Very important: Have cleared the DETAILS about the problem before starting to break it down! Those details are gonna be cleared when you start exploring concrete examples, ask all the questions you need then.

#### Solve/Simplify the problem

Solve the problem, and if you can't, solve a SIMPLER problem

Simplify:

- Find the core difficulty in what you're trying to do
- Temporarily ignore that difficulty
- Write a simplified solution
- Then incorporate that difficulty back in

#### Look back & Refactor

- Can you check the result? So make sure your code works (Unit testing it's great!)
- Can you derive a result differently? (Can you think a different approach?)
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solve the same problem?

#### TL;DR for problem solving

- Understand the problem

Ask questions and make sure you DO undestand it

- Explore concrete problems

They are incredibliy helpful for getting the edge cases and to find WHAT questions to ask, and start by UNIT TESTING (TDD)

- Break it down!

Comment out the steps, your game plan and sets your mindset before start writing code

- Solve / Simplify

Solve what you can, start by the simpler parts, ingore the tricky parts and then incorporate them

- Look back and Refactor

Solving a problem is not the end of the strategy, figure it HOW it can perform better, balance it with legibility, ask yourself if theres a different approach for solving it

### Problem Solving Patterns

Common patterns or sort of "Architectures/Mechanisms" for solving common problems found

#### Frequency Counters

This patters uses objects or sets to collect values/frequencies of values

This can often avoid the need for nested loops or O(n^2) operations with arrays / strings

We use an object to collect values and their frequencies, useful for algorithms when you need to compare multiple values and if they consist of similar values, if they are anagrams for another, if a value is contained inside the other value.

To compare and count frequencies

##### Why its a good apporach

Because usually is O(N) against easier approaches, which generally involves nested loops O(N^2)

#### Multiple pointers Pattern

Creating pointers or values that correspond to an index or position and then moves towards the beginning, end or middle based on a certain condition.

Very efficient for solving problems with minimal space complexity as well

#### Sliding Window Pattern

Involves creating a WINDOW which can either be an array or a number from one position to another

Depending on a certain condition, the window either increases or closes (and a new window is created)

Very useful for keeping track of a subset of data in an array/string etc

#### Divide and Conquer

This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data

This pattern can tremendously decrease time complexity

## Recursion

A process that calls itself

### Call Stack

In almost all programming languages, there is a built in data structure that manages what happens when functions are invoked

In JS, its called _The Call Stack_; It's a stack data structure, any time a function is invoked is placed (pushed) on top of the stack.

When JS sees the _return_ keyword or when the functions ends, the compiler will remove it (pop).

In recursive functions, we keep pushing new functions (the same) onto the call stack!

### Parts of a recursive functions

1. Base Case
1. Different Input

### When things go wrong

1. No base
1. Forgetting to return a value
1. Stack overflow!

### Helper Method Recursion

It's a pattern where the function its defined as an outer function that holds the result of a recursive inner function.

### Pure Recursion

- For arrays use slice, the spread operator, concat
- Strings are immutable so you need to use method like slice, substr or substring
- To make copies of objects use Object.assign or the spread operator

## Searching Algorithms

### Linear Search

It goes in one direction until it reaches a result or its end.

O(n)
O(1)

### Binary Search

It MUST be used on a sorted data structure.

Creates a pivot, around the half of the structure, compares if the searching parameter is below or above the pivot and repeats the process with the slice of the data containing the value, repeats the process recursively until it reaches the value to be found (or not found)

O(log(n)) - Time
O(1) - Space

## Sorting Algorithms

Sorting is the process of rearranging the items in a collection (e.g an array) so that the items are in some kind of order

Examples

- Sorting numbers from smallest to largest
- Sorting names alphabetically
- Sorting movies based on release year
- Sorting movies based on revenue

### Sorting Importance

- Sorting is an incredibly common task, so it's good to know how it works
- There are many different ways to sort things, and different techniques have their own advantages and disadvantages

#### Objectives

Understand simple sorting algorithms

- Bubble Sort
- Selection Sort
- Insertion Sort

#### Javascript built-in Sort

- Accepts an optional comparator function with which we will tell JS how we want it to sort
- The comparators looks at pairs of elements (a and b), determines their sort order based on the return value
  - If it returns a negative number, a should come _before_ b
  - If it returns a positive number, a should come _after_ b
  - If it returns 0, they are the same so they get paired together

#### Bubble Sort Algorithm

A sorting algorithm where the largest value will bubble up to the top!

It's not that efficient, it has a good use case where it excels.

##### Before we sort, we must swap

Many sorting algorithms involve some type of swapping functionality (e.g swapping to numbers to put them in order)

#### Selection Sort Algorithm

Similar to the bubble sort, but it places the smallest at the beginning

##### Advantages

- Selection Sort Algorithm performs less swappings than Bubble Sort

## Data Structures

ES6 Classes

- Classes are blueprints that when created make objects known as instances
- Classes are created with the new Keyword
- The Constructor function is a special function that gets run when the class is instantiated
- Instance Methods can be added to classes similar to methods in objects
- Class Methods can be added using the static keyword

### Singly Linked List

- What is a Singly Linked List?
- Compare and contrast Linked List with Arrays
- Implement Insertion, Removal, Transversal methods on Singly Linked List

A Data Structure as a collection of nodes, any item is linked to another one by pointers
in a SINGLE direction

It has a HEAD, a TAIL and a LENGTH

#### SLL Performance

- Insert · 0(1)
- Removal · It depends... O(1) if is the beginning, 0(n) if is the very last item
- Searching · O(n)
- Access · O(n)

### Doubly Linked List

Almost identical to Singly Linked List except there is an additional pointer to previous nodes
Better than SLL for finding nodes and can be done in half the time
However, they do take more memory considering the extra pointer

#### DLL Performance

- Insert · 0(1)
- Removal · 0(1)
- Searching · 0(n)
- Access 0(n)

### Stacks

- Last In First Out (LIFO)
- Linked list, push put in the beginning, pop takes away the first element
- Staks are used to handle function invocations (call stack)
- Operations like undo redo, and for routing
- There are not built in data structure in JS, but they are relatively simple to implement

#### Queues

Similar to a stack, but works in First In First On (FIFO)
