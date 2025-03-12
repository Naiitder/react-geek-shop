'use client';

import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Select, Slider, Input, Pagination, Spin, Empty, Typography, Breadcrumb, Button, Checkbox } from 'antd';
import { 
  FilterOutlined, 
  HomeOutlined
} from '@ant-design/icons';
import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { filterHelper } from '@/lib/helpers/filterHelper';
import { setupAntDesignRender } from '@/lib/utils/antd-renderer';

const { Title, Text } = Typography;
const { Search } = Input;
const { Option } = Select;

// Datos de ejemplo - en un caso real vendrían de una API
const MOCK_MANGAS = [
  {
    id: 1,
    title: "Attack on Titan Vol. 1",
    price: 12.99,
    discountPrice: 9.99,
    platforms: ["Shonen"],
    categories: ["Acción", "Fantasía", "Horror"],
    rating: 4.8,
    stock: 20,
    image: "/api/placeholder/300/400",
    isNew: false,
    isBestseller: true
  },
  {
    id: 2,
    title: "My Hero Academia Vol. 5",
    price: 11.99,
    discountPrice: null,
    platforms: ["Shonen"],
    categories: ["Acción", "Superhéroes"],
    rating: 4.7,
    stock: 15,
    image: "/api/placeholder/300/400",
    isNew: true,
    isBestseller: true
  },
  {
    id: 3,
    title: "Chainsaw Man Vol. 3",
    price: 12.99,
    discountPrice: 10.99,
    platforms: ["Shonen"],
    categories: ["Acción", "Horror", "Sobrenatural"],
    rating: 4.9,
    stock: 8,
    image: "/api/placeholder/300/400",
    isNew: true,
    isBestseller: true
  },
  {
    id: 4,
    title: "Fruits Basket Vol. 2",
    price: 13.99,
    discountPrice: null,
    platforms: ["Shojo"],
    categories: ["Romance", "Drama", "Sobrenatural"],
    rating: 4.6,
    stock: 12,
    image: "/api/placeholder/300/400",
    isNew: false,
    isBestseller: false
  },
  {
    id: 5,
    title: "Berserk Deluxe Edition Vol. 1",
    price: 49.99,
    discountPrice: 39.99,
    platforms: ["Seinen"],
    categories: ["Acción", "Fantasía", "Horror"],
    rating: 4.9,
    stock: 5,
    image: "/api/placeholder/300/400",
    isNew: false,
    isBestseller: true
  },
  {
    id: 6,
    title: "One Piece Vol. 98",
    price: 11.99,
    discountPrice: null,
    platforms: ["Shonen"],
    categories: ["Aventura", "Acción", "Comedia"],
    rating: 4.8,
    stock: 25,
    image: "/api/placeholder/300/400",
    isNew: true,
    isBestseller: true
  },
  {
    id: 7,
    title: "Sailor Moon Vol. 1",
    price: 12.99,
    discountPrice: 11.99,
    platforms: ["Shojo"],
    categories: ["Magical Girl", "Romance", "Aventura"],
    rating: 4.7,
    stock: 10,
    image: "/api/placeholder/300/400",
    isNew: false,
    isBestseller: false
  },
  {
    id: 8,
    title: "Death Note Black Edition Vol. 1",
    price: 14.99,
    discountPrice: null,
    platforms: ["Shonen"],
    categories: ["Misterio", "Sobrenatural", "Thriller"],
    rating: 4.9,
    stock: 15,
    image: "/api/placeholder/300/400",
    isNew: false,
    isBestseller: true
  },
  {
    id: 9,
    title: "Vagabond Vol. 1",
    price: 19.99,
    discountPrice: 17.99,
    platforms: ["Seinen"],
    categories: ["Histórico", "Artes Marciales", "Drama"],
    rating: 4.9,
    stock: 7,
    image: "/api/placeholder/300/400",
    isNew: false,
    isBestseller: false
  }
];

