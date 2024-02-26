'use server'
import prisma from '@lib/prisma'

export async function getImages(section) {
  const data = await prisma.sectionImage.findMany({
    ...{
      include: {
        author: true,
      },
    },
    ...(section == 'all'
      ? {}
      : {
          where: {
            section,
          },
        }),
  })
  const result = data.map((item) => {
    return {
      ...item,
      path: `${item.pathPrefix}/${item.id}`,
    }
  })
  return result
}
