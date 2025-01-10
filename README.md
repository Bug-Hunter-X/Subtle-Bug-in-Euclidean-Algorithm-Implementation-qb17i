# Subtle Bug in Euclidean Algorithm Implementation

This repository demonstrates a subtle bug in a JavaScript implementation of the Euclidean algorithm for finding the greatest common divisor (GCD) of two numbers.  The original code fails when one or both inputs are negative numbers.  The solution provides a corrected version that handles negative inputs correctly.

## Bug Description

The provided JavaScript function `myFunction` correctly calculates the GCD for positive integers but produces incorrect results or enters an infinite loop when negative numbers are involved. This is due to the use of `Math.abs` without proper consideration of the sign when subtracting the numbers.

## Solution

The solution addresses this issue by ensuring that both `a` and `b` are always non-negative before performing the subtraction. The corrected algorithm maintains the correctness of the GCD calculation while handling negative numbers without issues.

## How to Run

1. Clone this repository.
2. Open `bug.js` to see the buggy code and `bugSolution.js` for the corrected version.
3. Run the Javascript files in a browser console or using Node.js to observe the different outputs.