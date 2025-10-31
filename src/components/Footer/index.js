import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        <div className={styles.footerTop}>
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>BE THE FIRST TO KNOW</h4>
            <p>Sign up for updates from mettā muse.</p>
            <div className={styles.subscribeForm}>
              <input type="email" placeholder="Enter your e-mail..." className={styles.subscribeInput} />
              <button className={styles.subscribeButton}>SUBSCRIBE</button>
            </div>
          </div>
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>CONTACT US</h4>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
            <h4 className={styles.footerTitle} style={{marginTop: '20px'}}>CURRENCY</h4>
            <div className={styles.currency}>
              <span>🇺🇸</span>
              <span>•</span>
              <span>USD</span>
            </div>
            <p className={styles.footerSmallText}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>mettā muse</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Stories</a></li>
              <li><a href="#">Artisans</a></li>
              <li><a href="#">Boutiques</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">EU Compliances Docs</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>QUICK LINKS</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#">Orders & Shipping</a></li>
              <li><a href="#">Join/Login as a Seller</a></li>
              <li><a href="#">Payment & Pricing</a></li>
              <li><a href="#">Return & Refunds</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>FOLLOW US</h4>
            <div className={styles.socialIcons}>
    
              <a href="#" className={styles.socialIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M17.657 6.34315C18.1193 6.34315 18.5 6.72386 18.5 7.18615C18.5 7.64844 18.1193 8.02915 17.657 8.02915C17.1947 8.02915 16.814 7.64844 16.814 7.18615C16.814 6.72386 17.1947 6.34315 17.657 6.34315Z" fill="white"/><path d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
       
              <a href="#" className={styles.socialIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V19H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V19H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 9H2V19H6V9Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="white" strokeWidth="1.S" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
            <h4 className={styles.footerTitle} style={{marginTop: '30px'}}>mettā muse ACCEPTS</h4>
            <div className={styles.paymentIcons}>
          
<div className={styles.paymentIcons}>
  <Image 
    src="/payment/gpay.png" 
    alt="Google Pay" 
    width={50} 
    height={32} 
    className={styles.paymentLogo}
  />
  <Image 
    src="/payment/mastercard.png" 
    alt="Mastercard" 
    width={50} 
    height={32} 
    className={styles.paymentLogo}
  />
  <Image 
    src="/payment/amex.png" 
    alt="American Express" 
    width={50} 
    height={32} 
    className={styles.paymentLogo}
  />
  <Image 
    src="/payment/paypal.png" 
    alt="PayPal" 
    width={50} 
    height={32} 
    className={styles.paymentLogo}
  />
  <Image 
    src="/payment/apple-pay.png" 
    alt="Apple Pay" 
    width={50} 
    height={32} 
    className={styles.paymentLogo}
  />
</div>

            </div>
          </div>
        </div>

      </div>
      

      <div className={styles.copyrightBar}>
        <p>Copyright © 2023 mettā muse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;