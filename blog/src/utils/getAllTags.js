export const getAllTags = () => {
    const dublicatedArr = arr.map((e) => {
        return [...e.tag_list];
    })
    .flat()

    return [...new Set(dublicatedArr)]
}