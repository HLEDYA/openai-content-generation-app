import QueryForm from "./QueryForm";

const ProductDescription = () => {
  return (
    <div>
      <QueryForm
        title="Generate Product Descriptions"
        description="What product would you like to get a description for?"
        inputPlaceHolder="Enter product name"
        note="Enter as much information as possible for more accurate
        description"
        apiRoute="product-description"
      />
    </div>
  );
};

export default ProductDescription;
