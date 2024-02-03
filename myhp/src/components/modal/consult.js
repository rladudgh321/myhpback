import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const ConsultModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="김영호 홈페이지 나라" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>상담 신청 완료하셨습니다</p>
      </Modal>
    </>
  );
};
export default ConsultModal;