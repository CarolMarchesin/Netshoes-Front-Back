import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import Home from '../pages/Home.vue';
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
  {
    code: '2',
    name: 'Product 2',
    image: 'img2.jpg',
    rating: 5,
    priceInCents: '2000',
    salePriceInCents: '1800'
  }
];

vi.stubGlobal('fetch', vi.fn(async () => ({
  status: 200,
  json: async () => ({ products: mockProducts })
})));

describe('Home.vue', () => {
  let wrapper;

  beforeEach(async () => {
    wrapper = mount(Home, {
      global: {
        components: { CardProduct, ButtonIcon }
      }
    });
     // Wait for onMounted
    await new Promise(resolve => setTimeout(resolve));
  });

  it('activates and deactivates the favorite button correctly when clicked', async () => {
    const button = wrapper.findAllComponents(ButtonIcon)[0];
    expect(button.classes()).not.toContain('active');

    await button.trigger('click');
    expect(button.classes()).toContain('active');

    await button.trigger('click');
    expect(button.classes()).not.toContain('active');
  });

  it('keeps the favorite button active if the product is saved in localStorage', async () => {
    const { getLocalStorage } = await import('../utils/localStorage');

    getLocalStorage.mockReturnValue(['1']);
    wrapper = mount(Home, {
      global: { components: { CardProduct, ButtonIcon } }
    });
    await new Promise(resolve => setTimeout(resolve));

    const buttonOne = wrapper.findAllComponents(ButtonIcon)[0];
    const buttonTwo = wrapper.findAllComponents(ButtonIcon)[1];

    expect(buttonOne.classes()).toContain('active');
    expect(buttonTwo.classes()).not.toContain('active');
  });

  it('correctly saves and removes the product from the wishlist in localStorage without duplicating', async () => {
    const { setLocalStorage } = await import('../utils/localStorage');

    const button = wrapper.findAllComponents(ButtonIcon)[0];
    await button.trigger('click');
    expect(setLocalStorage).toHaveBeenCalledWith('wishlist', ['1']);

    await button.trigger('click');
    expect(setLocalStorage).toHaveBeenCalledWith('wishlist', []);
  });
});
