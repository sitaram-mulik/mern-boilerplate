import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppRouter from '../../AppRouter';
import AppHeader from '../../components/AppHeader';
import Banner from '../../components/Banner';
import { IStoreState } from '../../interfaces/store';
import { getCategories } from './appSlice';

function App() {
    const categories = useSelector(
        (state: IStoreState) => state.app.categories
    );
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('categories ', categories);
    }, [categories]);
    return (
        <div className="app-wrapper">
            <Banner />
            <AppHeader />
            <AppRouter />
            <button
                onClick={() => {
                    dispatch(getCategories());
                }}
            >
                Hi
            </button>
        </div>
    );
}

export default App;
