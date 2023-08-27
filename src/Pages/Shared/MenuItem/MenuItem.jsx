// eslint-disable-next-line react/prop-types
const MenuItem = ({ item }) => {
  // eslint-disable-next-line react/prop-types
  const { image, price, name, recipe } = item;
  return (
    <>
      <div className="flex space-x-2">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className="w-[120px]"
          src={image}
          alt=""
        />
        <div>
          <p className="uppercase">Name: {name}___________________</p>
          <p>Recepie:{recipe}</p>
        </div>
        <p className="text-yellow-500">Price: {price}</p>
      </div>
    </>
  );
};

export default MenuItem;
