import AppLayout from "@/AppLayout";
import BackLayout from "@/BackLayout";
import { FINDALL_CONSULT_REQUEST } from "@/reducer/post";

import { Button, ConfigProvider, Switch, Table } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
const Admin = () => {
  const dispatch = useDispatch();
  const { consultBox } = useSelector((state)=>state.post);
  console.log({consultBox});
  const columns = [
    {
      title: '매물번호',
      dataIndex: 'landNumber',
    },
    {
      title: '공개여부',
      dataIndex: 'ispublic',
    },
    {
      title: '거래완료',
      dataIndex: 'isdone',
    },
    {
      title: '성함',
      dataIndex: 'name',
    },
    {
      title: '연락처',
      dataIndex: 'contact',
    },
    {
      title: '솔루션 문의',
      dataIndex: 'consult',
    },
    {
      title: '문의사항',
      dataIndex: 'text',
    },
  ];
  const data = [];
  
  for (let i = 0; i < consultBox?.length; i++) {
    data.push({
      key: i+1,
      landNumber: new Date().toISOString().slice(0,10)+ '-' + (i+1),
      ispublic:  <Switch style={{ width:'50px' }} checkedChildren="on" unCheckedChildren="off" defaultChecked />,
      isdone: <Switch style={{ width:'50px' }} checkedChildren="on" unCheckedChildren="off" />,
      name: consultBox[i]?.name,
      contact: consultBox[i]?.contact,
      consult: consultBox[i]?.consult,
      text: consultBox[i]?.text
    });
  }

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    columnWidth: '16px'
  };

  useEffect(() => {
    dispatch({
      type: FINDALL_CONSULT_REQUEST
    });
  },[]);
  return (
    <>
      <AppLayout>
        <BackLayout>
          <h2>상담 메시지</h2>
          <div
            style={{
              marginBottom: 16,
            }}
          >
            <span
              style={{
                marginLeft: 8,
              }}
            >
            </span>
          </div>
          <ConfigProvider
            theme={{
              components: {
                Table: {
                  cellFontSize: 12,
                  cellPaddingInline: 0
                },
              },
            }}
          >

          <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
          </ConfigProvider>
        </BackLayout>
      </AppLayout>
    </>
  );
}

export default Admin;