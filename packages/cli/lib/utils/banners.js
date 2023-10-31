import { readFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import gradient from 'gradient-string'


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


function bannerGradient(gradientColors, string) {
    return gradient(gradientColors)(string)
}


export function logArtFromFile (filePath, operation = () => {}) {
    const file = readFileSync(
    join(__dirname, filePath),
    'utf-8'
    )
    if (operation) {
        const lines = file.split('\n')
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i]
            const modifiedLine = operation(line)
            console.log(modifiedLine)
        }
    } else {
        console.log(file)
    }
}

export function logAxionBanner () {
    const gradientColors = [
        '#c06efa',
        '#bc6df8',
        '#b86bf6',
        '#b46af3',
        '#b068f1',
        '#ac67ef',
        '#a865ed',
        '#a364ea',
        '#9f62e8',
        '#9b61e6',
        '#975fe3',
        '#935ee1',
        '#8f5ddf',
        '#8b5bdc',
        '#875ada',
        '#8358d8',
        '#7f57d5',
        '#7b55d3',
        '#7754d1',
        '#7352ce',
        '#6f51cc',
        '#6b50c9',
        '#674ec7',
        '#624dc5',
        '#5e4bc2',
        '#5a4ac0',
        '#5648bd',
        '#5247bb',
        '#4d46b8',
        '#4944b6',
        '#4443b3',
        '#4041b1',
        '#3b40af',
        '#363eac',
        '#313daa',
        '#2b3ca7',
        '#253aa5',
        '#1f39a2',
        '#1737a0',
        '#0d369d',
    ]
    const filePath = '../../assets/banner.art'
    function bannerGradientOperation(line) {
        if (typeof line === 'string') {
            return bannerGradient(gradientColors, line)
        }
    }
    logArtFromFile(filePath, bannerGradientOperation)
}
