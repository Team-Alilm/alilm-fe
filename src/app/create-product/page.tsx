'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductInfo {
  title?: string;
  imageUrl?: string;
  price?: string;
}

export default function CrawlingPage() {
  const [url, setUrl] = useState('');
  const [productInfo, setProductInfo] = useState<ProductInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setProductInfo(null);

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setProductInfo(data);
    } catch (err) {
      setError('An error occurred while fetching the data. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Product Crawler
      </h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <input
          type="url"
          value={url}
          onChange={handleUrlChange}
          placeholder="Enter product URL"
          required
          style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}
        />
        <button
          type="submit"
          disabled={isLoading}
          style={{
            width: '100%',
            padding: '0.5rem',
            backgroundColor: isLoading ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            cursor: isLoading ? 'not-allowed' : 'pointer',
          }}
        >
          {isLoading ? 'Loading...' : 'Crawl Product'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {productInfo && (
        <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            {productInfo.title}
          </h2>
          {productInfo.imageUrl && (
            <Image
              src={productInfo.imageUrl}
              alt={productInfo.title ?? 'Product Image'}
              style={{ width: '100%', marginBottom: '0.5rem' }}
              width={500}
              height={500}
            />
          )}
          {productInfo.price && (
            <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Price: {productInfo.price}</p>
          )}
        </div>
      )}
    </div>
  );
}
