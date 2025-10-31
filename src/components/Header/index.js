import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        LOGO
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li><a href="#">SHOP</a></li>
          <li><a href="#">SKILLS</a></li>
          <li><a href="#">STORIES</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">CONTACT US</a></li>
        </ul>
      </nav>

      <div className={styles.icons}>
        <Image src="/icons/search.svg" alt="Search" width={24} height={24} />
        <Image src="/icons/heart.png" alt="Wishlist" width={24} height={24} />
        <Image src="/icons/bag.png" alt="Cart" width={24} height={24} />
        <Image src="/icons/profile.png" alt="Profile" width={24} height={24} />

        <div className={styles.langDropdown}>
          <span>ENG</span>
          <span className={styles.langArrow}>▼</span>
        </div>
        
      </div>
    </header>
  );
};

export default Header;