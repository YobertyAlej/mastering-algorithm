# Mastering Algorithm by Colt Steele

Designed to solve Dynamic Programming problems, excel searching algorithms, sorting algorithms, data structures from scratch, including linked lists, trees, heaps, hash tables, and graphs.

## Big O Notation - Branch 0-big-o-notation

Why do we need Big O Notation?

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

Faster code:

If you decide to measure your code using time as metric you will find out that it's hard to rely on it.

Mainly because time may differ from machine to machine, and most importantly, the time may differ in the SAME machine.

So, what do we do?

We compare the _number_ of simple operations the computer has to perform
