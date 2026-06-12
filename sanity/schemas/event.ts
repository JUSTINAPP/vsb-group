import { defineField, defineType, defineArrayMember } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  groups: [{ name: 'seo', title: 'SEO & Social' }],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'price',
      title: 'Ticket Price',
      type: 'string',
      description: 'e.g. "$65 per person" or "Free" or leave blank',
    }),
    defineField({
      name: 'bookingsRequired',
      title: 'Bookings Required',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'bookingLink',
      title: 'Booking Link',
      type: 'string',
      description: 'Full URL (https://...) or relative path (/functions)',
    }),
    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Overrides the page title in Google. Leave blank to use the event title.',
      group: 'seo',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      description: 'Target 150–160 characters. Shown in Google search results.',
      group: 'seo',
    }),
    defineField({
      name: 'ogImage',
      title: 'Social Share Image',
      type: 'image',
      description: 'Image shown when shared on social media. Uses event image if blank.',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'image',
    },
    prepare({ title, date, media }) {
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString('en-AU') : '',
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Date, Upcoming First',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],
})
