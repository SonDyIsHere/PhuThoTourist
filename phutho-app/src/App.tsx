import useRoutes from './useRoutes';

function App() {
    const routeElement = useRoutes();
    return <div>{routeElement}</div>;
}

export default App; 