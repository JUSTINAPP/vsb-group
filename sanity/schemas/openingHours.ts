import { defineField, defineType } from 'sanity'

const dayField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'object',
    fields: [
      defineField({ name: 'isOpen', title: 'Open', type: 'boolean', initialValue: true }),
      defineField({ name: 'open', title: 'Opens', type: 'string', placeholder: '12:00 pm' }),
      defineField({ name: 'close', title: 'Closes', type: 'string', placeholder: 'Late' }),
    ],
  })

export default defineType({
  name: 'openingHours',
  title: 'Opening Hours',
  type: 'document',
  fields: [
    dayField('monday', 'Monday'),
    dayField('tuesday', 'Tuesday'),
    dayField('wednesday', 'Wednesday'),
    dayField('thursday', 'Thursday'),
    dayField('friday', 'Friday'),
    dayField('saturday', 'Saturday'),
    dayField('sunday', 'Sunday'),
    defineField({
      name: 'specialNote',
      title: 'Special Note',
      type: 'string',
      description: 'Displayed below hours — e.g. "Closed public holidays"',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Opening Hours' }
    },
  },
})
