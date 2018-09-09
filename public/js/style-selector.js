$(document).ready(function () {
  window.colors = {}

  // Map over the color inputs and store them on window
  $('#colors-map dd').each(function (index, color) {
    const $color = $(color)

    window.colors[$color.data('color-id')] = {
      bgColor: $color.data('bg-color'),
      textColor: $color.data('text-color')
    }
  })

  // Add click handlers to all the style links
  $('#style-selector li a').each(function (index, style) {
    const $style = $(style)

    $style.on('click', styleUpdater)
  })
  $('#1-color').trigger('click')
})

function styleUpdater (e) {
  e.preventDefault()

  const $target = $(e.currentTarget)
  const newStyleId = $target.attr('id')
  const newStyle = window.colorStyles[newStyleId]

  newStyle.map(function (row, rowIndex) {
    row.map(function (colorId, colIndex) {
      const $keycap = $(`.keycap[data-row="${rowIndex+1}"][data-col="${colIndex+1}"] .face`)
      const color = window.colors[colorId]
      const bgColor = color.bgColor
      const textColor = color.textColor

      $keycap.css('background-color', bgColor)
      $keycap.css('color', textColor)
    })
  })
}

window.colorStyles = {}
window.colorStyles['1-color'] = [
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1, 1 ,1,1,1,1,1]
]
window.colorStyles['2-color'] = [
  [2,1,1,1,1,1,1,1,1,1,1,2],
  [2,1,1,1,1,1,1,1,1,1,1,2],
  [2,1,1,1,1,1,1,1,1,1,1,2],
  [2,1,1,1,1,1,1,1,1,1,1,2],
  [2,2,2,2,2, 1 ,2,2,2,2,2]
]
window.colorStyles['2-color-highlight'] = [
  [2,1,1,1,1,1,1,1,1,1,1,2],
  [2,1,1,1,1,1,1,1,1,1,1,2],
  [3,1,1,1,1,1,1,1,1,1,1,2],
  [2,1,1,1,1,1,1,1,1,1,1,3],
  [2,2,2,2,2, 3 ,2,2,2,2,2]
]
window.colorStyles['3-color'] = [
  [2,1,1,1,1,1,1,1,1,1,1,3],
  [2,1,1,1,1,1,1,1,1,1,1,3],
  [2,1,1,1,1,1,1,1,1,1,1,3],
  [2,1,1,1,1,1,1,1,1,1,1,3],
  [2,2,2,2,2, 1 ,3,3,3,3,3]
]
window.colorStyles['3-color-highlight'] = [
  [2,1,1,1,1,1,1,1,1,1,1,3],
  [2,1,1,1,1,1,1,1,1,1,1,3],
  [4,1,1,1,1,1,1,1,1,1,1,3],
  [2,1,1,1,1,1,1,1,1,1,1,4],
  [2,2,2,2,2, 4 ,3,3,3,3,3]
]
window.colorStyles['red-alert'] = [
  [2,2,2,2,2,2,2,2,2,2,2,2],
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1, 1 ,1,1,1,1,1]
]
window.colorStyles['right-arrow'] = [
  [1,1,1,1,1,1,1,3,1,1,1,1],
  [2,2,2,2,2,2,2,2,3,1,1,1],
  [3,3,3,3,3,3,3,3,3,3,1,1],
  [2,2,2,2,2,2,2,2,3,1,1,1],
  [1,1,1,1,1, 1 ,3,1,1,1,1]
]
window.colorStyles['pac-man'] = [
  [1,1,1,2,2,3,3,1,1,1,1,1],
  [1,1,2,2,3,3,1,1,1,1,1,1],
  [1,2,2,3,3,1,1,1,1,1,1,1],
  [1,1,2,2,3,3,1,1,1,1,1,1],
  [1,1,1,2,2, 3 ,1,1,1,1,1]
]
window.colorStyles['pac-man-5'] = [
  [1,1,1,2,2,3,3,4,4,5,5,5],
  [1,1,2,2,3,3,4,4,5,5,5,5],
  [1,2,2,3,3,4,4,5,5,5,5,5],
  [1,1,2,2,3,3,4,4,5,5,5,5],
  [1,1,1,2,2, 3 ,4,4,5,5,5]
]
window.colorStyles['vintage-1976'] = [
  [1,1,1,1,1,1,2,3,4,5,5,5],
  [1,1,1,1,1,2,3,4,5,5,5,5],
  [1,1,1,1,2,3,4,5,5,5,5,5],
  [1,1,1,2,3,4,5,5,5,5,5,5],
  [1,1,2,3,4, 5 ,5,5,5,5,5]
]
