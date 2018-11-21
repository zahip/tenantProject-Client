import React from 'react';
import { FilterContainer } from './style';

const FilterComp = ( { handleFilter } ) => {
    return (
       <FilterContainer>
           <li onClick={() => handleFilter("All tenants")}>All tenants</li>
           <li onClick={() => handleFilter("Have debts")}>Have debts</li>
           <li onClick={() => handleFilter("Not have any debt")}>Not have any debt</li>
       </FilterContainer> 
    );
};

export default FilterComp;