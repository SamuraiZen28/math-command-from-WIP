const {MessageEmbed} = require('discord.js');
const i = require('./../../colors')
module.exports = {
  name: 'solve',
  usage: 'sv 1 + 1\n!!sv 1 - 1\n!!sv 1 * 1\n!!sv 1 / 1\n!!sv round 1.5\n!!sv floor 1.5\n!!sv sqrt 27453',
  aliases: ['sv', 'math', 'maths'],
  description: 'solve an equation',
  category: 'Fun',
  run: async (client, message, args) => {
    let operatorArray = ['+', '-', '*', '/'];
    let firstNumber = args[0]
    let operator = args[1]
    let secondNumber = args[2]
     if(args[0] === 'round') {
      let roundNumber = args[1]
      if(!roundNumber) {
        message.reply(`specify the number you want to round`)
      } else if(isNaN(roundNumber)) {
        message.reply(`Thats not a number!`)
      } else {
        let result = Math.round(roundNumber);
        let roundEmbed = new MessageEmbed()
        .setTitle(`Round`)
        .setDescription(`**${roundNumber} -> ${result}**`)
        .setColor(i.nocolor)
        .setTimestamp()
        message.channel.send(roundEmbed)
      }
    } else if(args[0] === 'floor') {
      let floorNumber = args[1]
      if(!floorNumber) {
        message.reply(`specify the number you want to round`)
      } else if(isNaN(floorNumber)) {
        message.reply(`Thats not a number!`)
      } else {
        let result = Math.floor(floorNumber);
        let floorEmbed = new MessageEmbed()
        .setTitle(`Floor`)
        .setDescription(`**${floorNumber} -> ${result}**`)
        .setColor(i.nocolor)
        .setTimestamp()
        message.channel.send(floorEmbed)
      }
    } else if(args[0] === 'sqrt'){
     let sqrtNumber = args[1]
     if(!sqrtNumber) {
       message.reply(`Please specify a number`)
     } else if(isNaN(sqrtNumber)) {
       message.reply(`That is not a number!`)
     } else {
       let result = Math.sqrt(sqrtNumber)
        let sqrtEmbed = new MessageEmbed()
        .setTitle(`Square Root`)
        .setDescription(`**${sqrtNumber} -> ${result}**`)
        .setColor(i.nocolor)
        .setTimestamp()
       message.channel.send(sqrtEmbed)
     }
  } else {
    if(!firstNumber) {
      message.reply(`Please specify the first number of the equation`)
    } else if(isNaN(firstNumber)) {
      message.reply(`The first part/number of the equation was not a number`)
    } else if(!operator) {
      message.reply(`Please specify the operator.\nThese are the following operators you can use -> \`${operatorArray[0]}, ${operatorArray[1]}, ${operaterArray[2]}, ${operaterArray[3]}\``)
    } else if(!operatorArray.includes(operator)) {
      message.reply(`That is not a correct operator.\nThese are the following operators you can use -> \`${operatorArray[0]}, ${operatorArray[1]}, ${operaterArray[2]}, ${operaterArray[3]}\``)
    } else if(!secondNumber) {
      message.reply(`Please specify the second number of the equation`)
    } else if(isNaN(secondNumber)) {
      message.reply(`The second part/number of the equation was not a number`)
    } else if(operator === operatorArray[0]) {
      let result = parseInt(firstNumber) + parseInt(secondNumber)
      let addEmbed = new MessageEmbed()
      .setTitle(`Addition`)
      .setDescription(`**${firstNumber} + ${secondNumber} = ${result}**`)
      .setColor(i.nocolor)
      .setTimestamp()
      message.channel.send(addEmbed)
    } else if(operator === operatorArray[1]) {
      let result = parseInt(firstNumber) - parseInt(secondNumber)
       let subtractEmbed = new MessageEmbed()
       .setTitle(`Subtraction`)
      .setDescription(`**${firstNumber} - ${secondNumber} = ${result}**`)
      .setColor(i.nocolor)
      .setTimestamp()
      message.channel.send(subtractEmbed)
    } else if(operator === operatorArray[2]) {
      let result = parseInt(firstNumber) * parseInt(secondNumber)
       let multiplyEmbed = new MessageEmbed()
       .setTitle(`Multiplication`)
      .setDescription(`**${firstNumber} * ${secondNumber} = ${result}**`)
      .setColor(i.nocolor)
      .setTimestamp()
      message.channel.send(multiplyEmbed)
    } if(operator === operatorArray[3]) {
      let result = parseInt(firstNumber) / parseInt(secondNumber)
       let divideEmbed = new MessageEmbed()
      .setTitle(`Division`)
      .setDescription(`**${firstNumber} / ${secondNumber} = ${result}**`)
      .setColor(i.nocolor)
      .setTimestamp()
      message.channel.send(divideEmbed)
    }
  }
  }
}
