# AI Coding Agent Guidelines for `cnn-web-app`

## Project Overview
The `cnn-web-app` is a web application with a React-based frontend and a backend (details not fully explored yet). The frontend is bootstrapped with Create React App and follows a typical React project structure. Key directories include:

- `src/components/`: Contains React components like `HandwritingGrid.jsx` and `PredictionDisplay.jsx`.
- `src/styles/`: Houses CSS or styling files.
- `src/api/`: Presumably contains API interaction logic (not fully explored).
- `public/`: Static assets like `index.html`, `manifest.json`, and `robots.txt`.

## Developer Workflows

### Running the Application
- **Development Mode**: Use `npm start` to run the app locally. Access it at [http://localhost:3000](http://localhost:3000).
- **Production Build**: Use `npm run build` to create an optimized production build in the `build/` directory.

### Testing
- Run `npm test` to launch the test runner in interactive watch mode.

### Ejecting Configuration
- Use `npm run eject` to gain full control over the build configuration. Note: This is irreversible.

## Project-Specific Conventions

### Component Structure
- Components are stored in `src/components/`.
- Follow React's functional component pattern with hooks where applicable.
- Example: `PredictionDisplay.jsx` handles the display of predictions, likely interacting with props or state.

### Styling
- Styles are centralized in `src/styles/`.
- Ensure consistent class naming conventions (e.g., BEM or similar).

### API Integration
- API-related logic is likely in `src/api/`. Ensure separation of concerns by keeping API calls out of components.

## External Dependencies
- **React**: Core library for building the UI.
- **Create React App**: Provides the build and development environment.
- Additional dependencies may exist in `package.json` (not fully explored).

## Integration Points
- **Frontend-Backend Communication**: Likely involves API calls (check `src/api/` for details).
- **Static Assets**: Managed in `public/`.

## Tips for AI Agents
- When adding new components, follow the existing structure in `src/components/`.
- Ensure new styles are added to `src/styles/` and follow the project's naming conventions.
- For API integrations, create or update files in `src/api/`.
- Always test changes using `npm test` and verify the app runs with `npm start`.

## Areas for Exploration
- Backend structure and its integration with the frontend.
- Specific API endpoints and their usage.
- Detailed testing strategy and coverage.

---

For further details, refer to the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).