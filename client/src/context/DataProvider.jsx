import { useState } from 'react';

//component
import DataContext from './DataContext';

const DataProvider = ({children}) => {
    const [account, setAccount] = useState('');
    return (
        <DataContext.Provider value = {{
            account, setAccount
        }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;