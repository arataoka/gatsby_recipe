const setupTags = recipes => {
  const allTags = {}

  // オブジェクト { Dinner: 1 } のように保存をする。
  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }
    })
  })
  // [[key, val],[key,val]]の配列に変換する
  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a //keyを取り出す
    const [secondTag] = b
    return firstTag.localeCompare(secondTag) //keyの文字列の順番を並び替える
  })

  return newTags
}

export default setupTags
