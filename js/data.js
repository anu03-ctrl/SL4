// ===== EDIT THIS FILE to change contact info, links and properties =====
const CONTACT = { email: 'standardlivinghomes@gmail.com', phone: '+91 70907 75757', tel: '+917090775757' }
const SOCIALS = [
  { name: 'Instagram', url: 'https://www.instagram.com/standardlivingbng/' },
  { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61588676804218' },
  { name: 'YouTube', url: 'https://www.youtube.com/channel/UCn_baIMlJKtQFD7EOmTkNHA' },
]
// Photos/videos live in /public/images and /public/videos. Add as many as you like per property.
const A = 'images/hero1.jpg', B = 'images/hero2.jpg'
// rent: put a number (monthly, in rupees) when you have it; null shows "Price on request"
const PROPS = [
  { id: 'sl-1', name: 'Standard Living Residency', area: 'Whitefield', type: '1 BHK', beds: 1, baths: 1, sqft: 520, rent: null, deposit: null, video: '', images: [A, B], amenities: ['Lift', 'Power backup', 'Covered parking', 'Fully furnished'], about: 'Bright, fully furnished 1 BHK with marble-finish flooring, modular kitchen and a ready-to-use living room.', map: '' },
  { id: 'sl-2', name: 'Standard Living Heights', area: 'Marathahalli', type: '2 BHK', beds: 2, baths: 2, sqft: 880, rent: null, deposit: null, video: '', images: [B, A], amenities: ['Lift', 'Security', 'Power backup', 'Wi-Fi ready'], about: 'Spacious 2 BHK close to the ORR tech corridor, designed for families and sharing professionals.', map: '' },
  { id: 'sl-3', name: 'Standard Living Court', area: 'HSR Layout', type: '1 BHK', beds: 1, baths: 1, sqft: 560, rent: null, deposit: null, video: '', images: [A, B], amenities: ['Lift', 'CCTV', 'Water purifier'], about: 'Compact, premium 1 BHK in a calm lane, minutes from cafes and the metro.', map: '' },
  { id: 'sl-4', name: 'Standard Living Park', area: 'Electronic City', type: '2 BHK', beds: 2, baths: 2, sqft: 900, rent: null, deposit: null, video: '', images: [B, A], amenities: ['Gym', 'Parking', 'Security', 'Power backup'], about: 'Well-lit 2 BHK with a clean modular kitchen and generous storage.', map: '' },
  { id: 'sl-5', name: 'Standard Living Square', area: 'Indiranagar', type: 'Studio', beds: 1, baths: 1, sqft: 380, rent: null, deposit: null, video: '', images: [A, B], amenities: ['Lift', 'Fully furnished', 'Wi-Fi ready'], about: 'A smart studio for one, moments from Indiranagar\'s best streets.', map: '' },
  { id: 'sl-6', name: 'Standard Living Greens', area: 'Hebbal', type: '3 BHK', beds: 3, baths: 3, sqft: 1250, rent: null, deposit: null, video: '', images: [B, A], amenities: ['Lift', 'Parking', 'Security', 'Balcony'], about: 'Family-sized 3 BHK with airy rooms and easy access to the airport road.', map: '' },
]
const AREAS = ['Whitefield', 'Marathahalli', 'HSR Layout', 'Electronic City', 'Indiranagar', 'Hebbal']
const money = (n) => (n ? '₹' + n.toLocaleString('en-IN') + ' / month' : 'Price on request')
