import './style.css'
import { levels, tooltips } from './data'

var currentLvl = Number(localStorage.getItem('currentLvl')) || 0, isCleaorange = false

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

const levelsWrapper = document.querySelector('#levelsWrapper')

const levelsContainer = levelsWrapper.querySelector('#levels')

const colorClass = document.querySelector('#colorClass')

const defaultCss = document.querySelector('#defaultCss')

const tooltip = document.querySelector('.tooltip')

let pName = 'justify-content'

levelIndicator.addEventListener('click', () => {
    levelsWrapper.classList.toggle('hidden')
})

document.addEventListener('click', (e) => {
    if (e.target?.className.includes) {
        if (!e.target?.className.includes('inLevelSelector')) levelsWrapper.classList.add('hidden')
        if (e.target?.className.includes('help')) loadTooltip(e.target)
        else tooltip?.classList.add('hidden')
    }
    if (e.target.tagName + e.target.parentElement?.className === 'CODEopts') updateProperty(pName, e.target.innerText.replace(' (default)', ''))

    if (e.target.id === 'instructions') {
        instructions.classList.toggle('collapsed')
        localStorage.setItem('isInstructionsCollapsed', !instructions.classList.contains('collapsed') ? '' : true)
    }
})
instructions.classList.toggle('collapsed',localStorage.getItem('isInstructionsCollapsed'))


levels.forEach((level) => {
    const button = document.createElement('span')
    button.textContent = level.id
    button.dataset.level = level.id;

    (level.id == currentLvl + 1) && button.classList.add('active');

    (localStorage.getItem(`level-${level.id}-cleared`)) && button.classList.add('cleared')

    button.addEventListener('click', () => {
        loadLevel(level)
        levelsWrapper.classList.add('hidden')
    })
    levelsContainer.appendChild(button)
})

function loadTooltip(elem) {
    pName = elem.innerText
    tooltip.innerHTML = tooltips[pName]
    tooltip.classList.toggle('hidden')
    const rect = elem.getBoundingClientRect()
    tooltip.style.left = scrollX + rect.left + 'px'
    tooltip.style.top = scrollY + (rect.bottom + 15) + 'px'
}


function loadLevel(level) {
    clearCss()

    const savedCode = localStorage.getItem(`level-${level.id}-code`)

    foreground.innerHTML = ''
    background.innerHTML = ''
    code.value = savedCode || ''

    instructions.innerHTML = level.info

    levelIndicator.textContent = `Level ${level.id} of ${levels.length} ▾`

    if (level.styleMode === 0) {
        cirCode.parentElement.style.display = 'none'
        fgCode.appendChild(code)
    } else {
        cirCode.parentElement.style.display = 'block'
        cirCode.appendChild(code)
    }
    setLines(level.lines)
    level.items.forEach(item => {
        const fish = document.createElement('div')
        const pot = document.createElement('div')
        fish.classList.add('fish')
        fish.classList.add(item)
        fish.dataset.type = item

        pot.classList.add('pot')
        pot.classList.add(item)
        pot.dataset.type = item

        foreground.appendChild(fish)
        background.appendChild(pot)
    })
    setCss('pot', level, level.style)
    setCss('fish', level, code.value)

    defaultCss.textContent = level.deafultCss.split(';').join(';\n  ').trim()

    if (level.styleMode != 0) colorClass.textContent = level.styleMode



    localStorage.setItem('currentLvl', level.id - 1)

    document.querySelector(`[data-level="${currentLvl + 1}"]`).classList.remove('active')
    currentLvl = level.id - 1
    document.querySelector(`[data-level="${currentLvl + 1}"]`).classList.add('active')

    // Disable buttons at bounds
    left.classList.toggle('disabled', currentLvl === 0)
    right.classList.toggle('disabled', currentLvl === levels.length - 1)
}


function clearCss() {
    ['.blue', '.orange', '.purple'].forEach(c => document.querySelectorAll(c).forEach(fish => fish.style = ''))
    foreground.style = background.style = ''
}

function setCss(type, level, code) {
    code = level.deafultCss + code
    if (level.styleMode === 0) (type == 'fish' ? foreground : background).style = code
    else document.querySelectorAll(`.${type}.${level.styleMode}`).forEach(fish => fish.style = code)
}


function setLines(lines) {
    const lineHeight = 24
    code.rows = lines
    code.style.height = lineHeight * lines + 'px'

    code.addEventListener('input', () => {
        const contentLines = code.value.split('\n')
        if (contentLines.length > levels[currentLvl].lines) {
            code.value = contentLines.slice(0, lines).join('\n')
        }
        localStorage.setItem(`level-${currentLvl + 1}-code`, code.value)
    })
}

function check() {
    const fishs = document.querySelectorAll('.fish')
    const pots = document.querySelectorAll('.pot')

    const isCleaorange = Array.from(fishs).every(fish => {
        const fishRect = fish.getBoundingClientRect()

        return Array.from(pots).some(pot => {
            const potRect = pot.getBoundingClientRect()
            return (
                fishRect.left >= potRect.left &&
                fishRect.right <= potRect.right &&
                fishRect.top >= potRect.top &&
                fishRect.bottom <= potRect.bottom &&
                fish.dataset.type === pot.dataset.type
            )
        })
    })

    return isCleaorange
}


function updateProperty(pName, pValue) {
    if (pValue.includes('integer')) pValue = '0'

    const tokens = code.value.trim().split(/[\n:;]+/).filter(Boolean)
    const keywords = new Set(Object.keys(tooltips))
    let content = '', filled = false

    tokens.forEach((token, i) => {
        const trimmedToken = token.trim()
        if (!keywords.has(trimmedToken)) return

        if (trimmedToken === pName && !filled) {
            content += `${content ? '\n' : ''}${trimmedToken}: ${pValue};`
            filled = true
        } else {
            const nextToken = tokens[i + 1]?.trim() || ''
            const val = keywords.has(nextToken) ? '' : nextToken
            content += `${content ? '\n' : ''}${trimmedToken}: ${val};`
        }
    })

    if (!filled) {
        content += `${content ? '\n' : ''}${pName}: ${pValue};`
    }

    code.value = content
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
    if (!isCleaorange) return
    right.click()
})

document.querySelector('#reset').addEventListener('click', () => {
    if (confirm('Are you sure you want to reset your progress?')) {
        localStorage.clear()
        location.reload()
    }
})


let lastCheckTime = 0
const checkInterval = 200

function loop(timestamp) {
    if (timestamp - lastCheckTime >= checkInterval) {
        setCss('fish', levels[currentLvl], code.value)
        if (check()) {
            isCleaorange = true
            localStorage.setItem(`level-${currentLvl + 1}-cleared`, true)
            document.querySelector(`[data-level="${currentLvl + 1}"]`).classList.add('cleared')
            nextBtn.classList.toggle('disabled', !isCleaorange)
        } else {
            isCleaorange = false
            localStorage.setItem(`level-${currentLvl + 1}-cleared`, '')
            document.querySelector(`[data-level="${currentLvl + 1}"]`).classList.remove('cleared')
            nextBtn.classList.add('disabled')
        }
        lastCheckTime = timestamp
    }

    requestAnimationFrame(loop)
}

requestAnimationFrame(loop)

loadLevel(levels[currentLvl])
