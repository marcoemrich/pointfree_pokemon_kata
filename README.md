# pointfree_pokemon_kata


Purpose
-------
Use this Kata as an exercise for the Pointfree-Programming style in JavaScript. You will need a Functional Programming library to perform this kind of programming style in JS. Imho Ramda (http://ramdajs.com/) is currently the best option.

Dependencies
------------
Included in the Repository is the Jasmine-Testing Framework (http://jasmine.github.io) and the functional programming library Ramda.

How to use the Kata
-------------------
Just open the SpecRunner.html in a browser. It runs the unit tests/specs. Your goal are to

 1. fix the spec "Pokemon-Kata should find the nearest distance to a Pokemon of type 'Normal"
 2. write the body of the pending spec "Pokemon-Kata should find the name of the nearest Pokemon of type 'Normal'" and provide a working implementation

You can use the prepared functions "x", "y", "square" and "distance".

Challenges/Constraints
----------------------
These are various things, you could try out to spice up the kata.

* Be a 100% strict about using pointfree style: no function-keywords or =>-Operators at all.
* Find a balanced approach to pointfree style, e.g. use traditional style functions or lambdas where it makes sense. Are there places where beeing a 100% strict would lead to unreadable code (aka pointless style :) ?
* Try to find different algorithms/approaches (especially for goal 2). What data needs to travel which parts of the pipeline?
* Come up with your own alternative implementation of the distance-function.
* Use transducers for lazy evaluation.

Notes
-----
* the Pointfree Pokemon Kata was first used for the #ramdajs session @ #socrates16
* You don't need to touch the specs for distance and square. They are just here for information/completeness purposes.
* the implementation of the prepared function "distance" might give you an idea for a solution - or it might limit your solution space. In the latter case it might be best to not look at the implementation of distance at all :)
* a good way to share (or maybe discuss) your solution is to fork the kata-repo on github. - no pull requests with solutions please :)

Reads/Talks on Pointfree Programming
------------------------------------
* https://en.wikipedia.org/wiki/Tacit_programming
* http://randycoulman.com/blog/2016/06/21/thinking-in-ramda-pointfree-style/
* https://wiki.haskell.org/Pointfree
* http://lucasmreis.github.io/blog/pointfree-javascript/
* http://bahmutov.calepin.co/point-free-programming-is-not-pointless.html
* https://www.youtube.com/watch?v=m3svKOdZijA&app=desktop
