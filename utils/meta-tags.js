const getMetaTags = (data) => {
  if (!data) return []

  const metaTags = []

  metaTags.push(
    {
      hid: 'og:title',
      property: 'og:title',
      content: data.title,
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    }
  )

  if (data.description) {
    metaTags.push(
      {
        hid: 'description',
        name: 'description',
        content: data.description,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: data.description,
      }
    )
  }

  if (data.image) {
    metaTags.push(
      {
        hid: 'og:image',
        property: 'og:image',
        content: data.image.media.url,
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: data.image.alt,
      }
    )
  }

  return metaTags
}

export default getMetaTags
