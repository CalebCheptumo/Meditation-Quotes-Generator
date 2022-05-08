const quotesArr = [
    `"Brilliant things happen in calm minds. Be calm. You're brilliant."`,
    `"To know yourself is to be confident. To be confident is to fearlessly express your potential."`,
    `"A day thinking about what could happen, should happen, or what might have been is a day missed."`,
    `"Creativity is as boundless, spacious and limitless as the sky. We are born with it. It cannot be lost and it cannot be destroyed. It can only be forgotten."`,
    `"Distractions are everywhere. Notice what takes your attention, acknowledge it, and then let it go."`,
    `"Remember the blue sky. It may at times be obscured by clouds, but it is always there."`,
    `"Look up and smile. But only if you feel like it."`,
    `"So much time and effort is spent on wanting to change, trying to change, to be somebody different, better, or new. Why not use this time to get comfortable with yourself as you are instead?"`,
    `"To know one's own mind is nothing short of life-changing. "`,
    `"Meditation nourishes the mind in the same way that food nourishes the body."`,
    `"In the midst of movement and chaos, keep stillness inside of you."`,
    `"Life is short. We can live it lost in thought or we can choose to be present as life unfolds around us."`,
    `"Meditation means letting go of our baggage, letting go of all the pre-rehearsed stories and inner-dialogue that we’ve grown so attached to."`,
    `"Mindfulness allows us to live life fully. Fully aware, fully awake, fully alive."`,
    `"We can't control the sea, but we can learn how to surf the waves."`,
    `"There is no good or bad meditation — there is simply awareness or non-awareness. To begin with, we get distracted a lot. Over time, we get distracted less. Be gentle with your approach, be patient with the mind, and be kind to yourself along the way."`,
    `"Everyone has a little madness on the inside. The skill is in understanding the madness, and then being at ease with it."`,
    `"Meditation is not about having yet another new strategy of self-help plan, but rather providing a framework in which to see yourself more clearly."`,
    `"The quieter you become, the more you can hear."`,
    `"larity dictates our perspective, and our perspective dictates our experience. Get more clarity in your life."`,
    `"Now is a great time to be present. Now is good, too. And now."`,
    `"The heart of meditation is taking ourselves a little less seriously."`,
    `"It is not that thinking is bad, and non-thinking is good. True freedom is when we are equally content, no matter what arises in the mind; free from bias, beyond any idea of thought versus no-thought, or this versus that."`,
    `"No matter how fast life is moving around us, there is always a place of stillness inside."`,

]

const button = document.querySelector('button')
const pEL =  document.querySelector('p')

button.addEventListener('click' , () => {
    let random = Math.floor(Math.random() * quotesArr.length)
    pEL.innerText = quotesArr[random]

})