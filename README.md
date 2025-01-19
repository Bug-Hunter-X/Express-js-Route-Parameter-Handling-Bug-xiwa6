# Express.js Route Parameter Handling Bug

This repository demonstrates a common bug in Express.js route parameter handling and its solution.

## Bug Description

The bug occurs when a route parameter is missing or invalid.  Instead of gracefully returning a 404 error, the server crashes or returns a 500 Internal Server Error. This is because the code doesn't handle cases where a user might request an invalid user ID, leading to errors during the database query.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install` to install the required packages.
3. Run `node bug.js` to start the server.
4. Try accessing `/users/1` (valid ID) which should return a user object.
5. Try accessing `/users/invalid` or `/users` (invalid or missing ID) which should result in a server error rather than a 404.

## Solution

The solution involves adding error handling to properly manage situations where a route parameter is missing or invalid.  It should always return a user friendly error response (404).

## Solution Implementation

The solution is provided in `bugSolution.js`