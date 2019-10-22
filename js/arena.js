import Gladiator from './gladiator.js'

export default class Arena {

  constructor(name) {
    this.gladiators = []
    this.name = name.charAt(0).toUpperCase()+ name.substring(1,name.length)
  }

   addGladiator(gladiator) {
            if (this.gladiators.length < 2) {
       this.gladiators.push(new Gladiator(gladiator.name, gladiator.weapon))
        }else{
         return 'Erorr:alreadu have two Gladiators'
        }
       }
       

  fight(){
    switch (this.gladiators[0].weapon) {
        case 'Trident':
            if (this.gladiators[1].weapon === 'Spear') { this.gladiators.pop()} else {this.gladiators.shift()}
            return `${this.gladiators[0].name} is the winner`;
        case 'Spear':
            if (this.gladiators[1].weapon === 'Club') {  this.gladiators.pop()} else {    this.gladiators.shift()}
            return `${this.gladiators[0].name} is the winner`;
        case 'Club':
            if (this.gladiators[1].weapon === 'Trident') {   this.gladiators.pop()} else {   this.gladiators.shift()}
            return `${this.gladiators[0].name} is the winner`;              
    }
}

}


