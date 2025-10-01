const mockEvents = [
  { id: 'e1', title: 'Smart India Hackathon 2025', date: '2025-10-15', location: 'New Delhi', price: 0, description: 'Nationwide hackathon encouraging innovative solutions for real-world problems.' },
  { id: 'e2', title: 'Diwali Mela & Cultural Fest', date: '2025-11-02', location: 'Mumbai Exhibition Grounds', price: 299, description: 'Celebrate Diwali with food stalls, crafts, cultural performances, and fun activities for families.' },
  { id: 'e3', title: 'Dadityrath Religious Festival', date: '2025-09-28', location: 'Varanasi', price: 199, description: 'Annual religious and cultural festival with traditional rituals, music, and spiritual gatherings.' },
  { id: 'e4', title: 'Techfest IIT Bombay', date: '2025-12-05', location: 'IIT Bombay', price: 499, description: 'India’s largest technical and robotics festival featuring workshops, competitions, and keynote talks.' },
  { id: 'e5', title: 'India Art Fair', date: '2025-11-12', location: 'New Delhi', price: 599, description: 'A platform for contemporary art exhibitions, galleries, and live art performances.' },
  { id: 'e6', title: 'Sunburn Music Festival', date: '2025-12-20', location: 'Goa', price: 1999, description: 'One of Asia’s biggest electronic dance music festivals on the beach.' },
  { id: 'e7', title: 'Bengaluru Tech Conference', date: '2025-10-25', location: 'Bengaluru International Exhibition Center', price: 1499, description: 'Conference focused on emerging tech, startups, and innovations in IT.' },
  { id: 'e8', title: 'Jaipur Literature Festival', date: '2025-01-18', location: 'Jaipur', price: 499, description: 'World’s largest free literary festival with authors, workshops, and debates.' },
  { id: 'e9', title: 'Chennai Marathon', date: '2025-08-10', location: 'Chennai Marina Beach', price: 199, description: 'Annual marathon promoting fitness, charity, and sports culture.' },
  { id: 'e10', title: 'Kolkata International Film Festival', date: '2025-11-15', location: 'Kolkata', price: 799, description: 'Showcasing international and independent films with discussions and workshops.' },
  { id: 'e11', title: 'Mumbai Comic Con', date: '2025-09-05', location: 'Mumbai', price: 599, description: 'Pop culture convention for comics, gaming, and cosplay enthusiasts.' },
  { id: 'e12', title: 'Goa Carnival', date: '2025-02-20', location: 'Goa', price: 299, description: 'Traditional carnival with parades, music, and dance performances.' },
  { id: 'e13', title: 'Hyderabad Food Festival', date: '2025-10-18', location: 'Hyderabad', price: 399, description: 'Food festival featuring local cuisines, live cooking shows, and workshops.' },
  { id: 'e14', title: 'Pune Startup Conclave', date: '2025-09-30', location: 'Pune', price: 999, description: 'Event for startups to pitch ideas, network, and meet investors.' },
  { id: 'e15', title: 'Indian Classical Music Night', date: '2025-11-22', location: 'Chennai Music Hall', price: 499, description: 'Evening of traditional Indian classical performances by renowned artists.' },
  { id: 'e16', title: 'Rann Utsav', date: '2025-12-10', location: 'Kutch, Gujarat', price: 1299, description: 'Cultural festival in the White Desert with folk music, crafts, and adventure activities.' },
  { id: 'e17', title: 'Delhi Startup Hackathon', date: '2025-10-28', location: 'Delhi NCR', price: 0, description: 'Hackathon for young innovators to solve real-world problems with tech solutions.' },
  { id: 'e18', title: 'Indian Dance Festival', date: '2025-11-05', location: 'Bengaluru', price: 399, description: 'A celebration of classical and contemporary dance performances across India.' },
  { id: 'e19', title: 'Mumbai Film & Web Series Fest', date: '2025-12-02', location: 'Mumbai', price: 699, description: 'Screenings and discussions of indie films and web series from India and abroad.' },
  { id: 'e20', title: 'Kerala Backwater Yoga Retreat', date: '2025-09-25', location: 'Alleppey, Kerala', price: 2499, description: '3-day wellness retreat with yoga sessions, meditation, and Ayurvedic experiences.' }
];


export function fetchEventsMock() {
  return new Promise((resolve) => setTimeout(() => resolve([...mockEvents]), 300));
}

export function fetchEventByIdMock(id) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const ev = mockEvents.find((e) => e.id === id);
      ev ? resolve(ev) : reject(new Error('Event not found'));
    }, 200)
  );
}
