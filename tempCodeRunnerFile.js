var container = $('.horizontal-scroll')
var appendTo = container.find('.h-inner-scroll')
var menuItems = appendTo.find('div')
var paddingSize = 50

container.scrollTop(paddingSize)

container.scroll(function () {
  menuItems.each(function () {
    var object = $(this)
    var posLeft = $(this).offset().left
    var minWidth = $(this).outerWidth(true)
    var sum = - (minWidth + paddingSize)
    var containerWidth = minWidth * (menuItems.length - 1)
    
    if (posLeft <= sum) {
      appendTo.append(object)
    }  else if (posLeft >= containerWidth) {
      appendTo.prepend(object) 
    }
    
    if (container.scrollTop() == 0) {
      container.scrollTop(paddingSize)
    }
  })
})