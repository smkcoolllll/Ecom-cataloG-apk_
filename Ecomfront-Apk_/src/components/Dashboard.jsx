import React, { useState } from 'react';
import AddProduct from './AddProduct';
import Products from './Products';
import Navbar from './Navbar';
import AddCategory from './AddCategory';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <Navbar onOptionChange={handleOptionChange} />
      {selectedOption === 'add-product' && <AddProduct />}
      {selectedOption === 'products' && <Products />}
      {selectedOption === 'add-category' && <AddCategory />}
    </div>
  );
};

export default Dashboard;
