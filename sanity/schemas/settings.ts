import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'bookingUrl', title: 'SevenRooms Booking URL', type: 'url' }),
    defineField({ name: 'email', title: 'General Email', type: 'string' }),
    defineField({ name: 'functionsEmail', title: 'Functions / Events Email', type: 'string' }),
    defineField({ name: 'instagramUrl', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'facebookUrl', title: 'Facebook URL', type: 'url' }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' }
    },
  },
})
