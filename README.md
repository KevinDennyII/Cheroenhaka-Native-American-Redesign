# Cheroenhaka (Nottoway) Indian Tribe Website Redesign

This project is a redesign of the Cheroenhaka (Nottoway) Indian Tribe website.

## Tech Stack

- [React](https://react.dev/) - A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
- [Vite](https://vitejs.dev/) - A build tool that aims to provide a faster and leaner development experience for modern web projects.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
- [pnpm](https://pnpm.io/) - Fast, disk space-efficient package manager.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/) installed.

### Installation and Running

1.  **Clone the repository:**

    ```sh
    git clone <repository-url>
    cd <repository-name>
    ```

2.  **Install dependencies:**
    This project uses `pnpm` as a package manager. To install the dependencies, run the following command from the root of the project:

    ```sh
    pnpm install
    ```

3.  **Run the development server:**
    To start the development server for the main application, run the following command:
    ```sh
    PORT=3000 BASE_PATH=/ pnpm --filter @workspace/cheroenhaka dev
    ```
    This will start the development server at `http://localhost:3000`.
