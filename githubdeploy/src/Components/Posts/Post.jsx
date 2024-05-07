import  { useState } from 'react';

const Post = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [price, setPrice] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
    // Reset price when dropdown changes
    setPrice('');
  };

  const handlePriceChange = (event) => {
    const inputPrice = event.target.value;
    // Check if price is multiple of 5
    if (inputPrice % 5 === 0) {
      setPrice(inputPrice);
    }
  };

  return (
    <div>
      <label>Select an option:</label>
      <select value={selectedOption} onChange={handleDropdownChange}>
        <option value="">Select Option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        {/* Add more options as needed */}
      </select>
      
      <br />
      
      <label>Enter Price:</label>
      <input 
        type="tel" 
        value={price} 
        onChange={handlePriceChange} 
        placeholder="Enter price (multiple of 5)" 
      />
    </div>
  );
};

export default Post;
