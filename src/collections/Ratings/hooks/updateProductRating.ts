import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

const recalculateRating = async (payload: any, productId: string | number) => {
  const ratings = await payload.find({
    collection: 'ratings',
    depth: 0,
    where: {
      product: {
        equals: productId,
      },
    },
  })

  const totalRatings = ratings.totalDocs
  const averageRating =
    totalRatings > 0
      ? ratings.docs.reduce((acc: number, curr: any) => acc + (curr.rating || 0), 0) / totalRatings
      : 0

  await payload.update({
    collection: 'products',
    id: productId,
    data: {
      averageRating,
      totalRatings,
    },
  })
}

export const afterChangeRating: CollectionAfterChangeHook = async ({ doc, req: { payload } }) => {
  const productId = typeof doc.product === 'object' ? doc.product.id : doc.product
  if (productId) {
    await recalculateRating(payload, productId)
  }
  return doc
}

export const afterDeleteRating: CollectionAfterDeleteHook = async ({ doc, req: { payload } }) => {
  const productId = typeof doc.product === 'object' ? doc.product.id : doc.product
  if (productId) {
    await recalculateRating(payload, productId)
  }
  return doc
}
