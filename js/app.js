// Plain JavaScript version - no Node.js needed. Edit contact, links and properties in js/data.js
const $ = s => document.querySelector(s)
let timer
const ICONS = {
  Instagram: 'M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A4.5 4.5 0 1112 16.5a4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM17.3 5.7a1 1 0 110 2 1 1 0 010-2z',
  Facebook: 'M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.7V4.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.3H7.5V14h2.8v8h3.2z',
  YouTube: 'M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.2 5 12 5 12 5s-6.200 0-7.800.4A2.500 2.500 0 002.400 7.200C2 8.800 2 12 2 12s0 3.200.4 4.800a2.500 2.500 0 001.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.500 2.500 0 001.800-1.800c.4-1.600.4-4.800.4-4.800s0-3.200-.4-4.800zM10 15V9l5.200 3L10 15z'
}
const socials = () => `<div class="socials">${SOCIALS.map(s => `<a href="${s.url}" target="_blank" rel="noreferrer" aria-label="${s.name}" title="${s.name}"><svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="${ICONS[s.name]}"/></svg></a>`).join('')}</div>`
const NAV = [['/', 'Home'], ['/homes', 'Homes'], ['/why', 'Why Us'], ['/locations', 'Locations'], ['/owners', 'For Owners'], ['/contact', 'Contact']]
const WHY = [['No brokerage', 'Deal directly with us. What you see is what you pay.'], ['Prime locations', 'Close to tech parks, metro lines, schools and daily essentials.'], ['Premium amenities', 'Modern interiors, lifts, power backup and secure buildings.'], ['Hassle-free payments', 'Simple, transparent rent and deposit with clear paperwork.']]
const BEN = ['Move-in ready, furnished homes', 'Verified buildings and owners', 'Transparent pricing, no hidden charges', 'Responsive maintenance support', 'Flexible, clear rental agreements', 'Dedicated help from enquiry to key handover']
const TEST = [['Priya S.', 'Software Engineer', 'No broker, no drama. I saw the flat on Monday and moved in that weekend.'], ['Arjun & Meera', 'Couple, HSR Layout', 'The home looked exactly like the photos. Payments were completely straightforward.'], ['Rahul K.', 'Product Designer', 'Premium finish, and the team actually picks up the phone when something needs fixing.']]
const TYPES = ['Studio', '1 BHK', '2 BHK', '3 BHK']
const opts = (arr, sel, any) => `<option value="">${any}</option>` + arr.map(a => `<option ${a === sel ? 'selected' : ''}>${a}</option>`).join('')

const header = path => `<header class="hdr" data-hero="${['/', '/why', '/locations'].includes(path) ? 1 : 0}"><a href="#/" class="logo"><span>S</span>Standard Living</a>
<nav id="nav">${NAV.map(([t, l]) => `<a href="#${t}" class="${path === t ? 'on' : ''}">${l}</a>`).join('')}</nav><button class="burger" id="burger" aria-label="Menu">☰</button></header>`
const footer = () => `<footer class="ft"><div><a href="#/" class="logo"><span>S</span>Standard Living</a><p>Premium rental homes in Bengaluru. No brokerage.</p></div>
<div class="fl">${NAV.map(([t, l]) => `<a href="#${t}">${l}</a>`).join('')}</div>
<div><a href="mailto:${CONTACT.email}">${CONTACT.email}</a><br><a href="tel:${CONTACT.tel}">${CONTACT.phone}</a>${socials()}</div>
<small>© ${new Date().getFullYear()} Standard Living Homes. All rights reserved.</small></footer>`
const card = p => `<a href="#/property/${p.id}" class="card"><div class="ph"><img src="${p.images[0]}" alt="${p.name}"><span class="tag">${p.type}</span></div>
<div class="cb"><h3>${p.name}</h3><div class="muted">${p.area}, Bengaluru</div><div class="meta">${p.beds} bed · ${p.baths} bath · ${p.sqft} sq ft</div><div class="price">${money(p.rent)}</div></div></a>`

