const FaqPage = () => {
  return (
    <div>
      <div className="collapse collapse-plus bg-purple-500 border border-base-300">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold">
          What happens to my shopping cart if I close the browser?
        </div>
        <div className="collapse-content text-sm">
          Your cart is saved! Thanks to Local Storage Integration, all the items
          in your cart, along with the total cost, are automatically saved. When
          you return to the website, even in a new browser session, your cart
          will be restored exactly as you left it.
        </div>
      </div>
      <div className="collapse collapse-plus bg-purple-500 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          How can I organize the products to see only the highest-rated ones
          first?
        </div>
        <div className="collapse-content text-sm">
          You can easily do this using the Smart Sorting & Filtering feature.
          Simply use the "Sort by Rating" option, which will dynamically
          reorganize the product list to show the items with the highest
          customer ratings at the top, all without needing to refresh the page.
        </div>
      </div>
      <div className="collapse collapse-plus bg-purple-500 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          Is there a central place where I can manage both my cart and my
          wishlist?
        </div>
        <div className="collapse-content text-sm">
          Yes! The Product Dashboard & Management serves as a central hub. From
          the main dashboard, you can easily view all the items in your shopping
          cart and your saved wishlist, allowing you to manage or move items
          between them conveniently.
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
