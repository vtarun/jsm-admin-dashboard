import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Sort, Search, Inject, Toolbar} from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';

import { Header } from '../components';

const Employees = () => {
  const sortSettings = { columns: [
      { field: 'Designation' }
  ] };
  
  
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Employees" category="Page" />
      <GridComponent 
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        allowSorting={true}
        sortSettings={sortSettings}
        toolbar={['Search']}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ Page, Search, Sort, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees
