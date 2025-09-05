import type { Product } from "@/types/interfaces";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";
import { ref } from "vue";

interface WishlistState {
  [code: string]: boolean;
}

export function useWishlist() {
    const isCheckWishlist = ref<WishlistState>({});
    const wishlist = ref<Product[]>([]);

    const getItemsWishlist = (): string[] => {
        return getLocalStorage('wishlist') || [];
    }

    const validateWishlist = (): void => {
        const itemsWishlist: string[] = getItemsWishlist();
        itemsWishlist.forEach(item => { isCheckWishlist.value[item] = true; });
    };

    const handleToggleWishlist = (code: string): void => {
        isCheckWishlist.value[code] = !isCheckWishlist.value[code];

        let itemsWishlist: string[] = getItemsWishlist();

        if (isCheckWishlist.value[code]) {
            if (!itemsWishlist.includes(code)) {
                itemsWishlist.push(code);
            }
        } else {
            itemsWishlist = itemsWishlist.filter(item => item !== code);
        }
        setLocalStorage('wishlist', itemsWishlist);
    };

    const removeLocalStorageWishlist = (code: string): void => {
        let itemsWishlist: string[] = getItemsWishlist();
        itemsWishlist = itemsWishlist.filter((item: string) => item !== code);
        setLocalStorage('wishlist', itemsWishlist);
    };

    const removeFromWishlist = (item: Product): void => {
        wishlist.value = wishlist.value.filter(product => product.code !== item.code);
        removeLocalStorageWishlist(item.code);
    };

    return {
        wishlist,
        isCheckWishlist,
        getItemsWishlist,
        validateWishlist,
        handleToggleWishlist,
        removeLocalStorageWishlist,
        removeFromWishlist,
    };
}
