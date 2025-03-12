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
import { setupAntDesignRender } from '@/lib/utils/antdRenderer';
import { videogamesCategory } from '@/lib/utils/categoryTypes';
import { MOCK_VIDEOGAMES } from '@/lib/data/mockVideogames';

const { Title, Text } = Typography;
const { Search } = Input;
const { Option } = Select;

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
    setupAntDesignRender();

    setTimeout(() => {
      setVideogames(MOCK_VIDEOGAMES);
      setFilteredGames(MOCK_VIDEOGAMES);
      setLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    filterHelper({
      products: videogames,
      filters, sortBy,
      setFilteredProducts: setFilteredGames,
      setCurrentPage
    });
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
    <div style={{background: "white"}}>
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
                Filters
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
                  options={Object.values(videogamesCategory)}
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
                    <ProductCard key={game.id} product={game}/>
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
    </div>
  );
};

export default VideogamesPage;