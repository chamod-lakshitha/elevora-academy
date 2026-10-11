export type Course = { id: number; title: string; category: string; level: string; rating: string; students: string; instructor: string; duration: string; price: string; color: string; icon: string; description: string };
export const courses: Course[] = [
  { id: 1, title: 'French for Everyday Life', category: 'Languages', level: 'Beginner', rating: '4.9', students: '1.2k', instructor: 'Sophie Laurent', duration: '8 weeks', price: '$49', color: 'from-blue-700 to-violet-700', icon: 'FR', description: 'Build confidence with practical vocabulary, clear grammar and guided speaking practice.' },
  { id: 2, title: 'English Communication', category: 'Languages', level: 'All levels', rating: '4.8', students: '980', instructor: 'Amelia Carter', duration: '6 weeks', price: '$45', color: 'from-indigo-700 to-blue-500', icon: 'EN', description: 'Improve fluency and feel comfortable in everyday and professional conversations.' },
  { id: 3, title: 'Java Programming Essentials', category: 'Technology', level: 'Beginner', rating: '4.9', students: '760', instructor: 'Ethan Brooks', duration: '10 weeks', price: '$69', color: 'from-violet-700 to-fuchsia-600', icon: 'JAVA', description: 'Learn programming fundamentals and create your first practical applications.' },
  { id: 4, title: 'German Foundations', category: 'Languages', level: 'Beginner', rating: '4.7', students: '640', instructor: 'Daniel Weber', duration: '8 weeks', price: '$49', color: 'from-amber-500 to-orange-600', icon: 'DE', description: 'Start speaking German with structured lessons and useful real-world expressions.' },
  { id: 5, title: 'Python from Zero', category: 'Technology', level: 'Beginner', rating: '4.9', students: '1.1k', instructor: 'Ethan Brooks', duration: '9 weeks', price: '$65', color: 'from-sky-600 to-indigo-700', icon: 'Py', description: 'Understand core concepts, solve problems and build confidence with Python.' },
];
export const pillars = [
  { icon: '✦', title: 'Expert instructors', text: 'Learn with supportive educators who make complex ideas easier to understand.' },
  { icon: '◷', title: 'Flexible learning', text: 'Make progress around your schedule with learning designed for real life.' },
  { icon: '↗', title: 'Growth that lasts', text: 'Build practical skills and confidence you can carry into your next opportunity.' },
];
