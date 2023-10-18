'use server'
import { aggregateDB } from './db'

export async function getImages(section) {
  const data = await aggregateDB(process.env.SECTION_IMAGE_FOLDER, [
    section === 'all'
      ? { $match: { _id: { $exists: true } } }
      : { $match: { section } },
    {
      $lookup: {
        from: 'user',
        localField: 'userId',
        foreignField: '_id',
        as: 'user',
      },
    },
    { $unwind: '$user' },
    {
      $project: {
        createdAt: 1,
        title: 1,
        section: 1,
        username: '$user.username',
      },
    },
  ])
  const result = data.map((item) => {
    return {
      ...item,
      path: `${process.env.SECTION_IMAGE_FOLDER}/${item._id}`,
    }
  })
  return result
}
