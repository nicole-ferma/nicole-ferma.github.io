const path = document.getElementById('path')
const pathLength = path.getTotalLength()

path.style.strokeDasharray = pathLength + ' ' + pathLength
path.style.strokeDashoffset = pathLength

window.addEventListener('scroll', () => {
    const scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)
    const drawLength = pathLength * scrollPercentage
    path.style.strokeDashoffset = pathLength - drawLength
})
