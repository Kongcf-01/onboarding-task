/** Scroll-reveal utilities — `.data-reveal` class + `data-revealed` attr via useIcoScrollReveal */

const hidden = 'anim-ready:opacity-0 anim-ready:will-change-[opacity,transform] anim-ready:backface-hidden'
const shown = 'revealed:opacity-100 revealed:translate-x-0 revealed:translate-y-0'

export const revealUp = `data-reveal ${hidden} anim-ready:translate-y-8 revealed:animate-reveal-up ${shown}`
export const revealUpSlow = `data-reveal ${hidden} anim-ready:translate-y-8 revealed:animate-reveal-up-slow ${shown}`
export const revealLeft = `data-reveal ${hidden} anim-ready:-translate-x-10 revealed:animate-reveal-left ${shown}`
export const revealRight = `data-reveal ${hidden} anim-ready:translate-x-10 revealed:animate-reveal-right ${shown}`
