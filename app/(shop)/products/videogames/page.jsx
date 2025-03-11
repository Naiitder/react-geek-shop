// src/app/(shop)/products/videogames/page.jsx
'use client';

import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Select, Slider, Input, Pagination, Spin, Empty, Typography, Breadcrumb, Button, Checkbox } from 'antd';
import { 
  FilterOutlined, 
  HomeOutlined
} from '@ant-design/icons';
import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';

const { Title, Text } = Typography;
const { Search } = Input;
const { Option } = Select;

// Datos de ejemplo - en un caso real vendrían de una API
const MOCK_VIDEOGAMES = [
  {
    id: 1,
    title: "The Legend of Zelda: Breath of the Wild",
    price: 59.99,
    discountPrice: 49.99,
    platforms: ["Switch"],
    categories: ["Aventura", "Acción"],
    rating: 4.9,
    stock: 15,
    image: "/api/placeholder/300/400",
    isNew: false,
    isBestseller: true
  },
  {
    id: 2,
    title: "Elden Ring",
    price: 69.99,
    discountPrice: null,
    platforms: ["PS5", "Xbox Series X", "PC"],
    categories: ["RPG", "Acción"],
    rating: 4.8,
    stock: 8,
    image: "/api/placeholder/300/400",
    isNew: true,
    isBestseller: true
  },
  {
    id: 3,
    title: "Cyberpunk 2077",
    price: 59.99,
    discountPrice: 29.99,
    platforms: ["PS5", "Xbox Series X", "PC"],
    categories: ["RPG", "Acción", "Mundo Abierto"],
    rating: 4.1,
    stock: 20,
    image: "/api/placeholder/300/400",
    isNew: false,
    isBestseller: false
  },
  {
    id: 4,
    title: "Super Mario Odyssey",
    price: 49.99,
    discountPrice: null,
    platforms: ["Switch"],
    categories: ["Plataformas", "Aventura"],
    rating: 4.7,
    stock: 12,
    image: "/api/placeholder/300/400",
    isNew: false,
    isBestseller: true
  },
  {
    id: 5,
    title: "Red Dead Redemption 2",
    price: 59.99,
    discountPrice: 39.99,
    platforms: ["PS4", "Xbox One", "PC"],
    categories: ["Acción", "Aventura", "Mundo Abierto"],
    rating: 4.9,
    stock: 7,
    image: "/api/placeholder/300/400",
    isNew: false,
    isBestseller: true
  },
  {
    id: 6,
    title: "Hogwarts Legacy",
    price: 69.99,
    discountPrice: 59.99,
    platforms: ["PS5", "Xbox Series X", "PC"],
    categories: ["RPG", "Aventura", "Mundo Abierto"],
    rating: 4.5,
    stock: 10,
    image: "/api/placeholder/300/400",
    isNew: true,
    isBestseller: false
  },
  {
    id: 7,
    title: "FIFA 24",
    price: 69.99,
    discountPrice: null,
    platforms: ["PS5", "Xbox Series X", "PC", "Switch"],
    categories: ["Deportes", "Simulación"],
    rating: 4.3,
    stock: 25,
    image: "/api/placeholder/300/400",
    isNew: true,
    isBestseller: true
  },
  {
    id: 8,
    title: "Minecraft",
    price: 29.99,
    discountPrice: null,
    platforms: ["PC", "Switch", "PS4", "Xbox One", "Mobile"],
    categories: ["Sandbox", "Aventura"],
    rating: 4.8,
    stock: 50,
    image: "/api/placeholder/300/400",
    isNew: false,
    isBestseller: true
  },
  {
    id: 9,
    title: "League of legends",
    price: 29.99,
    discountPrice: null,
    platforms: ["PC", "Switch", "PS4", "Xbox One", "Mobile"],
    categories: ["Sandbox", "Aventura"],
    rating: 4.8,
    stock: 50,
    image: "/api/placeholder/300/400",
    isNew: false,
    isBestseller: true
  }
];

