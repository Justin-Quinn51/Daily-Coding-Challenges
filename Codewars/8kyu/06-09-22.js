// Define a card suit

/*You get any card as an argument. Your task is to return the suit of this card (in lowercase).*/

// Solution

const defineSuit = card => card.includes('♠') ? 'spades' : card.includes('♦') ? 'diamonds' : card.includes('♥') ? 'hearts' : 'clubs'

// Man in the west

/*A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.

So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.
*/

// Solution

const checkTheBucket = bucket => bucket.includes('gold')