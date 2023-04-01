import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { IProduct } from '../interfaces/Product';

type Props = {}

const TableProduct = (props: Props) => {
   
      
      const App: React.FC = () => <Table columns={columns} dataSource={data} />;
}

export default TableProduct