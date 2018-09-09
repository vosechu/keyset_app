$(document).ready(function () {
  const tmpl = (content, bgColor, textColor, size, spacing, weight) => `
    <div class="face"
         style="background-color: ${bgColor};
                color: ${textColor};
                font-size: ${size};
                letter-spacing: ${spacing};
                font-weight: ${weight}
                ">
      <span class="face-content">${content}</span>
    </div>
  `

  window.colors = {}
  $('#colors-map dd').each(function (index, color) {
    const $color = $(color)

    window.colors[$color.data('color-id')] = {
      bgColor: $color.data('bg-color'),
      textColor: $color.data('text-color')
    }
  })

  $('.keycap').each(function (index, keycap) {
    const $keycap = $(keycap)

    const content   = $keycap.data('content')
    const upContent = $keycap.data('upper-content') || ""
    const colorId   = $keycap.data('color-id')
    const bgColor   = window.colors[colorId].bgColor
    const textColor = window.colors[colorId].textColor

    let displayText = content

    // Add the second line of content on to the first
    if (upContent) {
      displayText = upContent + "<br />" + content
    }

    if (content.length == 1 && upContent.length == 0) {
      // Standard single alpha
      size    = "1.6em"
      spacing = "normal"
      weight  = "100"

    } else {
      // Significantly reduced size for longer legends
      size = "0.7em"
      if (content.length > 5 || upContent.length > 5) {
        size = "0.6em"
      }

      // Squish everything together for longer legends
      spacing = "normal"
      if (content.length > 4 || upContent.length > 0) {
        spacing = "-0.06em"
      }
      if (content.length > 5 || upContent.length > 5) {
        spacing = "-0.15em"
      }

      // Bold the shifted alphas since their size is greatly reduced
      weight = "100"
      if (content.length == 1 && upContent.length == 1) {
        weight = "200"
      }
    }

    // Last chance to override things
    size    = size    ? size    : $keycap.data('size')
    spacing = spacing ? spacing : $keycap.data('spacing')
    weight  = weight  ? weight  : $keycap.data('weight')

    let face = tmpl(displayText, bgColor, textColor, size, spacing, weight);

    $keycap.append(face)
  })
})
