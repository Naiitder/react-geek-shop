import React from 'react'
import {Card, Typography, Tag, Col} from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import { 
    ShoppingCartOutlined, 
    HeartOutlined, 
    StarFilled,
  } from '@ant-design/icons';

  const { Title, Text } = Typography;


  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <StarFilled 
            key={star} 
            style={{ 
              color: star <= rating ? '#FADB14' : '#E8E8E8',
              fontSize: '14px',
              marginRight: '2px'
            }} 
          />
        ))}
        <Text style={{ marginLeft: '4px', fontSize: '12px' }}>{rating}</Text>
      </div>
    );
  };

export const ProductCard = ({product}) => {
  return (
                      <Col xs={24} sm={12} md={8} lg={6}>
  <Card
                      hoverable
                      className="h-full flex flex-col"
                      cover={
                        <div className="relative pt-[100%]">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                            priority={product.id <= 4}
                          />
                          {product.discountPrice && (
                            <div className="absolute top-0 left-0 bg-red-600 text-white px-2 py-1 text-xs font-bold">
                              -{Math.round((1 - product.discountPrice / product.price) * 100)}%
                            </div>
                          )}
                          {product.isNew && (
                            <div className="absolute top-0 right-0 bg-blue-600 text-white px-2 py-1 text-xs font-bold">
                              NEW
                            </div>
                          )}
                        </div>
                      }
                      actions={[
                        <HeartOutlined key="favorite" />,

                        <ShoppingCartOutlined key="add" />
                      ]}
                    >
                      <div className="flex flex-col flex-grow">
                        <div className="flex mb-1">
                        {product.platforms.map(platform => (
                            <Tag key={platform} className="mr-1 mb-1">
                              {platform}
                            </Tag>
                          ))}
                        </div>
                        <Link href={`/products/${product.id}`}>
                          <Title level={5} className="mb-1" ellipsis={{ rows: 2 }}>
                            {product.title}
                          </Title>
                        </Link>
                        <div className="mb-2">
                          {renderStars(product.rating)}
                        </div>
                        <div className="mt-auto">
                          {product.discountPrice ? (
                            <div className="flex items-center">
                              <Text delete className="text-gray-500 mr-2">
                                {product.price.toFixed(2)}€
                              </Text>
                              <Text strong className="text-red-600 text-lg">
                                {product.discountPrice.toFixed(2)}€
                              </Text>
                            </div>
                          ) : (
                            <Text strong className="text-lg">
                              {product.price.toFixed(2)}€
                            </Text>
                          )}
                        </div>
                        <Text type="secondary" className="text-xs mt-1">
                          {product.stock > 0 
                            ? product.stock > 5 
                              ? 'In stock' 
                              : `Only ${product.stock} copies!` 
                            : 'No stock'}
                        </Text>
                      </div>
                    </Card></Col>
  )
}
