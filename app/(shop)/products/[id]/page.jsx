'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Row, 
  Col, 
  Typography, 
  Breadcrumb, 
  Button, 
  Card, 
  Tabs, 
  Rate, 
  Tag, 
  InputNumber, 
  Divider, 
  Descriptions, 
  List, 
  Spin, 
  message, 
  Avatar,
  Carousel
} from 'antd';
import { 
  ShoppingCartOutlined, 
  HeartOutlined, 
  ShareAltOutlined, 
  CheckCircleFilled, 
  StarFilled,
  HomeOutlined,
  RightOutlined,
  ShopOutlined,
  SafetyCertificateOutlined,
  TruckOutlined,
  BarcodeOutlined,
} from '@ant-design/icons';
import Item from 'antd/es/list/Item';

const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;

// Datos de ejemplo del producto - En producción, estos datos vendrían de tu API
const PRODUCT_DATA = {
  id: "123",
  title: "The Legend of Zelda: Breath of the Wild",
  slug: "the-legend-of-zelda-breath-of-the-wild",
  price: 59.99,
  discountPrice: 49.99,
  stock: 15,
  sku: "ZELDA-BOTW-001",
  rating: 4.9,
  reviewCount: 386,
  platforms: ["Nintendo Switch"],
  categories: ["Aventura", "Acción", "Mundo Abierto"],
  releaseDate: "3 de marzo de 2017",
  publisher: "Nintendo",
  developer: "Nintendo EPD",
  ageRating: "PEGI 12",
  languages: ["Español", "Inglés", "Francés", "Alemán", "Italiano", "Japonés"],
  images: [
    "/api/placeholder/600/400",
    "/api/placeholder/600/400",
    "/api/placeholder/600/400",
    "/api/placeholder/600/400"
  ],
  description: `
    <p><strong>Explora, sobrevive y descubre en un mundo lleno de aventuras</strong></p>
    <p>Olvida todo lo que sabes sobre los juegos de The Legend of Zelda. Entra en un mundo de descubrimiento, exploración y aventura en The Legend of Zelda: Breath of the Wild, un nuevo juego de la aclamada serie que rompe con las convenciones.</p>
    <p>Viaja a través de praderas, bosques y cumbres montañosas mientras descubres cómo cayó en la ruina el reino de Hyrule en esta emocionante aventura a cielo abierto.</p>
    <ul>
      <li>Explora el mundo a tu ritmo</li>
      <li>Busca por una vasta extensión y descubre más de 100 santuarios</li>
      <li>Un mundo de múltiples soluciones para resolver rompecabezas y enfrentarte a enemigos</li>
      <li>Más de 300 horas de juego</li>
    </ul>
  `,
  features: [
    "Mundo abierto completamente explorable",
    "Física y química del juego realistas",
    "Más de 100 santuarios que descubrir",
    "Sistema de combate dinámico",
    "Historia épica y personajes memorables",
    "Gráficos artísticos impresionantes"
  ],
  specifications: {
    genre: "Aventura, Acción, Mundo Abierto",
    players: "1 jugador",
    textLanguage: "Español, Inglés, Francés, Alemán, Italiano, Japonés, Ruso",
    voiceLanguage: "Inglés, Japonés",
    fileSize: "13.4 GB",
    supportedControllers: "Joy-Con, Pro Controller"
  },
  reviews: [
    {
      id: 1,
      userName: "Mario G.",
      rating: 5,
      date: "15/01/2023",
      content: "Simplemente el mejor juego de Zelda jamás creado. La libertad que ofrece y la sensación de descubrimiento son inigualables. Llevo más de 200 horas y sigo encontrando cosas nuevas."
    },
    {
      id: 2,
      userName: "Laura P.",
      rating: 5,
      date: "03/12/2022",
      content: "Mi primer juego de Zelda y me ha encantado. El mundo es precioso y hay tantas cosas que hacer que nunca te aburres. La física del juego permite solucionar problemas de formas muy creativas."
    },
    {
      id: 3,
      userName: "Carlos M.",
      rating: 4,
      date: "20/10/2022",
      content: "Un juego casi perfecto. La historia podría ser más elaborada, pero la exploración y el combate compensan con creces esa pequeña carencia."
    }
  ],
  relatedProducts: [
    {
      id: "124",
      title: "Super Mario Odyssey",
      price: 49.99,
      discountPrice: null,
      image: "/api/placeholder/300/300",
      rating: 4.8,
      platform: "Nintendo Switch"
    },
    {
      id: "125",
      title: "Animal Crossing: New Horizons",
      price: 54.99,
      discountPrice: 44.99,
      image: "/api/placeholder/300/300",
      rating: 4.7,
      platform: "Nintendo Switch"
    },
    {
      id: "126",
      title: "The Legend of Zelda: Tears of the Kingdom",
      price: 69.99,
      discountPrice: null,
      image: "/api/placeholder/300/300",
      rating: 4.9,
      platform: "Nintendo Switch"
    },
    {
      id: "127",
      title: "Pokémon Escarlata",
      price: 59.99,
      discountPrice: 49.99,
      image: "/api/placeholder/300/300",
      rating: 4.5,
      platform: "Nintendo Switch"
    }
  ]
};

const ProductDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("1");
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setTimeout(() => {
          setProduct(PRODUCT_DATA);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching product:", error);
        message.error("No se pudo cargar el producto");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  // Manejar la adición al carrito
  const handleAddToCart = () => {
    message.success(`${quantity} unidad(es) de "${product.title}" añadido al carrito`);
    // Aquí implementarías la lógica real de añadir al carrito
  };

  // Manejar añadir a favoritos
  const handleAddToWishlist = () => {
    message.success(`"${product.title}" añadido a tu lista de deseos`);
    // Aquí implementarías la lógica real de añadir a favoritos
  };


  const handleShare = () => {
    message.info("Función de compartir abierta");
    // Aquí implementarías la funcionalidad de compartir
  };

  // Si está cargando, mostrar spinner
  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Spin size="large" />
      </div>
    );
  }

  // Si no hay producto, mostrar error
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <Title level={3}>Producto no encontrado</Title>
        <Button type="primary" onClick={() => router.push('/products/videogames')}>
          Volver a la tienda
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6" style={{background: "white"}}>
      {/* Breadcrumbs */}
      <Breadcrumb 
        items={[
          { title: <Link href="/"><HomeOutlined /></Link> },
          { title: <Link href="/products">Productos</Link> },
          { title: <Link href="/products/videogames">Videojuegos</Link> },
          { title: product.title }
        ]} 
        className="mb-6"
        separator={<RightOutlined style={{ fontSize: '10px' }} />}
      />
      
      <Row gutter={[32, 32]}>
        {/* Columna izquierda - Imágenes */}
        <Col xs={24} md={12} lg={10}>
          <div className="sticky top-24">
            <div className="mb-4 overflow-hidden rounded-lg">
              <Image
                src={product.images[selectedImage]}
                alt={product.title}
                width={600}
                height={400}
                className="object-cover rounded-lg"
                priority
              />
            </div>
            
            {/* Miniaturas */}
            <div className="flex space-x-2 mt-4">
              {product.images.map((image, index) => (
                <div 
                  key={index} 
                  className={`cursor-pointer border-2 rounded overflow-hidden ${selectedImage === index ? 'border-blue-500' : 'border-gray-200'}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image}
                    alt={`${product.title} - imagen ${index + 1}`}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </Col>
        
        {/* Columna derecha - Información del producto */}
        <Col xs={24} md={12} lg={14}>
          {/* Header del producto */}
          <div className="mb-6">
            <Title level={1} className="mb-2">{product.title}</Title>
            
            <div className="flex items-center mb-2 flex-wrap">
              <Rate disabled defaultValue={product.rating} allowHalf className="text-sm mr-2" />
              <Text className="mr-2">
                {product.rating} ({product.reviewCount} reseñas)
              </Text>
              <Text type="secondary">SKU: {product.sku}</Text>
            </div>
            
            <div className="mb-3">
              {product.platforms.map(platform => (
                <Tag key={platform} color="blue" className="mr-1 mb-1">
                  {platform}
                </Tag>
              ))}
              {product.categories.map(category => (
                <Tag key={category} className="mr-1 mb-1">
                  {category}
                </Tag>
              ))}
            </div>
          </div>
          
          {/* Precio y acciones */}
          <Card className="mb-6">
            <div className="mb-4">
              {product.discountPrice ? (
                <div className="flex items-center">
                  <Text delete className="text-gray-500 mr-3 text-xl">
                    {product.price.toFixed(2)}€
                  </Text>
                  <Title level={2} className="text-red-600 mb-0">
                    {product.discountPrice.toFixed(2)}€
                  </Title>
                  <Tag color="red" className="ml-3">
                    {Math.round((1 - product.discountPrice / product.price) * 100)}% DTO
                  </Tag>
                </div>
              ) : (
                <Title level={2} className="mb-0">
                  {product.price.toFixed(2)}€
                </Title>
              )}
            </div>
            
            <div className="flex items-center mb-4">
              <CheckCircleFilled style={{ color: product.stock > 0 ? '#52c41a' : '#f5222d' }} />
              <Text className="ml-2">
                {product.stock > 0 
                  ? product.stock > 5 
                    ? 'En stock - Envío en 24/48h' 
                    : `¡Solo quedan ${product.stock} unidades!` 
                  : 'Agotado temporalmente'}
              </Text>
            </div>
            
            <div className="flex flex-wrap items-center space-y-2 sm:space-y-0 mb-4">
              <div className="flex items-center mr-4 w-full sm:w-auto mb-2 sm:mb-0">
                <Text className="mr-3">Cantidad:</Text>
                <InputNumber 
                  min={1} 
                  max={product.stock} 
                  defaultValue={1} 
                  onChange={(value) => setQuantity(value)}
                  disabled={product.stock <= 0}
                />
              </div>
              
              <Button 
                type="primary" 
                size="large"
                icon={<ShoppingCartOutlined />} 
                onClick={handleAddToCart}
                disabled={product.stock <= 0}
                className="mr-2 w-full sm:w-auto"
              >
                Añadir al carrito
              </Button>
              
              <Button 
                size="large" 
                icon={<HeartOutlined />} 
                onClick={handleAddToWishlist}
                className="mr-2 w-full sm:w-auto"
              >
                Favorito
              </Button>

              <Button 
                size="large" 
                icon={<ShareAltOutlined />} 
                onClick={handleShare}
                className="w-full sm:w-auto"
              >
                Compartir
              </Button>
            </div>
            
            <Divider className="my-4" />
            
            <div>
              <div className="flex items-center mb-2">
                <SafetyCertificateOutlined className="mr-2 text-green-600" />
                <Text>Garantía de satisfacción de 30 días</Text>
              </div>
              <div className="flex items-center mb-2">
                <TruckOutlined className="mr-2 text-blue-600" />
                <Text>Envío gratis para pedidos superiores a 50€</Text>
              </div>
              <div className="flex items-center">
                <ShopOutlined className="mr-2 text-orange-600" />
                <Text>Recogida gratuita en tienda</Text>
              </div>
            </div>
          </Card>
          
          {/* Detalles del juego */}
          <Card className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Text strong>Desarrollador:</Text>
                <Text className="ml-2">{product.developer}</Text>
              </div>
              <div>
                <Text strong>Distribuidor:</Text>
                <Text className="ml-2">{product.publisher}</Text>
              </div>
              <div>
                <Text strong>Fecha de lanzamiento:</Text>
                <Text className="ml-2">{product.releaseDate}</Text>
              </div>
              <div>
                <Text strong>Clasificación:</Text>
                <Text className="ml-2">{product.ageRating}</Text>
              </div>
              <div>
                <Text strong>Idiomas:</Text>
                <Text className="ml-2">{product.languages.join(', ')}</Text>
              </div>
              <div>
                <Text strong>Plataformas:</Text>
                <Text className="ml-2">{product.platforms.join(', ')}</Text>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      
      {/* Pestañas de información adicional */}
      <div className="mt-8">
        <Tabs 
          defaultActiveKey="1" 
          onChange={(key) => setActiveTab(key)}
          className="product-tabs"
          size="large"
        >
          <Item tab="Descripción" key="1">
            <Card>
              <div className="product-description" dangerouslySetInnerHTML={{ __html: product.description }} />
            </Card>
          </Item>
          
          <Item tab="Características" key="2">
            <Card>
              <List
                dataSource={product.features}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<CheckCircleFilled style={{ color: '#52c41a' }} />}
                      title={item}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Item>
          
          <Item tab="Especificaciones" key="3">
            <Card>
              <Descriptions
                bordered
                column={{ xxl: 3, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}
              >
                <Descriptions.Item label="Género">{product.specifications.genre}</Descriptions.Item>
                <Descriptions.Item label="Jugadores">{product.specifications.players}</Descriptions.Item>
                <Descriptions.Item label="Idioma Texto">{product.specifications.textLanguage}</Descriptions.Item>
                <Descriptions.Item label="Idioma Voces">{product.specifications.voiceLanguage}</Descriptions.Item>
                <Descriptions.Item label="Tamaño del archivo">{product.specifications.fileSize}</Descriptions.Item>
                <Descriptions.Item label="Controles compatibles">{product.specifications.supportedControllers}</Descriptions.Item>
              </Descriptions>
            </Card>
          </Item>
          
          <Item tab={`Reseñas (${product.reviewCount})`} key="4">
            <Card>
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <StarFilled className="text-yellow-400 text-xl mr-2" />
                  <Title level={4} className="mr-2 mb-0">
                    {product.rating} de 5
                  </Title>
                  <Text type="secondary">
                    ({product.reviewCount} reseñas)
                  </Text>
                </div>
                <Rate disabled defaultValue={product.rating} allowHalf className="mb-4" />
              </div>
              
              <Divider />
              
              <List
                itemLayout="vertical"
                dataSource={product.reviews}
                renderItem={(review) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar>{review.userName.charAt(0)}</Avatar>}
                      title={
                        <div className="flex items-center">
                          <Text strong className="mr-3">{review.userName}</Text>
                          <Rate disabled defaultValue={review.rating} className="text-sm" />
                        </div>
                      }
                      description={`Publicado el ${review.date}`}
                    />
                    <Text>{review.content}</Text>
                  </List.Item>
                )}
              />
              
              <div className="text-center mt-6">
                <Button type="primary">
                  Escribir una reseña
                </Button>
              </div>
            </Card>
          </Item>
        </Tabs>
      </div>
      
      {/* Productos relacionados */}
      <div className="mt-12">
        <Title level={3} className="mb-6">
          Productos relacionados
        </Title>
        
          </div>
          </div>
        )
};

export default ProductDetailPage;