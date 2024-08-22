import React from 'react'
import { Carousel } from 'antd';
import certifica1 from "../assets/Sertifika_1_dolu.png"
import certifica2 from "../assets/Sertifika_2_dolu.png"
import certifica3 from "../assets/Sertifika_3_dolu.png"
import CertificaCard from '../Components/CertificaCard';

const contentStyle1 = {
  height: '160px',
  color: '#97a171',
  lineHeight: '160px',
  textAlign: 'center',
  background:"#C0C78C",
  fontFamily: "DM Serif Text",
};

const contentStyle2 = {
  height: '160px',
  color: '#6A9C89',
  lineHeight: '160px',
  textAlign: 'center',
  background:"#C1D8C3",
  fontFamily: "DM Serif Text",
};

const contentStyle3 = {
  height: '160px',
  color: '#A87676',
  lineHeight: '160px',
  textAlign: 'center',
  background:"#F4D9D0",
  fontFamily: "DM Serif Text",
};

const contentStyle4 = {
  height: '160px',
  color: '#E0A75E',
  lineHeight: '160px',
  textAlign: 'center',
  background:"#F5E7B2",
  fontFamily: "DM Serif Text",
};

const Home = () => {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle1}>İstediğiniz sayıda sertifikayı</h3>
        </div>
        <div>
          <h3 style={contentStyle2}>dakikalar içinde</h3>
        </div>
        <div>
          <h3 style={contentStyle3}>Certifo ile</h3>
        </div>
        <div>
          <h3 style={contentStyle4}>kolayca oluşturun✨</h3>
        </div>
      </Carousel>
      <div className='d-flex justify-content-around flex-wrap m-5'>
        <CertificaCard imgUrl={certifica1} title="Bitirme Sertifikası" text="Eğitimi başarıyla tamamlamış öğrenciler için hazırlanmıştır." />
        <CertificaCard imgUrl={certifica2} title="Anasınıfı Diploması" text="Anasınıfından başarıyla mezun olmuş öğrenciler için verilen mezuniyet diplomasıdır."/>
        <CertificaCard imgUrl={certifica3} title="Teşekkür Sertifikası" text="Yıl içerisinde göstermiş olduğu çaba için verilen Teşekkür belgesidir."/>
      </div>
    </div>
  )
}

export default Home;
