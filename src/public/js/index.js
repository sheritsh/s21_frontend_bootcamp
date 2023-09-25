/* eslint-disable no-undef */
console.log('start index.js');

const MainApp = {
  data() {
    return {
      employeeId: '',
      orders: [],
      isError: false,
    };
  },
  methods: {
    async fetchOrders() {
      try {
        const response = await fetch(`/api/users/${this.employeeId}`);
        const data = await response.json();
        this.orders = data;
        this.employeeId = '';
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    },
    handleFormSubmit() {
      const inputValue = document.getElementById('input_user_id').value;
      const employeeId = parseInt(inputValue, 10);
      if (Number.isInteger(employeeId) && employeeId > 0 && /^\d+$/.test(inputValue)) {
        this.employeeId = employeeId;
        this.fetchOrders();
        this.isError = false;
      } else {
        this.isError = true;
      }
    },
  },
};

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

const OrdersApp = {
  data() {
    return {
      menuItems: [],
      users: [],
      selectedWaiter: null,
      selectedMenuItems: [],
    };
  },
  methods: {
    async fetchMenuItems() {
      try {
        const response = await fetch('/api/menu');
        const data = await response.json();
        this.menuItems = data;
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    },
    async fetchUsers() {
      try {
        const response = await fetch('/api/waiters');
        if (response.ok) {
          const data = await response.json();
          this.users = data;
        } else {
          console.error('Error fetching users');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    toggleMenuItem(index) {
      const menuItemId = this.menuItems[index].id;
      const isSelected = this.selectedMenuItems.includes(menuItemId);
      if (isSelected) {
        this.selectedMenuItems = this.selectedMenuItems.filter((id) => id !== menuItemId);
      } else {
        this.selectedMenuItems.push(menuItemId);
      }
    },
    async submitOrder() {
      try {
        const orderData = {
          userId: this.selectedWaiter,
          items: this.selectedMenuItems,
          isActive: true,
        };

        const response = await fetch('/api/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData),
        });

        if (response.status === 201) {
          const newOrder = await response.json();
          this.selectedWaiter = null;
          this.selectedMenuItems = [];
          setTimeout(() => {
            window.location.href = `/orders/${newOrder.id}`;
          }, 1500);
        }
      } catch (error) {
        console.error('Ошибка при создании заказа:', error);
      }
    },
  },
  computed: {
    isOrderValid() {
      return this.selectedWaiter !== null && this.selectedMenuItems.length > 0;
    },
  },
  mounted() {
    this.fetchMenuItems();
    this.fetchUsers();
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
        console.log(this.totalAmount);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};

Vue.createApp(MainApp).mount('#main');
Vue.createApp(MenuApp).mount('#menu');
Vue.createApp(OrdersApp).mount('#orders');
Vue.createApp(OrderApp).mount('#order');

// other JS code
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

document.querySelector('.login_form__btn').addEventListener('click', async (e) => {
  e.preventDefault();

  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;

  const response = await fetch('/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (response.status === 401 || response.status === 404) {
    const errorMessage = await response.json();
    document.querySelector('.error-message').textContent = errorMessage.message;
  } else if (response.status === 200) {
    window.location.href = '/';
  }
});
