import React, { createContext, useState } from 'react'

export const UseContextApi = createContext({
    handleChange: () => { },
    AfterfilteringImage: []
});

const ContextApi = ({ children }) => {

    const AllImages = [
        {
            id: 1,
            title: 'Image 1',
            image: 'images/First.png',
            price: 500,
            category: 'sandle'
        },
        {
            id: 2,
            title: 'Image 2',
            image: 'images/Second.png',
            price: 800,
            category: 'sandle'

        },
        {
            id: 3,
            title: 'Image 3',
            image: 'images/Third.png',
            price: 1200,
            category: 'sneaker'
        },
        {
            id: 4,
            title: 'Image 4',
            image: 'images/Four.png',
            price: 2000,
            category: 'sneaker'
        },
        {
            id: 5,
            title: 'Image 5',
            image: 'images/Five.png',
            price: 2500,
            category: 'flats'
        },
        {
            id: 6,
            title: 'Image 6',
            image: 'images/Six.png',
            price: 3000,
            category: 'flats'
        },
        {
            id: 7,
            title: 'Image 7',
            image: 'images/Seven.png',
            price: 3800,
            category: 'sandle'
        },
    ]

    const [selectedCategory, setSelectedCategory] = useState("All");
    const handleChange = (e) => {
        setSelectedCategory(e.target.value);
    }

    const AfterfilteringImage = selectedCategory === "All" ? AllImages : AllImages.filter((img) => img.category === selectedCategory)

    return (
        <>
            <UseContextApi.Provider value={{ handleChange, AfterfilteringImage }}>
                {children}
            </UseContextApi.Provider>


        </>
    )
}

export default ContextApi
