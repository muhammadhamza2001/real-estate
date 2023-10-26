import React from 'react';
import { Table } from 'antd';

const data = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
       
    },
    {
        title: 'bedrooms',
        dataIndex: 'bedrooms',
        key: 'bedrooms',
    },
    {
        title: 'Bathrooms',
        dataIndex: 'Bathrooms',
        key: 'Bathrooms',
    },
    {
        title: 'Display Address',
        dataIndex: 'Display Address',
        key: 'Display Address',
    },
    {
        title: 'Property Sub Type',
        dataIndex: 'Property Sub Type',
        key: 'Property Sub Type',
    },
    {
        title: 'Price',
        dataIndex: 'Price',
        key: 'Price',
    },
    {
        title: 'Property URL',
        dataIndex: 'Property URL',
        key: 'Property URL',
    },
    {
        title: 'First Visible Date',
        dataIndex: 'First Visible Date',
        key: 'First Visible Date',
    },
    {
        title: 'Property Full Description',
        dataIndex: 'Property Full Description',
        key: 'Property Full Description',
    },
    {
        title: 'Added Or Reduced',
        dataIndex: 'Added Or Reduced',
        key: 'Added Or Reduced',
    },
    {
        title: 'Phone Number',
        dataIndex: 'Phone Number',
        key: 'Phone Number',
    },
    {
        title: 'Branch Display Name',
        dataIndex: 'Branch Display Name',
        key: 'Branch Display Name',
    },
    {
        title: 'Area',
        dataIndex: 'Area',
        key: 'Area',
    },
    {
        title: 'Zip',
        dataIndex: 'Zip',
        key: 'Zip',
    },
];
const Rightmovetable = () => <Table columns={data} dataSource={[]} />;
export default Rightmovetable;