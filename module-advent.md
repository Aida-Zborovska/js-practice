## Challenge 8: find the unique toy

Santa 🎅 wants to know what the first non-repeated letter is in a toy's name 🎁.

Write a function that takes a string and returns the first letter that is not
repeated, ignoring uppercase and lowercase when counting, but returning the
letter as it appears in the string.

If there is none, return an empty string ("").

Examples:

findUniqueToy('Gift') // 'G' // ℹ️ The G is the first letter that is not
repeated // and we return it exactly as it appears

findUniqueToy('sS') // '' // ℹ️ The letters are repeated, since it doesn't
distinguish uppercase

findUniqueToy('reindeeR') // 'i' // ℹ️ The r is repeated (even if it's
uppercase) // and the e as well, so the first one is 'i'

// More cases: findUniqueToy('AaBbCc') // '' findUniqueToy('abcDEF') // 'a'
findUniqueToy('aAaAaAF') // 'F' findUniqueToy('sTreSS') // 'T'
findUniqueToy('z') // 'z'

## Challenge 9: the Reno robot aspirator

The elves have built a robot vacuum reindeer 🦌 (@) to tidy up the workshop a
bit for Christmas.

The reindeer moves on a board to pick things up from the floor (\*) and must
avoid obstacles (#).

You will receive two parameters:

board: a string that represents the board. moves: a string with the moves: 'L'
(left), 'R' (right), 'U' (up), 'D' (down). Movement rules:

If the reindeer goes off the board or crashes into an obstacle (#) → return
'crash'. If the reindeer picks something up from the floor (\*) during the moves
→ return 'success'. If the reindeer doesn’t pick anything up and doesn’t crash →
return 'fail'. Important: Keep in mind that in the board the first and last
lines are blank and must be discarded.

## Challenge 10: Depth of Christmas Magic

At the North Pole, Santa Claus is reviewing the magical letters 📩✨ he receives
from children all over the world. These letters use an ancient Christmas
language in which the brackets [ and ] represent the intensity of the wish.

The deeper the nesting of the brackets, the stronger the wish. Your mission is
to find out the maximum depth at which the [] are nested.

But be careful! Some letters may be poorly written. If the brackets are not
properly balanced (if one closes before it opens, there are extra closing
brackets, or closing brackets are missing), the letter is invalid and you must
return -1.

## Challenge 11: Unwatched gifts

The Grinch wants to steal the Christmas presents from the warehouse. To do this,
he needs to know which presents are not under surveillance.

The warehouse is represented as an array of strings (string[]), where each
present (\*) is protected if its position is next to a camera (#). Each empty
space is represented with a dot (.).

Your task is to count how many presents are not under surveillance, meaning they
do not have any adjacent camera (up, down, left, or right).

Keep in mind: only the 4 cardinal directions are considered "adjacent", not
diagonals.

Presents in the corners or at the edges can be unguarded, as long as they do not
have cameras directly next to them.
