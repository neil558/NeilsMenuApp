import React from 'react';

const Categories = ({ filterItems, categoriesItems }) => {

  return (

    <div>
      <div className='btn-container'>
        {categoriesItems.map((category, index) => {

          return(
          <button type='button' className='filter-btn' key={index}
            onClick={() => filterItems(category)}>
            {category}</button>)

        })}
      </div>
    </div>


  );
};

export default Categories;