const MangasPage = () => {
  const [loading, setLoading] = useState(true);
  const [mangas, setMangas] = useState([]);
  const [filteredMangas, setFilteredMangas] = useState([]);
  const [filterVisible, setFilterVisible] = useState(true);
  const [filters, setFilters] = useState({
    platforms: [], 
    categories: [],
    priceRange: [0, 50],
    onlyDiscount: false,
    onlyInStock: false,
    rating: 0
  });
  const [sortBy, setSortBy] = useState('popularity');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  useEffect(() => {
    setupAntDesignRender();

    setTimeout(() => {
      setMangas(MOCK_MANGAS);
      setFilteredMangas(MOCK_MANGAS);
      setLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    filterHelper({
      products: mangas,
      filters, sortBy,
      setFilteredProducts: setFilteredMangas,
      setCurrentPage
    });
  }, [mangas, filters, sortBy]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredMangas.slice(startIndex, startIndex + pageSize);
  };

  return (
    <div className="container mx-auto px-4 py-6" style={{background: "white"}}>
      <Breadcrumb 
        items={[
          { title: <Link href="/"><HomeOutlined /></Link> },
          { title: <Link href="/products">Products</Link> },
          { title: "Manga" }
        ]} 
        className="mb-4"
      />
      
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <div className="flex justify-between items-center mb-6">
            <Title level={2} className="mb-0">Manga</Title>
            <div className="flex items-center">
              <Button 
                icon={<FilterOutlined />} 
                onClick={() => setFilterVisible(!filterVisible)}
                className="mr-4 md:hidden"
              >
                Filters
              </Button>
              <Select
                defaultValue="popularity"
                style={{ width: 180 }}
                onChange={(value) => setSortBy(value)}
                placeholder="Ordenar por"
                className="w-48"
              >
                <Option value="popularity">Most popular</Option>
                <Option value="price-asc">Price: Low to High</Option>
                <Option value="price-desc">Price: High to Low</Option>
                <Option value="newest">Newest</Option>
              </Select>
            </div>
          </div>
        </Col>
        
        {filterVisible && (
          <Col xs={24} md={6} lg={5} className="mb-4 md:mb-0">
            <Card className="sticky top-24">
              <Title level={4}>Filter by</Title>
              
              <div className="mb-6">
                <Text strong className="block mb-2">Type</Text>
                <Checkbox.Group
                  options={['Shonen', 'Shojo', 'Seinen', 'Josei', 'Kodomo']}
                  value={filters.platforms}
                  onChange={(values) => handleFilterChange('platforms', values)}
                  className="flex flex-col space-y-2"
                />
              </div>
              
              <div className="mb-6">
                <Text strong className="block mb-2">Genre</Text>
                <Checkbox.Group
                  options={['Action', 'Adventure', 'Romance', 'Fantasy', 'Horror', 'Supernatural', 'Drama', 'Comedy']}
                  value={filters.categories}
                  onChange={(values) => handleFilterChange('categories', values)}
                  className="flex flex-col space-y-2"
                />
              </div>
              
              <div className="mb-6">
                <Text strong className="block mb-2">Price (€)</Text>
                <Slider
                  range
                  min={0}
                  max={50}
                  defaultValue={[0, 50]}
                  onChange={(values) => handleFilterChange('priceRange', values)}
                  className="mb-2"
                />
                <div className="flex justify-between">
                  <Text>{filters.priceRange[0]}€</Text>
                  <Text>{filters.priceRange[1]}€</Text>
                </div>
              </div>
              
              <div className="mb-6">
                <Text strong className="block mb-2">More filters</Text>
                <Checkbox
                  checked={filters.onlyDiscount}
                  onChange={(e) => handleFilterChange('onlyDiscount', e.target.checked)}
                  className="block mb-2"
                >
                  On Sale
                </Checkbox>
                <Checkbox
                  checked={filters.onlyInStock}
                  onChange={(e) => handleFilterChange('onlyInStock', e.target.checked)}
                >
                  In Stock
                </Checkbox>
              </div>
              
              <div className="mb-4">
                <Text strong className="block mb-2">Ratings</Text>
                <div className="flex items-center space-x-2">
                  <Select
                    value={filters.rating}
                    onChange={(value) => handleFilterChange('rating', value)}
                    style={{ width: '100%' }}
                  >
                    <Option value={0}>All</Option>
                    <Option value={4.5}>4.5+ stars</Option>
                    <Option value={4}>4+ stars</Option>
                    <Option value={3.5}>3.5+ stars</Option>
                    <Option value={3}>3+ stars</Option>
                  </Select>
                </div>
              </div>
              
              <Button 
                block 
                onClick={() => setFilters({
                  platforms: [],
                  categories: [],
                  priceRange: [0, 50],
                  onlyDiscount: false,
                  onlyInStock: false,
                  rating: 0
                })}
              >
                Clear Filters
              </Button>
            </Card>
          </Col>
        )}
        
        <Col xs={24} md={filterVisible ? 18 : 24} lg={filterVisible ? 19 : 24}>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Spin size="large" />
            </div>
          ) : filteredMangas.length === 0 ? (
            <Empty description="No manga found" />
          ) : (
            <>
              <Row gutter={[16, 24]}>
                {getCurrentPageData().map((manga) => (
                  <ProductCard key={manga.id} product={manga}/>
                ))}
              </Row>
              
              <div className="flex justify-center mt-8">
                <Pagination
                  current={currentPage}
                  pageSize={pageSize}
                  total={filteredMangas.length}
                  onChange={(page) => setCurrentPage(page)}
                  showSizeChanger={false}
                />
              </div>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default MangasPage;