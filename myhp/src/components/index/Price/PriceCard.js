import { Button, Card, Row, Col } from "antd";

const PriceCard = () => {
  return (
    <Row gutter={{xs:2, sm:2, md:2, lg:2, xl:2, xxl:2}} style={{ zIndex: 1 }}>
      <div style={{ maxWidth:'1110px', maxHeight:'1760px', margin: '0 auto' }}>
        <div className="price_card" style={{ display: 'flex' }}>
        <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
          <Card style={{ display: 'flex', alignItems:'center', justifyContent:'center', textAlign:'center', width:'600px' }}>
            <img src="https://bigwood.kr/static/images/icons/map-2.png" width={100} height={100} />
            <div>₩ 139 /만원</div>
            <div>₩ 99 /만원</div>
            <div>(30% 할인중!)</div>
            <div>직원별 미니홈피</div>
            <div>건축물대장 자동입력</div>
            <div>1GB 호스팅 1년 제공</div>
            <div>도메인 1년 제공</div>
            <div>로고 디자인</div>
            <div>메인페이지 디자인</div>
            <div>모바일포함</div>
            <Button>샘플보기</Button>
          </Card>
          </Col>
          <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
          <Card style={{ display: 'flex', alignItems:'center', justifyContent:'center', textAlign:'center', width:'600px' }}>
            <img src='https://bigwood.kr/static/images/icons/internet.png' width={100} height={100} />
            <div>해외서비스형</div>
            <div>₩ 490 /만원</div>
            <div>다국어팩</div>
            <div>2GB 호스팅 1년 제공</div>
            <div>도메인 1년 제공</div>
            <div>로고 디자인</div>
            <div>메인페이지 디자인</div>
            <div>모바일포함</div>
            <Button>샘플보기</Button>
          </Card>
          </Col>
          <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
          <Card style={{ display: 'flex', alignItems:'center', justifyContent:'center', textAlign:'center', width:'600px' }}>
            <img src="https://bigwood.kr/static/images/icons/map.png" width={100} height={100} />
            <div>플랫폼형</div>
            <div>₩ 690 /만원</div>
            <div>중개소 가입 및 매물 등록가능</div>
            <div>직원별 미니홈피</div>
            <div>2GB 호스팅 1년 제공</div>
            <div>로고 디자인</div>
            <div>메인페이지 디자인</div>
            <div>모바일포함</div>
            <Button>샘플보기</Button>
          </Card>
          </Col>
        </div>
        <div className="price_card_box" style={{ border: '1px solid black', margin:'15px 0', padding: '25px' }}>
        <div style={{ textAlign:'center', fontWeight:'bold'  }}>유지비용 및 기타안내</div>
        <ul>
          <li style={{ marginTop: '10px' }}>호스팅 1년 1기가(매물 600개 가량) 5만원</li>
          <li style={{ marginTop: '10px' }}>도메인 1년 2만원5천원</li>
          <li style={{ marginTop: '10px' }}>부가가치세 10%는 별도 입니다</li>
        </ul>
        </div>
      </div>
    </Row>
  );
}

export default PriceCard;