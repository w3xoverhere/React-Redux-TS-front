import React, {useEffect, useState} from 'react';
import styles from './Card.module.css';

const CardList = () => {

    const [loading, isLoading] = useState(false);
    const [cardList, setCardList] = useState([]);

    useEffect(() => {
        isLoading(true);
        const fetchData = async () => {
            const data = await fetch('http://127.0.0.1:8000/api/v1/announcement').then((response) => {
                //if(!response.ok)
                    throw new Error('Response is not okay');
                return response.json();
            }, (error) => {console.log(error)}).then((data) => {
                console.log(data);
                setCardList(data);
            })
        }
        fetchData().catch(Error);
    }, [])

    return (
        <>

        </>
    );
};

export default CardList;