/* eslint-disable no-undef */

const MenuApp = {
  data() {
    return {
      menuItems: [],
    };
  },
  methods: {
    async fetchMenuItems() {
      try {
        const response = await fetch('/api/menu');
        const data = await response.json();
        this.menuItems = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.fetchMenuItems();
  },
};

const menuPrices = {
  1: 520,
  2: 658,
  3: 245,
  4: 409,
  5: 419,
  6: 375,
};

const OrderApp = {
  data() {
    return {
      orderId: null,
      menuItems: [],
      totalAmount: 0,
    };
  },
  methods: {
    getImageUrl(item) {
      switch (item) {
        case 1: return '/assets/imgs/lasagna.jpg';
        case 2: return '/assets/imgs/salmon_sushi.jpg';
        case 3: return '/assets/imgs/chicken_caesar_salad.jpg';
        case 4: return '/assets/imgs/margherita_pizza.jpg';
        case 5: return '/assets/imgs/carbonara_pasta.jpg';
        case 6: return '/assets/imgs/mushroom_risotto.jpg';
        default: return '';
      }
    },
    getMenuTitle(item) {
      switch (item) {
        case 1: return 'Lasagna';
        case 2: return 'Salmon Sushi';
        case 3: return 'Chicken Caesar Salad';
        case 4: return 'Margherita Pizza';
        case 5: return 'Carbonara Pasta';
        case 6: return 'Mushroom Risotto';
        default: return 'Unknown Item';
      }
    },
    deleteOrder() {
      const { orderId } = this;
      fetch(`/api/orders/${orderId}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            window.location.href = '/';
          } else {
            console.error('Error deleting order');
          }
        })
        .catch((error) => {
          console.error('Network error:', error);
        });
    },
  },
  created() {
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split('/');
    const orderId = pathSegments[pathSegments.length - 1];
    this.orderId = orderId;

    fetch(`/api/orders/${orderId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        this.menuItems = data.items;
        this.totalAmount = this.menuItems.reduce((total, itemId) => {
          const price = menuPrices[itemId];
          return total + price;
        }, 0);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};

Vue.createApp(MenuApp).mount('#menu');
Vue.createApp(OrderApp).mount('#order');

// PopUp success order
const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show();
  });
}

// Add active to current link
const currentPath = window.location.pathname;

const navItems = document.querySelectorAll('.navbar-nav li');

navItems.forEach((item) => {
  const link = item.querySelector('a');
  const href = link.getAttribute('href');

  if (currentPath === href) {
    link.classList.add('active');
  }
});
