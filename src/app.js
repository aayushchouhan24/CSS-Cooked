import './style.css'
import { levels } from './levels'

const G = 'green', R = 'red', Y = 'yellow', D = 0

var currentLvl = localStorage.getItem('currentLvl') || 0, isCleared = false


const background = document.querySelector('#background')
const foreground = document.querySelector('#foreground')
const fgCode = document.querySelector('#fgCode')
const cirCode = document.querySelector('#cirCode')

const instructions = document.querySelector('#instructions')

const left = document.querySelector('.arrow.left')
const right = document.querySelector('.arrow.right')

const nextBtn = document.querySelector('#next')

const levelIndicator = document.querySelector('#level-indicator')

const code = document.querySelector('#code')


function loadLevel(level) {

    const savedCode = localStorage.getItem(`level-${level.id}-code`)

    foreground.innerHTML = ''
    background.innerHTML = ''
    code.value = savedCode || ''

    instructions.innerHTML = level.info

    levelIndicator.textContent = `Level ${level.id} of ${levels.length}`

    if (level.styleMode === 0) {
        cirCode.parentElement.style.display = 'none'
        fgCode.appendChild(code)
    } else {
        cirCode.parentElement.style.display = 'block'
        cirCode.appendChild(code)
    }
    setLines(level.lines)
    level.items.forEach(item => {
        const circle = document.createElement('div')
        const ring = document.createElement('div')
        circle.classList.add('circle')
        circle.classList.add(item)

        ring.classList.add('ring')
        ring.classList.add(item)

        foreground.appendChild(circle)
        background.appendChild(ring)
    })
    setCss('ring', level, level.style)

    localStorage.setItem('currentLvl', level.id - 1)
    currentLvl = level.id - 1

    // Disable buttons at bounds
    left.classList.toggle('disabled', currentLvl === 0)
    right.classList.toggle('disabled', currentLvl === levels.length - 1)
}


function setCss(type, level, code) {
    if (level.styleMode === 0) (type == 'circle' ? foreground : background).style = code
    else document.querySelectorAll(`.${type}.${level.styleMode}`).forEach(circle => circle.style = code)
}


function setLines(lines) {
    const lineHeight = 24
    code.rows = lines
    code.style.height = lineHeight * lines + 'px'

    code.addEventListener('input', () => {
        const contentLines = code.value.split('\n')
        if (contentLines.length > lines) {
            code.value = contentLines.slice(0, lines).join('\n')
        }
        localStorage.setItem(`level-${currentLvl + 1}-code`, code.value)
    })
}

function check() {
    const circles = document.querySelectorAll('.circle')
    const rings = document.querySelectorAll('.ring')

    const isCleared = Array.from(circles).every(circle => {
        const circleRect = circle.getBoundingClientRect()
        const circleColor = getComputedStyle(circle).getPropertyValue('--color').trim()

        return Array.from(rings).some(ring => {
            const ringRect = ring.getBoundingClientRect()
            const ringColor = getComputedStyle(ring).getPropertyValue('--color').trim()

            return (
                circleRect.left >= ringRect.left &&
                circleRect.right <= ringRect.right &&
                circleRect.top >= ringRect.top &&
                circleRect.bottom <= ringRect.bottom &&
                circleColor === ringColor
            )
        })
    })

    return isCleared
}

left.addEventListener('click', () => {
    if (currentLvl === 0) return
    loadLevel(levels[currentLvl - 1])
})

right.addEventListener('click', () => {
    if (currentLvl === levels.length - 1) return
    loadLevel(levels[currentLvl + 1])
})

nextBtn.addEventListener('click', () => {
    if (!isCleared) return
    right.click()
})


let lastCheckTime = 0
const checkInterval = 200

function loop(timestamp) {
    if (timestamp - lastCheckTime >= checkInterval) {
        setCss('circle', levels[currentLvl], code.value)
        if (check()) {
            isCleared = check()
            nextBtn.classList.toggle('disabled', !isCleared)
        } else {
            isCleared = false
            nextBtn.classList.add('disabled')
        }
        lastCheckTime = timestamp
    }

    requestAnimationFrame(loop)
}

requestAnimationFrame(loop)

loadLevel(levels[currentLvl])
