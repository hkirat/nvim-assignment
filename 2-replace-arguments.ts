/* Replace the arguments of the function below
 * They need to be flipped (childrenIds, courseId)
 * You can either
 * 1. Try to remove everything inside the brackets in a single command
 *    And then add back the args
 *  2. Or you can cut the second line and paste it above to flip the args
 */
export const getCurrentContentType = async (
  courseId: number,
  childrenIds: number[],
) => {
  if (childrenIds.length === 0) {
    return "folder";
  }

  const content = await db.content.findFirst({
    where: {
      id: childrenIds[childrenIds.length - 1],
    },
  });

  if (!content) {
    return "folder";
  }

  return content.type;
};
