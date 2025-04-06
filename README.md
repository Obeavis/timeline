# Timeline App 📅

A simple and interactive timeline.

## What I Like About This Implementation 💡

- **Dynamic Drag-and-Drop**: The timeline items can be dragged and repositioned.
- **Responsive Design**: The application is fully responsive, ensuring usability across devices of all sizes.
- **Reusable Components**: The project is structured with reusable components, making it easy to extend and maintain.
- **TailwindCSS Integration**: Styling is consistent and efficient, thanks to the utility-first approach of TailwindCSS.
- **Zoom Functionality**: Users can zoom in and out of the timeline, offering flexibility in viewing events.

---

## What I Would Change If I Were to Do It Again 🔄

- **Drag-and-Drop**: I would add a library like react-dnd to improve the user experience with drag and drop.
- **State Management**: Introduce a more robust state management library like Redux or Zustand to handle complex interactions and improve scalability and save chages in the local storage.
- **Custom Animations**: Add smooth animations for dragging and zooming to enhance the user experience further.
- **Theming**: Implement a light/dark mode toggle for better user customization and/or way to the user manually change the card color.

---

## Design Decisions 🎨

- **Inspiration**: The design was minimally inspired on Airtable timeline.
- **Utility-First Styling**: TailwindCSS was chosen for its flexibility and speed in building consistent styles.
- **Randomized Colors**: To differentiate timeline lanes and items visually, random colors were assigned, adding a playful and dynamic touch.

---

## How I Would Test This With More Time 🧪

- **Unit Tests**: Write comprehensive unit tests for all components using a testing library like React Testing Library and Vitest.
- **Integration Tests**: Test interactions between components, such as dragging items and updating the timeline.
- **End-to-End Tests**: Use a tool like Cypress or Puppeteer to simulate user interactions and ensure the application behaves as expected.
- **Performance Testing**: Test the application with large datasets to identify and resolve performance bottlenecks.
- **Cross-Browser Testing**: Ensure compatibility across all major browsers and devices.
- **Accessibility Testing**: Use tools like Axe or Lighthouse to identify and fix accessibility issues.

---

## Technologies Used 🚀

- **React**: Library for building the user interface.
- **Vite**: Fast build tool for development.
- **TypeScript**: Superset of JavaScript for static typing.
- **TailwindCSS**: For styling the interface.

---

## Prerequisites 📦

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## How to Run the Project ⚙️

### 1. Clone the repository

```bash
git clone https://github.com/Obeavis/timeline.git
```
### 2. Navigate to the project directory
```bash
cd timeline
```
### 3. Install dependencies
Using npm:
```bash
npm install
```
Or using yarn:
```bash
yarn install
```

### 4. Start the development server
Using npm:
```bash
npm run dev
```
Or using yarn:
```bash
yarn dev
```

The project will be available at http://localhost:3000.

### 5. Folder Structure 📁 
```bash
src/
├── data/             # The data items
├── components/       # Reusable components
├── hooks/            # Custom hooks
├── libs/             # Utility functions and static data
├── services/         # The data services
```
