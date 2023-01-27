import React from 'react';
import styles from './CatalogPage.module.css'
import CardList from "../../components/UI/CardList/CardList";

const CatalogPage = () => {
    return (
        <>
            <div className={styles.Catalog}>
                <h2>Каталог</h2>
                <CardList />
            </div>
        </>
    );
};

export default CatalogPage;