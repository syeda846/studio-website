// Shared service CTA selection. Form validation and submission UI live in React.
export default function contactForm({ $, listen }) {
 const chips = $('chips')
 listen(chips, 'click', (event) => {
  const button = event.target.closest('button')
  if (!button || !chips.contains(button)) return
  const selected = button.classList.toggle('on')
  button.setAttribute('aria-pressed', String(selected))
 })
 document.querySelectorAll('[data-pre]').forEach((button) => {
  listen(button, 'click', () => {
   const interest = button.dataset.pre
   $('m').value = `I am interested in: ${interest}.\n`
   const service = interest.startsWith('Redesign') ? 'Redesign' : interest === 'Ongoing support' ? 'Support' : interest
   chips.querySelectorAll('button').forEach((chip) => {
    const selected = chip.textContent === service
    chip.classList.toggle('on', selected)
    chip.setAttribute('aria-pressed', String(selected))
   })
   $('contact').scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', inline: 'nearest'})
  })
 })
}
