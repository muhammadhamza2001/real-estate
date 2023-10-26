import React from 'react';
import { Image, Popover, Skeleton, Table, Typography } from 'antd';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { PaperClipOutlined } from '@ant-design/icons';




const data = [
    {
        title: 'id',
        dataIndex: 'property_id',
        key: 'id',

    },
    {
        title: 'image',

        key: 'image',
        render: (item) => {
            return (
                <>
                   
                        <Image width={100}
                            src={item.image} />
                </>
            )
        }


    },
    {
        title: 'bedrooms',
        dataIndex: 'bedrooms',
        key: 'bedrooms',
    },
    {
        title: 'Bathrooms',
        dataIndex: 'bathrooms',
        key: 'bathrooms',
    },
    {
        title: 'Display Address',
        dataIndex: 'displayAddress',
        key: 'displayAddress',
    },
    {
        title: 'Property Sub Type',
        dataIndex: 'propertySubType',
        key: 'propertySubType',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Property URL',

        key: 'propertyUrl',
        render: (item) => <Link to={item.propertyUrl} target='_blank' rel="noreferrer"><PaperClipOutlined /><span>Link</span></Link>,
    },
    {
        title: 'First Visible Date',
        dataIndex: 'firstVisibleDate',
        key: 'firstVisibleDate',
    },
    {
        title: 'Property Full Description',
        dataIndex: 'propertyTypeFullDescription',
        key: 'propertyTypeFullDescription',
    },
    {
        title: 'Added Or Reduced',
        dataIndex: 'addedOrReduced',
        key: 'addedOrReduced',
    },
    {
        title: 'Phone Number',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber',
    },
    {
        title: 'Branch Display Name',
        dataIndex: 'branchDisplayName',
        key: 'branchDisplayName',
    },
    {
        title: 'Area',

        key: 'Area',
        render: (item) => <Typography.Text>{item.area.name}</Typography.Text>,
    },
    {
        title: 'Zip',

        key: 'Zip',
        render: (item) => <Typography.Text>{item.area.zip}</Typography.Text>,
    },
];


const Rightmovetable = () => {
    const tabledata = useQuery('rightmove', async () => {
        return axios.get('http://192.168.20.130:8000/api/rightmove/properties/');
    });

    const right_move_table_data = tabledata?.data?.data

   

    if (tabledata.isLoading) {
        return <Skeleton />
    }

    return (
        <>
            <div style={{ overflow: "auto" }}>

                <Table rowKey="id" columns={data} dataSource={right_move_table_data} />
            </div>

        </>
    )

}
export default Rightmovetable;