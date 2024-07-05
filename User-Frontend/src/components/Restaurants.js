import React from 'react';
import RestoCard from './RestoCard';
import './Restaurants.css';
import Navbar from './Navbar';

const Restaurants = () => {
  const restaurantData = [
    {
      id: "1",
      image: "https://b.zmtcdn.com/data/pictures/7/20984257/49603acf29506621466f2931d94fb6e1_featured_v2.jpg?output-format=webp",
      name: "The Dome",
      cuisine: "North Indian, Mughlai, Continental",
      price: "1,200",
      rating: "4.5",
      discount: "Flat 20% OFF",
      opensAt: "Opens at 10 AM",
      distance: "500"
    },
    {
      id: "2",
      image: "https://b.zmtcdn.com/data/pictures/8/20550608/38ff8b2440b90447f28c06ddb5182f05_featured_v2.jpg?output-format=webp",
      name: "Sunset Bistro",
      cuisine: "Italian, Continental",
      price: "1,500",
      rating: "4.2",
      discount: "Flat 15% OFF",
      opensAt: "Opens at 11 AM",
      distance: "300"
    },
    {
      id: "3",
      image: "https://assets.cntraveller.in/photos/612f08a19fd022fa9f74f1e8/16:9/w_1280,c_limit/The%20Verandah.jpeg",
      name: "Fine Diner",
      cuisine: "Italian, Continental",
      price: "6,000",
      rating: "5.0",
      discount: "Flat 69% OFF",
      opensAt: "Open Now",
      distance: "10"
    }
  ];

  return (<>
      <Navbar/>
    <div className='restro'>
      <div className="restaurant-list">
        {restaurantData.map((resto) => (
          <RestoCard key={resto.id} {...resto} />
        ))}
      </div>
    </div></>
  );
}

export default Restaurants;
