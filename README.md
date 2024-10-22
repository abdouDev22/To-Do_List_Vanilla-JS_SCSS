# To-Do List with React, Vite, Vanilla JS, and SCSS

## Overview

This is a simple **To-Do List** application built using **ReactJS** and **Vite**. It is styled using **SCSS** and includes some custom **Vanilla JavaScript** functionalities. The purpose of this project is to demonstrate the basic principles of state management in React, as well as to provide a starting point for further development.

## Features

- Add new tasks to the list.
- Edit existing tasks.
- Mark tasks as completed.
- Delete tasks.
- Save tasks in `localStorage` for persistence.
- Responsive design, adapting to various screen sizes.
  
## Project Structure

```
my-todo-list-app/
├── public/
├── src/
│   ├── components/
│   │   └── TodoItem.jsx         # React component for individual task
│   ├── assets/                  # Images and icons
│   ├── styles/                  # SCSS files
│   │   └── style.scss
│   ├── App.jsx                  # Main React component
│   ├── main.jsx                 # Entry point for the React app
├── .gitignore
├── package.json                 # Project dependencies
└── vite.config.js               # Vite configuration
```

## Installation

To install and run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/abdouDev22/To-Do_List_Vanilla-JS_SCSS.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd your-repository-name
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open the app in your browser**:
   - Visit `http://localhost:5173/` (or the port provided in the terminal).

## Scripts

- **Run the app locally**:
  ```bash
  npm run dev
  ```

- **Build the project for production**:
  ```bash
  npm run build
  ```

- **Preview the production build**:
  ```bash
  npm run preview
  ```

## Technologies Used

- **ReactJS**: For building user interfaces.
- **Vite**: For fast build tooling and development server.
- **Vanilla JS**: Custom JavaScript used for additional functionalities.
- **SCSS**: For styling the application with better organization.
- **localStorage**: For persisting tasks in the browser.

## Contributing

We welcome contributions from the community! Here’s how you can get involved:

1. Fork this repository.
2. Create a new branch (`feature/my-new-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/my-new-feature`).
5. Open a pull request.

### Guidelines

- Ensure your pull request is well-documented and clear.
- Make sure all tests pass before submitting a pull request.

## Issues

Feel free to report any issues or feature requests in the [Issues section](https://github.com/abdouDev22/To-Do_List_Vanilla-JS_SCSS/issues).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.