import { Suspense, useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar/Navbar';

function App() {
    const [state, setState] = useState(false);

    const changeState = () => {
        setState((prev) => !prev);
    };

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <div className={classNames('content-page')}>
                    <Navbar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
