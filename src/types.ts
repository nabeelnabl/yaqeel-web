export interface NavItem {
  label: string;
  href: string;
}

export interface Institution {
  name: string;
  logo: string;
  location?: string;
  type: string;
  studentsCount?: string;
}

export interface Feature {
  id: string;
  number: string;
  title: string;
  description: string;
  category: 'core' | 'academic' | 'operations' | 'communication';
  icon: string;
  badge?: string;
}

export interface ShowcaseFeature {
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  mockupType: 'attendance' | 'fees' | 'exams' | 'console';
}

export interface Testimonial {
  id: string | number;
  name?: string;
  role: string;
  institution: string;
  logo?: string;
  initials?: string;
  quote: string;
  rating?: number;
  verified?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface DemoFormData {
  name: string;
  institutionName: string;
  mobileNumber: string;
  email: string;
  studentCount: string;
  message: string;
}
