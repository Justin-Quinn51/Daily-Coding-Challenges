// Find the vowels

/*
We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].
*/

// Solution

function vowelIndices(word){
  let vowels = ['a', 'e', 'i', 'o', 'u', 'y']
  let answer = []
  word.toLowerCase().split('').forEach((letter, index) => {
    if (vowels.includes(letter)) {
      answer.push(index + 1)
    }
  })
  return answer
}