const home = () => `<section class="hero"><img class="show" src="images/hero1.jpg" alt=""><img src="images/hero2.jpg" alt="">
<video autoplay muted loop playsinline src="videos/hero.mp4" onerror="this.remove()"></video><div class="shade"></div>
<div class="heroTxt"><h1>Rent a home that feels<br>like it was made for you.</h1><p>Zero brokerage. Furnished, move-in ready homes in Bengaluru's best neighbourhoods.</p><a href="#/homes" class="btn">Browse homes</a></div>
<form class="search" id="hs"><label>Location<select name="area">${opts(AREAS, '', 'Any area')}</select></label><label>Home type<select name="type">${opts(TYPES, '', 'Any')}</select></label><button class="btn">Search rentals</button></form></section>
<section id="why" class="sec"><h2>Why Standard Living</h2><div class="grid4">${WHY.map(([t, d]) => `<div class="tile"><h3>${t}</h3><p>${d}</p></div>`).join('')}</div></section>
<section class="sec alt"><div class="rowhead"><h2>Featured homes</h2><a href="#/homes" class="lnk">View all →</a></div><div class="grid3">${PROPS.slice(0, 3).map(card).join('')}</div></section>
<section id="locations" class="sec"><h2>Locations</h2><div class="chips">${AREAS.map(a => `<a href="#/homes?area=${encodeURIComponent(a)}" class="chip">${a}</a>`).join('')}</div></section>
<section class="sec navy"><h2>Benefits</h2><ul class="ben">${BEN.map(b => `<li>${b}</li>`).join('')}</ul></section>
<section class="sec"><h2>What residents say</h2><div class="grid3">${TEST.map(([n, r, q]) => `<blockquote><p>${q}</p><footer><b>${n}</b><span>${r}</span></footer></blockquote>`).join('')}</div></section>
<section class="sec cta"><h2>Own a building?</h2><p>List it with Standard Living and get quality tenants without the hassle.</p><a href="#/owners" class="btn">List your building</a></section>`

const homes = q => { const a = q.get('area') || '', t = q.get('type') || ''; const l = PROPS.filter(p => (!a || p.area === a) && (!t || p.type === t))
  return `<section class="page"><h1>Homes for rent</h1><div class="filters"><select id="fa">${opts(AREAS, a, 'All areas')}</select><select id="ft">${opts(TYPES, t, 'All types')}</select></div>
<div class="grid3">${l.map(card).join('')}</div>${l.length ? '' : '<p class="muted">No homes match yet. Try another filter.</p>'}</section>` }

const pdp = id => { const p = PROPS.find(x => x.id === id)
  if (!p) return '<section class="page"><h1>Property not found</h1><a href="#/homes" class="lnk">← Back to homes</a></section>'
  return `<section class="page"><a href="#/homes" class="lnk">← All homes</a><div class="pdp"><div>
<img class="big" id="big" src="${p.images[0]}" alt="${p.name}"><div class="thumbs">${p.images.map((s, n) => `<img src="${s}" alt="" class="${n ? '' : 'on'}" data-src="${s}">`).join('')}<div class="slot">+ Add photo</div></div>
${p.video ? `<video controls class="big" src="${p.video}"></video>` : '<div class="slot vslot">Property video goes here</div>'}
<h2>About this home</h2><p>${p.about}</p><h2>Amenities</h2><div class="chips">${p.amenities.map(a => `<span class="chip">${a}</span>`).join('')}</div>
${p.map ? `<p><a class="lnk" href="${p.map}" target="_blank" rel="noreferrer">View on Google Maps →</a></p>` : ''}</div>
<aside class="box"><span class="tag dark">${p.type}</span><h1>${p.name}</h1><div class="muted">${p.area}, Bengaluru</div><div class="price lg">${money(p.rent)}</div>
${p.deposit ? `<div class="muted">Deposit ₹${p.deposit.toLocaleString('en-IN')}</div>` : ''}<div class="meta">${p.beds} bed · ${p.baths} bath · ${p.sqft} sq ft</div><div class="nobrok">✓ No brokerage</div>
<a class="btn full" href="tel:${CONTACT.tel}">Call ${CONTACT.phone}</a><a class="btn ghost full" href="mailto:${CONTACT.email}?subject=${encodeURIComponent('Enquiry: ' + p.name)}">Email enquiry</a></aside></div></section>` }

