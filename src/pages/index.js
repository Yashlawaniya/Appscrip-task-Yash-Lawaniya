import React from 'react';
import Head from 'next/head'; 
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FilterSidebar from '@/components/FilterSidebar';
import ProductGrid from '@/components/ProductGrid';

export default function Home({ products }) {
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Discover Our Products - Appscrip Task",
    "description": "Browse a wide range of products available in our store.",
    "url": "https://your-live-url.com" 
  };

  return (
    <div>
      <Head>
        <title>Discover Products | Appscrip Task</title>
        
        <meta name="description" content="A product listing page built with Next.js and SSR for the Appscrip assignment." />
        
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <Header />
      
      <div className="mainContentWrapper">
        <FilterSidebar />
        <ProductGrid products={products} />
      </div>
      
      <Footer /> 
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return {
      props: {
        products: [],
      },
    };
  }
}