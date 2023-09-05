'use strict'
const { prompt } = require('../')

prompt({
  type: 'autocomplete',
  name: 'actor',
  message: 'Pick your favorite actor',
  initial: 1,
  limit: 3,
  suggest: (input, choices) => choices.filter(i => i.title.toLowerCase().includes(input.toLowerCase())),
  choices: [
    { title: 'Cage' },
    { title: 'Clooney', value: 'silver-fox' },
    { title: 'Gyllenhaal' },
    { title: 'Gibson' },
    { title: 'Grant', description: 'This option has a description.' },
    { title: 'Hanks' },
    { title: 'Downey Jr.' }
  ],
  fallback: {
    title: `This is the fallback. Its value is 'fallback'`,
    value: 'fallback'
  }
}).then(data => {
  console.log('>>>', data)
})
