import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AppContext = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingCartItem = state.cart.items.find(item => item.id === action.payload.id);
      if (existingCartItem) {
        return {
          ...state,
          cart: {
            ...state.cart,
            items: state.cart.items.map(item =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          },
          notifications: [...state.notifications, {
            id: Date.now(),
            type: 'success',
            message: `Increased quantity of ${action.payload.name}`
          }]
        };
      }
      return {
        ...state,
        cart: {
          ...state.cart,
          items: [...state.cart.items, { ...action.payload, quantity: 1, addedAt: Date.now() }]
        },
        notifications: [...state.notifications, {
          id: Date.now(),
          type: 'success',
          message: `${action.payload.name} added to cart!`
        }]
      };
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: {
          ...state.cart,
          items: state.cart.items.filter(item => item.id !== action.payload)
        }
      };
    
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: {
          ...state.cart,
          items: state.cart.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          )
        }
      };
    
    case 'TOGGLE_WISHLIST':
      const isInWishlist = state.wishlist.some(item => item.id === action.payload.id);
      return {
        ...state,
        wishlist: isInWishlist
          ? state.wishlist.filter(item => item.id !== action.payload.id)
          : [...state.wishlist, { ...action.payload, addedAt: Date.now() }],
        notifications: [...state.notifications, {
          id: Date.now(),
          type: 'info',
          message: isInWishlist 
            ? `Removed ${action.payload.name} from wishlist`
            : `Added ${action.payload.name} to wishlist!`
        }]
      };
    
    case 'ADD_TO_RECENTLY_VIEWED':
      const filteredRecent = state.recentlyViewed.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        recentlyViewed: [action.payload, ...filteredRecent].slice(0, 6)
      };
    
    case 'APPLY_COUPON':
      const coupons = {
        'WELCOME10': { discount: 10, minAmount: 50 },
        'SAVE20': { discount: 20, minAmount: 100 },
        'FREESHIP': { discount: 0, freeShipping: true }
      };
      
      const coupon = coupons[action.payload];
      if (!coupon) {
        return {
          ...state,
          notifications: [...state.notifications, {
            id: Date.now(),
            type: 'error',
            message: 'Invalid coupon code'
          }]
        };
      }
      
      return {
        ...state,
        cart: {
          ...state.cart,
          coupon: { code: action.payload, ...coupon }
        },
        notifications: [...state.notifications, {
          id: Date.now(),
          type: 'success',
          message: `Coupon applied! ${coupon.discount ? `${coupon.discount}% off` : 'Free shipping'}`
        }]
      };
    
    case 'REMOVE_COUPON':
      return {
        ...state,
        cart: {
          ...state.cart,
          coupon: null
        }
      };
    
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [...state.notifications, { ...action.payload, id: Date.now() }]
      };
    
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(n => n.id !== action.payload)
      };
    
    case 'CLEAR_CART':
      return {
        ...state,
        cart: { items: [], coupon: null }
      };
    
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      };
    
    default:
      return state;
  }
};

const initialState = {
  cart: { items: [], coupon: null },
  wishlist: [],
  recentlyViewed: [],
  notifications: [],
  theme: 'light',
  user: null
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const savedState = localStorage.getItem('appState');
    if (savedState) {
      const parsed = JSON.parse(savedState);
      // Only load certain parts to avoid conflicts
      if (parsed.cart) {
        parsed.cart.items.forEach(item => {
          dispatch({ type: 'ADD_TO_CART', payload: item });
        });
      }
    }
    
    const interval = setInterval(() => {
      state.notifications.forEach(notification => {
        if (Date.now() - notification.id > 5000) {
          dispatch({ type: 'REMOVE_NOTIFICATION', payload: notification.id });
        }
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [state.notifications]);

  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(state));
    document.body.setAttribute('data-theme', state.theme);
  }, [state]);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
    }
  };

  const toggleWishlist = (product) => {
    dispatch({ type: 'TOGGLE_WISHLIST', payload: product });
  };

  const addToRecentlyViewed = (product) => {
    dispatch({ type: 'ADD_TO_RECENTLY_VIEWED', payload: product });
  };

  const applyCoupon = (code) => {
    dispatch({ type: 'APPLY_COUPON', payload: code });
  };

  const removeCoupon = () => {
    dispatch({ type: 'REMOVE_COUPON' });
  };

  const addNotification = (notification) => {
    dispatch({ type: 'ADD_NOTIFICATION', payload: notification });
  };

  const removeNotification = (id) => {
    dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const getCartTotal = () => {
    return state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemsCount = () => {
    return state.cart.items.reduce((total, item) => total + item.quantity, 0);
  };

  const getDiscountedTotal = () => {
    const subtotal = getCartTotal();
    const coupon = state.cart.coupon;
    
    if (!coupon) return subtotal;
    
    let discount = 0;
    if (coupon.discount > 0 && subtotal >= coupon.minAmount) {
      discount = (subtotal * coupon.discount) / 100;
    }
    
    return Math.max(0, subtotal - discount);
  };

  const isInWishlist = (productId) => {
    return state.wishlist.some(item => item.id === productId);
  };

  return (
    <AppContext.Provider value={{
      ...state,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleWishlist,
      addToRecentlyViewed,
      applyCoupon,
      removeCoupon,
      addNotification,
      removeNotification,
      clearCart,
      toggleTheme,
      getCartTotal,
      getCartItemsCount,
      getDiscountedTotal,
      isInWishlist
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};