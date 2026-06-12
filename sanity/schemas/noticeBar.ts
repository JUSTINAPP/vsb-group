import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'noticeBar',
  title: 'Notice Bar',
  type: 'document',
  fields: [
    defineField({
      name: 'enabled',
      title: 'Enabled',
      type: 'boolean',
      initialValue: false,
      description: 'Show or hide the notice bar',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'string',
      description: 'Primary line — e.g. closure notice or special hours',
    }),
    defineField({
      name: 'secondaryMessage',
      title: 'Secondary Message (optional)',
      type: 'string',
      description: 'Second line shown below the primary message — e.g. standing hours info',
    }),
    defineField({
      name: 'backgroundColour',
      title: 'Background Colour',
      type: 'string',
      initialValue: '#f3efe4',
      description: 'Hex colour for the notice bar background',
    }),
    defineField({
      name: 'textColour',
      title: 'Text Colour',
      type: 'string',
      initialValue: '#1A1916',
      description: 'Hex colour for the notice bar text',
    }),
  ],
  preview: {
    select: { title: 'message', enabled: 'enabled' },
    prepare({ title, enabled }) {
      return {
        title: title ?? 'Notice Bar',
        subtitle: enabled ? 'Enabled' : 'Disabled',
      }
    },
  },
})