const VideogamesPage = () => {
  const [loading, setLoading] = useState(true);
  const [videogames, setVideogames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [filterVisible, setFilterVisible] = useState(true);
  const [filters, setFilters] = useState({
    platforms: [],
    categories: [],
    priceRange: [0, 100],
    onlyDiscount: false,
    onlyInStock: false,
    rating: 0
  });
  const [sortBy, setSortBy] = useState('popularity');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  // Cargar datos (simulando una llamada a API)
  useEffect(() => {
    setTimeout(() => {
      setVideogames(MOCK_VIDEOGAMES);
      setFilteredGames(MOCK_VIDEOGAMES);
      setLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    if (videogames.length > 0) {
      let result = [...videogames];
      
      if (filters.platforms.length > 0) {
        result = result.filter(game => 
          game.platforms.some(platform => filters.platforms.includes(platform))
        );
      }
      
      if (filters.categories.length > 0) {
        result = result.filter(game => 
          game.categories.some(category => filters.categories.includes(category))
        );
      }
      
      result = result.filter(game => {
        const price = game.discountPrice || game.price;
        return price >= filters.priceRange[0] && price <= filters.priceRange[1];
      });
      
      if (filters.onlyDiscount) {
        result = result.filter(game => game.discountPrice !== null);
      }
      
      if (filters.onlyInStock) {
        result = result.filter(game => game.stock > 0);
      }
      
      if (filters.rating > 0) {
        result = result.filter(game => game.rating >= filters.rating);
      }
      
      if (sortBy === 'price-asc') {
        result.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
      } else if (sortBy === 'price-desc') {
        result.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
      } else if (sortBy === 'newest') {
        result.sort((a, b) => (b.isNew === a.isNew ? 0 : b.isNew ? 1 : -1));
      } else { 
        result.sort((a, b) => (b.isBestseller === a.isBestseller ? 0 : b.isBestseller ? 1 : -1));
      }
      
      setFilteredGames(result);
      setCurrentPage(1);
    }
  }, [videogames, filters, sortBy]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredGames.slice(startIndex, startIndex + pageSize);
  };

  return (
    <div className="container mx-auto px-4 py-6" style={{background: "white"}}>
      <Breadcrumb 
        items={[
          { title: <Link href="/"><HomeOutlined /></Link> },
          { title: <Link href="/products">Products</Link> },
          { title: "Videogames" }
        ]} 
        className="mb-4"
      />
      
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <div className="flex justify-between items-center mb-6">
            <Title level={2} className="mb-0">Videogames</Title>
            <div className="flex items-center">
              <Button 
                icon={<FilterOutlined />} 
                onClick={() => setFilterVisible(!filterVisible)}
                className="mr-4 md:hidden"
              >
                Filtros
              </Button>
              <Select
                defaultValue="popularity"
                style={{ width: 180 }}
                onChange={(value) => setSortBy(value)}
                placeholder="Ordenar por"
                className="w-48"
              >
                <Option value="popularity">More popular</Option>
                <Option value="price-asc">Price: menor a mayor</Option>
                <Option value="price-desc">Price: mayor a menor</Option>
                <Option value="newest">News</Option>
              </Select>
            </div>
          </div>
        </Col>
        
        {filterVisible && (
          <Col xs={24} md={6} lg={5} className="mb-4 md:mb-0">
            <Card className="sticky top-24">
              <Title level={4}>Filter by</Title>
              
              <div className="mb-6">
                <Text strong className="block mb-2">Platforms</Text>
                <Checkbox.Group
                  options={['PS5', 'PS4', 'Xbox Series X', 'Xbox One', 'Switch', 'PC']}
                  value={filters.platforms}
                  onChange={(values) => handleFilterChange('platforms', values)}
                  className="flex flex-col space-y-2"
                />
              </div>
              
              <div className="mb-6">
                <Text strong className="block mb-2">Categories</Text>
                <Checkbox.Group
                  options={['Action', 'Adventure', 'RPG', 'Stategy', 'Sports', 'Simulation', 'Open']}
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
                  max={100}
                  defaultValue={[0, 100]}
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
                    <Option value={4.5}>4.5 stars</Option>
                    <Option value={4}>4 stars</Option>
                    <Option value={3.5}>3.5 stars</Option>
                    <Option value={3}>3 stars</Option>
                  </Select>
                </div>
              </div>
              
              <Button 
                block 
                onClick={() => setFilters({
                  platforms: [],
                  categories: [],
                  priceRange: [0, 100],
                  onlyDiscount: false,
                  onlyInStock: false,
                  rating: 0
                })}
              >
                Clean Filters
              </Button>
            </Card>
          </Col>
        )}
        
        <Col xs={24} md={filterVisible ? 18 : 24} lg={filterVisible ? 19 : 24}>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Spin size="large" />
            </div>
          ) : filteredGames.length === 0 ? (
            <Empty description="No videogames found" />
          ) : (
            <>
              <Row gutter={[16, 24]}>
                {getCurrentPageData().map((game) => (
                  <Col key={game.id} xs={24} sm={12} md={8} lg={6}>
                    <ProductCard product={game}/>
                  </Col>
                ))}
              </Row>
              
              <div className="flex justify-center mt-8">
                <Pagination
                  current={currentPage}
                  pageSize={pageSize}
                  total={filteredGames.length}
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

export default VideogamesPage;