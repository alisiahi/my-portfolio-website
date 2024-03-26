# Portfolio Website

This repository contains the code for my personal portfolio website where I showcase my skills, abilities, and projects I have worked on. Additionally, you will find information about my background, education, and work experience.

## Technologies Used

- **Language**: TypeScript
- **Framework**: Next.js
- **CMS**: Hygraph (headless CMS)
- **Styling**: Tailwind CSS with Shadcn UI
- **Animation**: Framer Motion

## Key Features

- Utilized GraphQL and Hygraph for content management, enabling seamless integration of dynamic content.
- Implemented multiple themes using Next themes, offering users a choice of various color schemes.
- Employed Tailwind CSS with Shadcn UI components for the frontend, ensuring a responsive and visually appealing design.
- Added animations using Framer Motion to enhance the user experience and functionality of the website.

## Project Structure


- **RootLayout**: Defines the layout structure of the website, including header, footer, and theme provider.
- **Home**: Homepage component rendering the hero section, about section, and work section.
- **Projects**: Component displaying a grid of project cards with filtering options.
- **Contact**: Contact page displaying contact information and a contact form.

### `components`

- **Header**: Component rendering the header section of the website.
- **Footer**: Component rendering the footer section of the website.
- **ThemeProvider**: Component managing the theme configuration and switching.
- **Toaster**: Component for displaying notifications.
- **Hero**: Component rendering the hero section with a brief introduction and call-to-action buttons.
- **About**: Component displaying personal information, qualifications, and skills.
- **Work**: Component displaying the latest projects with a carousel for navigation.
- **ProjectCard**: Component rendering individual project cards.
- **Socials**: Component rendering social media icons.

### `hooks`

- **useScrollProgress**: Custom hook to track scroll progress on the website.

### `lib`

- **API functions**: Functions to fetch data from GraphQL endpoint (personal info, experiences, educations, skills, projects).
- **Types**: TypeScript interfaces defining the structure of fetched data.

## How to Run

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Run the development server using `npm run dev`.
4. Access the website locally on [http://localhost:3000](http://localhost:3000).

## Contributions

Contributions, bug reports, and feature requests are welcome. Please open an issue or submit a pull request to contribute to this project.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to reach out if you have any questions, feedback, or inquiries!
