import fs from 'fs'
import path from 'path'

const html = fs.readFileSync('_ico-page.html', 'utf8')
const titles = ['Free', 'Transparent', 'Democratic', 'Uncensorable', 'Cross-platform', 'Risk Free']
const dir = 'public/images/benefits'
fs.mkdirSync(dir, { recursive: true })

const re = /<span class="card-icon-wrapper[^"]*">\s*(<svg[\s\S]*?<\/svg>)/g
let m
let i = 0
while ((m = re.exec(html)) && i < titles.length) {
  const svg = m[1].replace(/<svg/, '<svg fill="#fff"')
  const slug = titles[i].toLowerCase().replace(/[^a-z0-9]+/g, '-')
  fs.writeFileSync(path.join(dir, `ico-benefit-${slug}.svg`), svg)
  i++
}
console.log('wrote', i, 'icons')
