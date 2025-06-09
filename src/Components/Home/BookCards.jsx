import React from 'react';
import BookCard from './BookCard'; // new component
import './BookCaseCards.css';

const cardData = [
  {
    image: 'https://via.placeholder.com/150',
    title: 'Secure Storage',
    desc: 'Keep your valuable books safe.',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Space Saver',
    desc: 'Organize your books efficiently.',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Stylish Look',
    desc: 'Add elegance to your room.',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Easy Access',
    desc: 'Grab your books quickly and easily.',
  },
];

const BookCards = () => {
  return (
    <div className="book-card-stack">
      {cardData.map((card, i) => (
        <BookCard key={i} index={i} data={card} total={cardData.length} />
      ))}
    </div>
  );
};

export default BookCards;