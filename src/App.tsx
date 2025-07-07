import { AppRoutes } from './routes';
import { useLocation } from 'react-router-dom';
import {
    capitalizeString,
    getLastRoutePart,
    useDocumentTitle,
} from '../libs/lib-vt-performance-utils';

function App() {
    const pathname = useLocation().pathname;
    useDocumentTitle(
        'Malik & Associates | ' + capitalizeString(getLastRoutePart(pathname))
    );
    return <AppRoutes />;
}

export default App;
