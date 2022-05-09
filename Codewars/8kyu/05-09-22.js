// Alan Partridge II - Apple Turnover

/*Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.*/

// Solution

function apple(x){
    if (x ** 2 > 1000) {
      return "It's hotter than the sun!!"
    } else {
      return "Help yourself to a honeycomb Yorkie for the glovebox."
    }
  }

// Is this my tail?

/*Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!
If the tail is right return true, else return false.*/

// Solution

function correctTail(body, tail) {
    let sub = body.substr(body.length-(tail.length))
    
    if (sub === tail) {
      return true
    } else {
      return false
    }
  }