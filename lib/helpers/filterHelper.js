export const filterHelper = ({products, filters, sortBy, setFilteredProducts, setCurrentPage}) => {
    if (products.length > 0) {
        let result = [...products];
        
        if (filters.platforms.length > 0) {
          result = result.filter(comic => 
            comic.platforms.some(platform => filters.platforms.includes(platform))
          );
        }
        
        if (filters.categories.length > 0) {
          result = result.filter(comic => 
            comic.categories.some(category => filters.categories.includes(category))
          );
        }
        
        result = result.filter(comic => {
          const price = comic.discountPrice || comic.price;
          return price >= filters.priceRange[0] && price <= filters.priceRange[1];
        });
        
        if (filters.onlyDiscount) {
          result = result.filter(comic => comic.discountPrice !== null);
        }
        
        if (filters.onlyInStock) {
          result = result.filter(comic => comic.stock > 0);
        }
        
        if (filters.rating > 0) {
          result = result.filter(comic => comic.rating >= filters.rating);
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

        setFilteredProducts(result);
        setCurrentPage(1);
    }
}
