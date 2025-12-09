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