const fld = (n, l, t = 'text', ph = '') => `<label>${l}<input name="${n}" type="${t}" placeholder="${ph}" ${ph ? '' : 'required'}></label>`
const owners = () => `<section class="page narrow"><h1>List your building</h1><p class="muted">Share your building details and our team will get in touch.</p>
<form class="form" id="of">${fld('Owner name', 'Owner name')}${fld('Phone', 'Phone number', 'tel')}${fld('Email', 'Email', 'email')}${fld('Building', 'Building name')}${fld('Address', 'Address / locality')}${fld('Units', 'Number of units / floors')}
${fld('Unit types', 'Unit types', 'text', 'e.g. 1 BHK, 2 BHK')}${fld('Expected rent', 'Expected rent', 'text', 'Per month')}${fld('Amenities', 'Amenities', 'text', 'Lift, parking, power backup…')}
<label>Anything else<textarea name="Notes" rows="4"></textarea></label><div class="slot">Photos and videos: attach them to the email that opens, or add an upload field when a backend is ready</div>
<button class="btn full">Submit building details</button><p class="muted" id="sent"></p></form></section>`
const contact = () => `<section class="page narrow"><h1>Contact us</h1><p class="muted">Questions about a home or a listing? Reach out.</p><div class="box"><p><b>Phone</b><br><a class="lnk" href="tel:${CONTACT.tel}">${CONTACT.phone}</a></p><p><b>Email</b><br><a class="lnk" href="mailto:${CONTACT.email}">${CONTACT.email}</a></p><p><b>Follow us</b></p>${socials()}</div></section>`

function render() {
  clearInterval(timer)
  const [path, qs] = (location.hash.slice(1) || '/').split('?'), q = new URLSearchParams(qs || '')
  let page
  if (['/', '/why', '/locations'].includes(path)) page = home()
  else if (path === '/homes') page = homes(q)
  else if (path.startsWith('/property/')) page = pdp(path.split('/')[2])
  else if (path === '/owners') page = owners()
  else if (path === '/contact') page = contact()
  else page = '<section class="page"><h1>Page not found</h1><a href="#/" class="lnk">Go home</a></section>'
  $('#app').innerHTML = header(path) + page + footer()
  if (path === '/why' || path === '/locations') setTimeout(() => $('#' + path.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 50); else scrollTo(0, 0)
  const imgs = document.querySelectorAll('.hero > img')
  if (imgs.length) { let i = 0; timer = setInterval(() => { imgs[i].classList.remove('show'); i = (i + 1) % imgs.length; imgs[i].classList.add('show') }, 5000) }
  onScroll()
}
function onScroll() { const h = $('.hdr'); if (h) h.classList.toggle('solid', scrollY > 60 || h.dataset.hero !== '1' || $('#nav').classList.contains('open')) }
addEventListener('scroll', onScroll); addEventListener('hashchange', render); addEventListener('DOMContentLoaded', render)
document.addEventListener('click', e => {
  if (e.target.id === 'burger') { $('#nav').classList.toggle('open'); onScroll() }
  else if (e.target.closest('#nav a')) $('#nav').classList.remove('open')
  const th = e.target.closest('.thumbs img'); if (th) { $('#big').src = th.dataset.src; document.querySelectorAll('.thumbs img').forEach(i => i.classList.toggle('on', i === th)) }
})
document.addEventListener('change', e => { if (e.target.id === 'fa' || e.target.id === 'ft') location.hash = '/homes?area=' + encodeURIComponent($('#fa').value) + '&type=' + encodeURIComponent($('#ft').value) })
document.addEventListener('submit', e => {
  e.preventDefault(); const f = e.target
  if (f.id === 'hs') location.hash = '/homes?area=' + encodeURIComponent(f.area.value) + '&type=' + encodeURIComponent(f.type.value)
  if (f.id === 'of') { const body = [...new FormData(f)].map(([k, v]) => k + ': ' + v).join('\n'); location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('New building listing: ' + f.Building.value)}&body=${encodeURIComponent(body)}`; $('#sent').textContent = 'Your email app should open with the details. Send it to complete your submission.' }
})
