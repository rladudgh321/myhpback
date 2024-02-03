import ConsultModal from "@/components/modal/consult";
import useInput from "@/hook/useInput";
import { CONSULT_REQUEST } from "@/reducer/post";
import { Button, Form, Input, Modal } from "antd";
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const ConsultForm = () => {
  const dispatch = useDispatch();
  const { consultDone } = useSelector((state) => state.post);
  const [name, onChangeName, setName] = useInput('');
  const [contact, onChangeContact, setContact] = useInput('');
  const [consult, onChangeConsult, setConsult] = useInput('');
  const [text, onChangeText, setText] = useInput('');
  const onSubmit = useCallback(() => {
    console.log({name, contact, consult, text});
    dispatch({
      type: CONSULT_REQUEST,
      data: { name, contact, consult, text },
    })
  },[name, contact, consult, text]);
  useEffect(() => {
    if(consultDone) {
      setName('');
      setContact('');
      setConsult('');
      setText('');
    }
    return () => {
      if(consultDone) {
        return alert('상담신청 완료')
      }
    }
  },[consultDone]);
  return (
    <div style={{ maxWidth:'1110px', maxHeight:'1760px', display: 'flex', flexDirection:'column', alignItems: 'center', margin: '0 auto' }}>
      <Form onFinish={onSubmit}>
        <Input value={name} onChange={onChangeName} placeholder="* 성함" style={{ marginTop: '10px' }} />
        <Input value={contact} onChange={onChangeContact} placeholder="* 연락처" style={{ marginTop: '10px' }} />
        <Input value={consult} onChange={onChangeConsult} placeholder="솔루션문의" style={{ marginTop: '10px' }} />
        <Input.TextArea value={text} onChange={onChangeText} placeholder="궁금하신 내용을 작성해 주세요" style={{ marginTop: '10px' }} />
        <Button style={{ background:'yellow', fontSize: '1.3rem', fontWeight:'bold', height: '40px', float:'right', marginTop:'10px' }} htmlType='submit' >홈페이지 상담신청</Button>
      </Form>
    </div>
  );
}

export default ConsultForm;