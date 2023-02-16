# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

I added more comments and made the code more readable by using more descriptions. I also renamed the main variable to make it more clear what it is about.
Given that the functionality not to be changed, I only added a try-catch block to make sure that it always prints what went wrong and always returns the default trivial key. It simply made it easier for me to understand what is the default behavior if something goes wrong. I added a few more tests to make sure that the function works as expected for all known input scenarios.
