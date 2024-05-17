<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/t2aJgVZ.png" alt="Project logo"></a>
</p>

<h3 align="center">FindPet</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/pataz1k/FindPet.svg)](https://github.com/pataz1k/FindPet/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/pataz1k/FindPet.svg)](https://github.com/pataz1k/FindPet/pulls)

</div>

---

<p align="center"> FindPet - project to help find pets
    <br> 
</p>

# Project Name: FindPet

This repository contains the codebase for FindPet, a web application built with ReactJS for the frontend and Django Rest Framework for the backend.

## Frontend (React)

### Installation and Setup

To run the frontend part of the application, follow these steps:

1. Ensure you have Node.js and Yarn installed on your machine.
2. Clone this repository.
3. Navigate to the `react` directory.
4. Run `yarn install` to install the dependencies.
5. After installation, you can start the development server using `yarn dev`.
6. For production build, use `yarn build`.

### Dependencies

Here are the main dependencies used in the React part of the project:

- **axios**: Promise based HTTP client for the browser and node.js.
- **react**: JavaScript library for building user interfaces.
- **react-dom**: Entry point to the DOM and server renderers for React.
- **react-input-mask**: React input mask component.
- **react-router-dom**: DOM bindings for React Router.
- **react-toastify**: React component for toast notifications.
- **typescript**: Typed superset of JavaScript that compiles to plain JavaScript.

### Development Dependencies

- **@typescript-eslint/eslint-plugin**: TypeScript specific linting rules for ESLint.
- **@typescript-eslint/parser**: TypeScript parser for ESLint.
- **eslint**: Linting utility for JavaScript and JSX.
- **eslint-plugin-react-hooks**: React Hooks specific linting rules for ESLint.
- **vite**: Next-generation frontend tooling for React development.

## Backend (Restapi)

### Installation and Setup

To run the backend part of the application, follow these steps:

1. Ensure you have Python and pip installed on your machine.
2. Clone this repository.
3. Navigate to the `restapi` directory.
4. Create a virtual environment (`python -m venv venv`) and activate it (`source venv/bin/activate` for Unix systems or `venv\Scripts\activate` for Windows).
5. Install dependencies with `pip install -r requirements.txt`.
6. Run migrations with `python manage.py migrate`.
7. Start the development server using `python manage.py runserver`.

### Dependencies

Here are the main dependencies used in the Python Django part of the project:

- **django**: Web framework for building web applications in Python.
- **djangorestframework**: Toolkit for building Web APIs in Django.
- **django-cors-headers**: Django application for handling the server headers required for Cross-Origin Resource Sharing (CORS).
- **pillow**: Python Imaging Library adds image processing capabilities to your Python interpreter.

## Contributing

Contributions are welcome! If you find any issues or want to suggest enhancements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize this README further according to your project's needs!

