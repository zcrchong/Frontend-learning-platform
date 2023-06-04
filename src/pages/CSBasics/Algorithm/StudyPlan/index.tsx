import React from 'react';
import styles from './index.less';

// @ts-ignore
const BookCard = ({ title, description, image, href }) => {
  const handleClick = () => {
    window.open(href, '_blank');
  };

  return (
    <div
      className={styles.bookCard}
      onMouseEnter={(e) => e.currentTarget.classList.add(styles.hover)}
      onMouseLeave={(e) => e.currentTarget.classList.remove(styles.hover)}
      onClick={handleClick}
    >
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} alt={title} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default BookCard;
