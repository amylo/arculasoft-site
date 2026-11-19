// Company-level constants. Product-specific values live in `products` below.
export const company = {
  name: 'ArculaSoft',
  tagline: 'Thoughtful software for everyday problems.',
  description:
    'ArculaSoft builds small, focused apps for everyday problems: the tasks that are tedious, fiddly, or more annoying than they should be.',
  about: [
    'ArculaSoft builds small, focused apps for everyday problems: the tasks that are tedious, fiddly, or more annoying than they should be. Behind every app is more than 16 years of software development experience, and care for the small details that make software pleasant to use.',
    'The first app, Arcula, is a personal finance tracker. It lets you track your money and see how you’re doing, and it keeps your data on your device: no account, no bank linking, nothing shared with a fintech company.',
  ],
  contactEmail: 'amy.arcula@gmail.com',
};

export interface Product {
  name: string;
  /** Home of the product's pages, with leading and trailing slash. */
  path: string;
  category: string;
  tagline: string;
  description: string;
  platforms: string;
  /** Play Store listing URL once published. While null, the site shows
   *  "Coming soon to Google Play" instead of a link. */
  playStoreUrl: string | null;
}

export const arcula: Product = {
  name: 'Arcula',
  path: '/arcula/',
  category: 'Personal finance',
  tagline: 'Keep your finances private.',
  description:
    'Arcula is an offline-first personal finance app. Your data stays on your device: no account, no server, no bank linking, no trackers.',
  platforms: 'Android now · iOS later',
  playStoreUrl: null,
};

// Listed in the Products section on the home page, in this order.
export const products: Product[] = [arcula];
