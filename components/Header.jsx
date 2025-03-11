'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Input, Badge, Drawer, Button, Dropdown, Menu, Space } from 'antd';
import { 
  ShoppingCartOutlined, 
  UserOutlined, 
  SearchOutlined, 
  AppstoreAddOutlined,
  MenuOutlined,
  BookOutlined,
  HeartOutlined
} from '@ant-design/icons';

const { Search } = Input;


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); 
  const router = useRouter();

  const onSearch = (value) => {
    if (value) {
      router.push(`/products/search?q=${encodeURIComponent(value)}`);
      setMobileMenuOpen(false);
    }
  };

  const categoriesMenu = (
    <Menu
      items={[
        {
          key: 'videogames',
          icon: <AppstoreAddOutlined />,
          label: <Link href="/products/videogames">Videojuegos</Link>
        },
        {
          key: 'comics',
          icon: <BookOutlined />,
          label: <Link href="/products/comics">Cómics</Link>
        },
        {
          key: 'manga',
          icon: <BookOutlined />,
          label: <Link href="/products/manga">Manga</Link>
        },
        {
          key: 'merchandise',
          icon: <HeartOutlined />,
          label: <Link href="/products/merchandise">Merchandising</Link>
        }
      ]}
    />
  );

  const userMenu = (
    <Menu
      items={[
        {
          key: 'profile',
          label: <Link href="/account/profile">Mi Perfil</Link>
        },
        {
          key: 'orders',
          label: <Link href="/account/orders">Mis Pedidos</Link>
        },
        {
          key: 'wishlist',
          label: <Link href="/account/wishlist">Lista de Deseos</Link>
        },
        {
          type: 'divider'
        },
        {
          key: 'logout',
          label: 'Cerrar Sesión'
        }
      ]}
    />
  );

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-r from-blue-900 to-purple-900 text-white` }>  
      <div className="hidden md:block bg-black text-white text-center py-1 padding-6">
        🔥 ¡On sale! 15% discount on mangas this weekend with: MANGA15
      </div>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative w-10 h-10 mr-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
              GS
            </div>
          </div>
          <span className={`font-bold text-xl text-white`}>
            GeekShop
          </span>
        </Link>

        <div className="hidden md:flex space-x-1">
          <Dropdown menu={{ items: categoriesMenu.props.items }} placement="bottom">
            <Button type={"ghost"} className={"text-white"}>
            <span className='text-white'>Categories</span>
            </Button>
          </Dropdown>
          
          <Link href="/ofertas" passHref>
            <Button type={"ghost"}>
              <span className='text-white'>Sale</span>
            </Button>
          </Link>
          
          <Link href="/nuevos" passHref>
            <Button type={"ghost"} className={"text-white"}>
            <span className='text-white'>News</span>
            </Button>
          </Link>
          
        </div>

        <div className="hidden md:block w-1/3">
          <Search
            placeholder="Search videogames, mangas, comics..."
            onSearch={onSearch}
            className={`rounded-full search-dark`}
            size="middle"
          />
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <Dropdown menu={{ items: userMenu.props.items }} placement="bottomRight">
              <Button 
                type={"ghost"} 
                icon={<UserOutlined style={{ color: 'white !important'}}/>} 
                className={"text-white"}
              />
            </Dropdown>
          </div>
          
          <Badge count={cartCount} showZero>
            <Link href="/cart" passHref>
              <Button 
                type={"ghost"} 
                icon={<ShoppingCartOutlined style={{ color: 'white !important'}}/>} 
                className={"text-white"}
              />
            </Link>
          </Badge>
          
          <Button
            type={"ghost"}
            className={`md:hidden text-white ml-3`}
            icon={<MenuOutlined style={{ color: 'white !important'}}/>}
            onClick={() => setMobileMenuOpen(true)}
          />
        </div>
      </div>

      {/* Drawer para menú móvil */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        width={280}
      >
        <div className="flex flex-col space-y-4">
          <Search
            placeholder="Search products..."
            onSearch={onSearch}
            className="mb-4"
          />
          
          <Link href="/account/profile" passHref>
            <Button type="link" icon={<UserOutlined />} className="flex items-center justify-start">
              Mi Cuenta
            </Button>
          </Link>
          
          <Link href="/products/videogames" passHref>
            <Button type="link" icon={<AppstoreAddOutlined />} className="flex items-center justify-start">
              Videojuegos
            </Button>
          </Link>
          
          <Link href="/products/comics" passHref>
            <Button type="link" icon={<BookOutlined />} className="flex items-center justify-start">
              Cómics
            </Button>
          </Link>
          
          <Link href="/products/manga" passHref>
            <Button type="link" icon={<BookOutlined />} className="flex items-center justify-start">
              Manga
            </Button>
          </Link>
          
          <Link href="/products/merchandise" passHref>
            <Button type="link" icon={<HeartOutlined />} className="flex items-center justify-start">
              Merchandising
            </Button>
          </Link>
          
          <div className="border-t pt-4 mt-2">
            <Link href="/ofertas" passHref>
              <Button type="link" className="flex items-center justify-start">
                Ofertas
              </Button>
            </Link>
            
            <Link href="/nuevos" passHref>
              <Button type="link" className="flex items-center justify-start">
                Novedades
              </Button>
            </Link>
            
          </div>
        </div>
      </Drawer>

      <style jsx global>{`
        .search-dark .ant-input,
        .search-dark .ant-input-group-addon {
          background-color: rgba(255, 255, 255, 0.2);
          border-color: transparent;
          color: white;
        }
        .search-dark .ant-input::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
        .search-dark .ant-input-search-button {
          background-color: rgba(255, 255, 255, 0.3);
          border-color: transparent;
          color: white;
        }
      `}</style>
    </header>
    </>
  );
};

export default Header;