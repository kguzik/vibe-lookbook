export const componentsContent = {
  title: 'Component Library',
  subtitle: 'A reference of all UI components and their variants.',
  sections: {
    buttons: {
      heading: 'Buttons',
      variants: {
        primary: 'Primary',
        secondary: 'Secondary',
        ghost: 'Ghost',
      },
      sizes: {
        sm: 'Small',
        md: 'Medium',
        lg: 'Large',
      },
    },
    inputs: {
      heading: 'Inputs',
      default: {
        label: 'Default input',
        placeholder: 'Type something...',
      },
      withError: {
        label: 'Input with error',
        placeholder: 'Type something...',
        error: 'This field is required.',
      },
      withHint: {
        label: 'Input with hint',
        placeholder: 'Type something...',
        hint: 'A short hint below the field.',
      },
    },
    divider: {
      heading: 'Divider',
      withLabel: 'or',
    },
    errorMessage: {
      heading: 'Error Message',
      example: 'Something went wrong. Please try again.',
    },
    hero: {
      heading: 'Hero',
      title: 'Your AI-styled',
      accentWord: 'lookbook',
      subtitle:
        'Upload a selfie, pick your vibe, and get editorial looks you can shop.',
      primaryButton: { label: 'Get started', href: '#' },
      secondaryButton: { label: 'Learn more', href: '#' },
    },
    smallHero: {
      heading: 'Small Hero',
      title: 'Privacy Policy',
      subtitle: 'Last updated: June 2026',
    },
    contentList: {
      heading: 'Content List',
      items: [
        {
          heading: 'First item',
          body: 'Description for the first item in the list.',
        },
        {
          heading: 'Second item',
          body: 'Description for the second item in the list.',
        },
        {
          heading: 'Third item',
          body: 'Description for the third item in the list.',
        },
      ],
    },
    twoColumnContent: {
      heading: 'Two Column Content',
      columns: [
        { heading: 'Credits', body: 'You have no credits yet.' },
        {
          heading: 'My Lookbooks',
          body: "You haven't generated any lookbooks yet.",
        },
      ] as [
        { heading: string; body: string },
        { heading: string; body: string },
      ],
    },
    typography: {
      heading: 'Typography',
      h1: 'Heading 1',
      h2: 'Heading 2',
      h3: 'Heading 3',
      h4: 'Heading 4',
      h5: 'Heading 5',
      h6: 'Heading 6',
      paragraph: 'The quick brown fox jumps over the lazy dog.',
      label: 'Label style',
      labelAccent: 'Label accent style',
    },
  },
}
