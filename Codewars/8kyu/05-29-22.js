// Chuck Norris VII - True or False? (Beginner)

/*It's a well known fact that anything Chuck Norris wants, he gets. As a result Chuck very rarely has to use the word false.

It is a less well known fact that if something is true, and Chuck doesn't want it to be, Chuck can scare the truth with his massive biceps, and it automatically becomes false.

Your task is to be more like Chuck (ha! good luck!). You must return false without ever actually using the word false...*/

// Solution

function ifChuckSaysSo(){
    return !(true)
  }

// Grasshopper - Terminal Game #1

/*In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:
attribute 	value
name 	user argument or 'Hero'
position 	'00'
health 	100
damage 	5
experience 	0 */

// Solution

function Hero (name) {
    this.name = name || 'Hero'
    this.position = '00'
    this.health = 100
    this.damage = 5
    this.experience = 0
  }