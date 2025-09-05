import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import WishlistPage from '../pages/WishlistPage.vue';
import CardProduct from '../components/CardProduct/CardProduct.vue';
import ButtonIcon from '../components/ButtonIcon/ButtonIcon.vue';

vi.mock('../utils/localStorage', () => ({
  getLocalStorage: vi.fn(() => []),
  setLocalStorage: vi.fn()
}));

const mockProducts = [
  {
    code: '1',
    name: 'Product 1',
    image: 'img1.jpg',
    rating: 4,
    priceInCents: '1000',
    salePriceInCents: '900'
  },
];

vi.stubGlobal('fetch', vi.fn(async () => ({
  status: 200,
  json: async () => (mockProducts)
})));

describe('WishlistPage.vue', () => {
  let wrapper;

  beforeEach(async () => {
    wrapper = mount(WishlistPage, {
      global: {
        components: { CardProduct, ButtonIcon }
      }
    });
     // Wait for onMounted
    await new Promise(resolve => setTimeout(resolve));
  });

  
  it('displays products when the wishlist has items', async () => {
    const { getLocalStorage } = await import('../utils/localStorage');
    getLocalStorage.mockReturnValue(['1']);

    await wrapper.vm.$forceUpdate();
    await new Promise(resolve => setTimeout(resolve));
    const card = wrapper.findAllComponents(CardProduct);
    expect(card.length).toBe(1);
  });

  it('remove product from wishlist', async () => {
    const { getLocalStorage, setLocalStorage } = await import('../utils/localStorage');
    getLocalStorage.mockReturnValue(['1']);

    const button = wrapper.findAllComponents(ButtonIcon)[0];
    button.trigger('click');

    await new Promise(resolve => setTimeout(resolve));

    const card = wrapper.findAllComponents(CardProduct);
    expect(card.length).toBe(0);
    expect(setLocalStorage).toHaveBeenCalledWith('wishlist', []);
    expect(getLocalStorage).toHaveBeenCalledWith('wishlist');
  });
});
