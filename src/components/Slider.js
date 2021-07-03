import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import Title from './Title';
import Accordion from 'react-bootstrap/Accordion'
import styled from 'styled-components'

export default class Slider extends Component {
    render() {
        return (
            <React.Fragment>
                <Title ad="NEDEN FRONTEND ?"/>
                
            <Man>    <Accordion >
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
    <span> Frontend Nedir?</span>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body><span className="oz">Öncelikle müşterinin istekleri net anlaşılır ve web sitenin nasıl olması gerektiği bilgisi alınır. Bu bilgi ve istek doğrultusunda site haritaları çıkartılır.
Tasarımcı bu bilgileri alır ve müşterinin talep ettiği şekilde kullanılabilirliği ve uygulanabilirliği mümkün olan bir tasarımı çıkartıp müşterinin onayına sunar. Müşterinin istediğini tasarım ortamına aktarma işlemi yapar. Renk uyumunun nasıl olacağına karar verilir. vs. Bu kısım biraz sancılı olabiliyor. Tasarım konusunda Steve Jobs’un sözünü boşuna yazmadık 😉 Onay alınan tasarım .psd ve benzeri formatlarda front-end developer’ın ekmeğidir. 🙂
Front-end developer tasarımı alır ve HTML ile CSS yeteneklerini kullanarak sayfayı ayağa kaldırır. 🙂 Bu işlem sırasında çoğu zaman Javascript ve kütüphaneleri(jQuery vb.) kullanıldığında unutulmamalıdır. Statik bir biçimde sitemiz hazır duruma geliyor.
Genelde statik siteden dinamik siteye geçiş oluyor. Dinamik sitelerde ise front-end web developerdan çıkan tasarım back-end developer olan kişilere geçer. Web siteye yönetim panelinin programlanması, ürün giriş ve çıkışın olacağı bir mekanizma programlanması gibi işlemleri back-end developer yapar. Günümüzde e-ticaret siteleri, haber siteleri vb. dinamik sitelere örnektir.</span></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
  <Accordion.Toggle as={Card.Header} eventKey="1">
    <span> Frontend Geliştirici? </span>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body className="b"><span className="oz">Genellikle Front-end, web tasarım ve front-end web geliştirme olarak iki kısımdan oluşmaktadır. Web tasarım ve Front-end developer kısımlarının ayrı birer alan olduğunu web geliştirme sürecinde nasıl ayrıldığını biliyoruz.

Bir web sitesinin ön yüzünü kodlayan programcıdır. Genellikle tasarım dosyasını HTML, JavaScript (JS) ve/veya CSS kodlarını(Web teknolojileri) kullanarak web site halini almasını sağlayan birisidir. Web site düzeni, resimler, içerik, butonlar ve linkleri içeren web sitenin ön yüz yapısının kod kısmı ile ilgilenirler.

Zamanını nasıl kullanır?
Ortak çalışır
Müşteriler, içerik oluştucu, back-end developer ve proje yöneticisi ile etkileşim içindedir.

Sözlü tercümandır
Tasarımcının hayal gücünü, renk şemalarını, yazı tiplerini, başlıkları kod ortamına aktaran ve sayfaları bütünleştiren kişidir.

Birleştirendir
Tasarımcı ve back-end developer’ın tam ortasında olduğu için onlarla paslaşır. Tasarımı parçalar ve web sitelerin her bir parçasının çalışır vaziyette kodunu geliştirir.

Test edendir
Bir çok farklı browser ve platform da web sitesinin işlevselliğine bakmalıdır.

En iyileştiricidir
Kullanılabilir, erişilebilir SEO dostu web siteler ortaya çıkartmalıdır.

Sağlamlaştırma yapandır
Çalışıyordu ama şimdi çalışmıyor olayı olmamalıdır. Web site her zaman çalışmalıdır.

Araştırma yapandır
Tasarım ve kod trendlerini web sitelerde diri tutulmalıdır.</span></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
  <Accordion.Toggle as={Card.Header} eventKey="2">
  <span> Özellikleri Nelerdir?</span>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body><span className="oz">Front-end developer nasıl olmalı<br/>
Konsantrasyon<br/>
Meraklı<br/>
Detay yönelimli<br/>
Sosyal kişiliğe sahip olan<br/>
Kreatif</span></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="3">
    <span> Front-end developer alt ünvanları</span>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body><span className="oz">CSS/HTML Developer
Front-end Web Developer
Front-end JavaScript Developer
Front-end Software Developer
Front-end JavaScript Application Developer
Web/Front-end user Interface Developer
Mobile/Tablet Front-end Developer
Front-end SEO Expert
Front-end Accessibility Expert
Front-end Dev. Opts
Front-end Testing/QA</span></Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion></Man>
                 
            </React.Fragment>
        )
    }
}
  
const Man=styled.div`
margin-left:350px;
margin-right:350px;
span{
color:dodgerblue;
font-size:27px;
font-weight:bold
}
.oz{
color:black;
font-family:sans-serif;
font-size:20px;
font-weight:bold
}
@media screen and (max-width:700px){
    margin-top:20px;
    margin-left:50px;
    margin-right:50px;
    span{
        color:rgb(124, 60, 197);
        font-size:17px;
        font-weight:bold
        }
        .oz{
            color:black;
            font-family:sans-serif;
            font-size:14px;
            font-weight:bold;
            opacity:0.8
            }
}
`;