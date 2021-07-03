import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import * as FiIcons from 'react-icons/fi';

export default class Demokomut extends Component {
    render() {
        return (
            <Tik className="container">
            <div className="row">
            <div className=" col-lg-12 col-sm-12">
           
<h2>HTML</h2>
<hr/>
<h3>Bölümleme Etiketleri</h3>
article,section,	nav,	aside,
header,	footer,	h1, h2, h3, h4, h5 ve h6
<h3>İçeriği Gruplama Etiketleri</h3>
p,	address,	hr,	pre,
blockquote	,ol	,ul	,li
,dl	,dd,	figure,
figcaption,	main,	div
<h3>Gömülü içerik Etiketleri</h3>
picture,	source,	img,	iframe,
embed,	object,	param,	video,
audio,	track	,map,	area,
form,	label,	input,	button,
select,	datalist,	optgroup,	option,
textarea,	output,	progress,	meter,
fieldset,	legend
<h3>Tablo Etiketleri</h3>
table,	caption,	colgroup,	col,
tbody,	thead,	tfoot,	tr,
td,	th,	 
<h3>Form Etiketleri</h3>
form,	label,	input,	button,
select,	datalist,	optgroup,	option,
textarea,	output,	progress,	meter,
fieldset,	legend,	 <br/>
<img src="https://cdn.webtekno.com/media/cache/content_detail_v2/article/23831/turkiye-deki-yazilim-sektorunu-buyutmek-icin-devletten-onemli-adim-1483725143.jpg"/>
            </div>
            <div className="col-9 col-lg-12 col-sm-12">
            <h2>CSS</h2>
            <h3>@font-face</h3>	Font face özelliği, bilgisayarımızda hazır olarak gelen yazı tiplerinin ( Arial, Verdana vb..) dışında istediğimiz yazı tiplerini kullanmamıza olanak sağlar.
  <h3>font</h3>	Diğer font özelliklerini tek Css özelliği (font) ile tanımlamamızı sağlar.
<h3>font-family</h3>	Yazıların tipini yani hangi font ailesinden olmasını istiyorsak onu belirtmek için kullanılır. Değer olarak sadece bir yazı tipi verebildiğimiz gibi birden fazla değerde verebiliriz. Çünkü verdiğimiz ilk değeri tarayıcı desteklemiyorsa bir sonraki verdiğimiz değeri uygulayacaktır.
<h3>font-size</h3>	Bu özellik ile yazı boyutlarını ayarlayabiliyoruz. Yazı boyutuna px veya em türünden değerler veriyoruz. Tarayıcılar varsayılan olarak yazı boyutunu 16px uygularlar.
<h3>font-style</h3>	
Yazıları italik yapmak için kullanılır. font-style özelliğine şu değerleri verebiliriz:

italic
normal
oblique : İtalic değerine çok benzer ama daha az tarayıcı tarafından desteklenir.
<h3>font-variant</h3>	Yazılarda küçük harfleri büyük harflere çevirmek için kullanılır. Burada şuna dikkat etmemiz gerekiyor. Eğer yazıda hepsi küçük harf ise dönüştürdüğümüzde hepsi aynı boyutta büyük harfe dönüşecektir. Eğer yazıda hem büyük hem küçük harfler varsa, dönüştürdüğümüzde yine hepsi büyük harf olacaktır ama önceden zaten büyük harf olanlar yeni dönüştürülenlerden biraz daha büyük olacaktır.
font-variant özelliğine şu değerleri verebiliriz:

small-caps : Küçük harfleri büyük harflere dönüştürür.
normal
<h3>font-weight</h3>	
Bu özellik ile yazıların kalınlık incelik durumlarını ayarlayabiliriz. font-weight özelliğine şu değerleri verebiliyoruz:

bold
bolder
lighter
normal
100’den 900’e kadar 100’ün katları olacak şekildede verilebilir. 900 en kalını iken, 100’e doğru incelir ve 100’de en ince halini alır
<h3>color</h3>	Bu özellik ile yazılara istediğimiz renkleri verebiliriz. Dilerseniz direk renk adını verebileceğiniz gibi renklerin rgb ve hex kodlarınıda kullanabilirsiniz. Renk kodlarıyla ilgili daha fazla bilgi edinmek isterseniz Tüm Renk İsimleri ve Renk Kodları (Html, Css, Hex, Rgb) yazımı inceleyebilirsiniz.
<h3>letter-spacing</h3>	Yazıların karakterleri arasındaki boşluğu arttırmak veya azaltmak için kullanılır. Negatif değerler verdiğimizde aradaki boşluklar azalır.
<h3>line-height</h3>	Satır yüksekliğini belirlemek için kullanılır.
<h3>word-break</h3>	
Satır sonlarındaki kelimeleri, satırı tam kaplayacak şekilde bölmek için kullanılır. word-break özelliğine şu değerleri verebiliriz:

keep-all : Varsayılan olarak gelen değer.Satır sonundaki kelimeler bölünmez.
break-word : Satır sonundaki sığmayan kelimeler bölünür.
word-spacing	Yazıların kelimeleri arasındaki boşluğu arttırmak veya azaltmak için kullanılır. Negatif değerler verdiğimizde aradaki boşluklar azalır.
<h3>white-space</h3>	
Yazılardaki boşlukların nasıl değerlendirileceğini belirlemek için kullanılır. white-space özelliğine şu değerleri verebiliriz:

normal
nowrap
pre
pre-line
pre-wrap
<h3>word-wrap</h3>	
Bulunduğu alana sığmayacak kadar uzun olan kelimeleri satır sonundan bölmek için kullanılır. word-wrap özelliğine şu değerleri verebiliriz:

normal : Varsayılan olarak gelen değer.
break-word : Sığmayan kelimeyi böler.
<h3>writing-mode</h3>	
Yatay şekilde olan yazıları dikey hale getirmek için kullanılır. writing-mode özelliğine şu değerleri verebiliriz:

horizontal-tb : Yazı yatay halde olur.
vertical-lr : Yazı dikey halde olur.
vertical-rl : Yazı dikey halde olur.
<h3>text-transform</h3>	
Yazılarda küçük harfleri büyük harfe, büyük harfleri küçük harfe dönüştürmek için kullanılır. Aynı zamanda sadece ilk harfleri büyük diğerleri küçük olacak şekilde kelime ve cümlelerde oluşturabiliriz. text-transform özelliğine şu değerleri verebiliriz:

uppercase : Küçük harfleri büyük harfe dönüştürür.
lowercase : Büyük harfleri küçük harfe dönüştürür.
capitalize : İlk harf büyük diğer harfler küçük olacak şekilde dönüştürür.
<h3>text-align</h3>	
Yazıları yatayda hizalamak için kullanılır. Yani yazının sağda, solda, ortada veya sağa ve sola dayalı şekilde olmasını sağlayabiliriz. text-align özelliğine şu değerleri verebiliriz:

right
left
center
justify
end
start
<h3>text-decoration</h3>	
Yazıların altını, üstünü, üzerini çizmek veya çizili olanları kaldırmak için kullanılır. text-decoration özelliğine şu değerleri verebiliriz: <br/>
<img src="https://morinek.com/wp-content/uploads/2017/03/yazilim-cesitleri-e1488883259904.jpg"/>

underline : Yazının altını çizer.
line-through : Yazının üzerini çizer.
overline : Yazının üstünü çizer.
none : Varolan etkileri kaldırır.
<h3>text-decoration-color</h3>	Yazıların altını, üstünü ve üzerini hangi renk ile çizeceğimizi belirtmek için kullanılır.
<h3>text-decoration-style</h3>	Yazıların altını, üstünü ve üzerini hangi stil ile çizeceğimizi belirtmek için kullanılır. Örneğin düz çizgi, kesikli çizgi vb.
<h3>text-indent</h3>	Paragrafın ilk cümlesinin vereceğimiz değer ölçüsünde içeriden yani girintili olarak başlaması için kullanılır. Değeri px olarak verebiliriz.
<h3>text-shadow</h3>	
Yazılara gölge efekti vermek için kullanılır. Vereceğimiz değerler ile gölgenin x ve y eksenindeki konumunu, bulanıklığını ve rengini belirleriz.

İlk verilen değer x ekseni, ikinci verilen değer y ekseni, üçüncü verilen değer bulanıklık, dördüncü verilen değer de rengi için uygulanır.

<h3>text-overflow</h3>	
Bu özellik ile yazılarımızın sığmadığı durumlarda yazının devamının olduğunu belirtmek için “…” (üç nokta) koyabiliriz. text-overflow özelliğine şu değerleri verebiliriz:

clip : Varsayılan olarak gelen değer.
ellipsis : Yazının taştığını belirten “…” (üç nokta) koyar.

<h3>padding</h3>	
Html öğelerine iç boşluk vermek için kullanılır. Padding değeri verirken bunu 3 farklı yol ile yapabiliriz. Bunlar:

length ( padding: 10px; ) : px, pt, cm vb. bir değer verebiliriz.
% ( padding: 20%; ) : İçerisinde bulunduğu etiketin genişliğinin yüzdesi olarak değer verebiliriz.
inherit ( padding: inherit; ) : inherit değeri verirsek, ebeveyn etiketinin padding değeri ne ise onu miras alır ve aynı değer uygulanır.
padding-bottom	Html öğelerine aşağı iç boşluk vermek için kullanılır.
padding-left	Html öğelerine sol iç boşluk vermek için kullanılır.
padding-right	Html öğelerine sağ iç boşluk vermek için kullanılır.
padding-top	Html öğelerine yukarı iç boşluk vermek için kullanılır.
<h3>margin</h3>	
Html öğelerine dış boşluk vermek için kullanılır. Margin değeri verirken bunu 4 farklı yol ile yapabiliriz. Bunlar:

length ( margin: 10px; ) : px, pt, cm vb. bir değer verebiliriz.
% ( margin: 20%; ) : İçerisinde bulunduğu etiketin genişliğinin yüzdesi olarak değer verebiliriz.
inherit ( margin: inherit; ) : inherit değeri verirsek, ebeveyn etiketinin margin değeri ne ise onu miras alır ve aynı değer uygulanır.
auto ( margin: auto; ) : auto değeri verirsek, etiketin kenar boşluklarını tarayıcı otomatik olarak belirler. Bu özelliğin düzgün çalışması için etiketin width özelliğine bir genişlik değeri vermelisiniz.
<h3>margin-bottom</h3>	Html öğelerine aşağı dış boşluk vermek için kullanılır.
<h3>margin-left</h3>	Html öğelerine sol dış boşluk vermek için kullanılır.
<h3>margin-right</h3>	Html öğelerine sağ dış boşluk vermek için kullanılır.
<h3>margin-top</h3>	Html öğelerine yukarı dış boşluk vermek için kullanılır.

<h3>border</h3>	Bir Html öğesinin 4 tarafına birden kenarlık vermek için kullanılır.
border-left	Bir Html öğesine sol kenarlık vermek için kullanılır.
border-right	Bir Html öğesine sağ kenarlık vermek için kullanılır.
border-bottom	Bir Html öğesine alt kenarlık vermek için kullanılır.
border-top	Bir Html öğesine üst kenarlık vermek için kullanılır.
border-color	Bir Html öğesinin 4 tarafına birden kenarlık rengi vermek için kullanılır.
border-left-color	Bir Html öğesine sol kenarlık rengi vermek için kullanılır.
border-top-color	Bir Html öğesine üst kenarlık rengi vermek için kullanılır.
border-right-color	Bir Html öğesine sağ kenarlık rengi vermek için kullanılır.
border-bottom-color	Bir Html öğesine alt kenarlık rengi vermek için kullanılır.
border-style	
Bir Html öğesinin 4 tarafına birden kenarlık stili (tek çizgi, çift çizgi, noktalı vb..) vermek için kullanılır.

<h3>border-style</h3> özelliğine şu değerleri verebiliyoruz:

dotted
dashed
solid
double
groove
ridge
inset
outset
none
hidden
border-right-style	Bir Html öğesine sağ kenarlık stili (tek çizgi, çift çizgi, noktalı vb..) vermek için kullanılır.
border-top-style	Bir Html öğesine üst kenarlık stili (tek çizgi, çift çizgi, noktalı vb..) vermek için kullanılır.
border-left-style	Bir Html öğesine sol kenarlık stili (tek çizgi, çift çizgi, noktalı vb..) vermek için kullanılır.
border-bottom-style	Bir Html öğesine alt kenarlık stili (tek çizgi, çift çizgi, noktalı vb..) vermek için kullanılır.
border-width	Bir Html öğesinin 4 tarafına birden kenarlık genişliği vermek için kullanılır.
border-top-width	Bir Html öğesine üst kenarlık genişliği vermek için kullanılır.
border-right-width	Bir Html öğesine sağ kenarlık genişliği vermek için kullanılır.
border-left-width	Bir Html öğesine sol kenarlık genişliği vermek için kullanılır.
border-bottom-width	Bir Html öğesine alt kenarlık genişliği vermek için kullanılır.
border-radius	Bir Html öğesinin 4 köşesini birden yuvarlamak için kullanılır. Değer verirken px veya % (yüzde) olarak verebiliyoruz.
border-top-left-radius	Bir Html öğesinin üst sol köşesini yuvarlamak için kullanılır.
border-top-right-radius	Bir Html öğesinin üst sağ köşesini yuvarlamak için kullanılır.
border-bottom-left-radius	Bir Html öğesinin alt sol köşesini yuvarlamak için kullanılır.
border-bottom-right-radius	Bir Html öğesinin alt sağ köşesini yuvarlamak için kullanılır.
outline	Bir Html öğesinin 4 tarafına birden (üst, sağ, alt, sol) dış kenarlık vermek için kullanılır.
outline-color	Bir Html öğesinin 4 tarafına birden (üst, sağ, alt, sol) dış kenarlık rengi vermek için kullanılır.
outline-style	
Bir Html öğesinin 4 tarafına birden (üst, sağ, alt, sol) dış kenarlık stili (tek çizgi, çift çizgi, noktalı vb..) vermek için kullanılır.<br/>
<img src="https://i4.hurimg.com/i/hurriyet/75/750x422/55ea68e2f018fbb8f87e0dfc.jpg"/>

outline-style özelliğine şu değerleri verebiliyoruz:

dotted
dashed
solid
double
groove
ridge
inset
outset
outline-width	Bir Html öğesinin 4 tarafına birden (üst, sağ, alt, sol) dış kenarlık genişliği vermek için kullanılır. Kenarlık genişliğini px, pt, cm, em, vb. ile belirleyebiliriz.

            </div>
            
            <div className="col-9 col-lg-12 col-sm-12">
            <h2>MYSQL</h2>
            
            <h3>Giriş yapmak </h3>

 [mysql_dir]/bin/mysql -u root -p 
<h3>Bir database yaratmak (ek olarak default character set ve collate ekleyebilirsiniz)</h3>

 mysql create database [database_name]; 
<h3>Tüm databaseleri listelemek</h3>

 mysql show databases; 
<h3>Bir database seçmek</h3>

 mysql use [database_name] ;
<h3>Seçtiğimiz databasede bulunan tüm tablaları görmek</h3>

 mysql show tables; 
<h3>Tablonun yapısını görmek</h3>

 mysql describe [table_name] ;
<h3>Database silmek</h3>

 mysql drop database [database_name] ;
<h3>Tablo silmek</h3>
<br/>
<img src="https://cdn.webtekno.com/media/cache/content_detail_v2/article/23831/turkiye-deki-yazilim-sektorunu-buyutmek-icin-devletten-onemli-adim-1483725143.jpg"/>
 mysql drop table [table_name] ;
<h3>Tablodaki bütün verileri görmek</h3>

 mysql SELECT * FROM [table_name];
<h3>Tablodaki sütunları ve özelliklerini görmek</h3>

 mysql show columns from [table_name];
<h3>Tablodaki verileri bir kritere göre listelemek</h3>

 mysql SELECT * FROM [table_name] WHERE [field_name] = "kriter";
<h3>Tabloda name sütunundaki veri ‘Ahmet’ ve phone sütunundaki veri ‘123123123’ olan verileri listelemek</h3>

 mysql SELECT * FROM [table_name] WHERE name = "Ahmet" AND phone = ""123123123";
<h3>Tabloda name sütunundaki veri ‘Ahmet’ olmayan ve phone sütunundaki veri ‘789789789’ olan verileri numara sırasında göre listelemek</h3>

 mysql SELECT * FROM [table_name] WHERE name != "Ahmet" AND phone = "789789789" ORDER BY phone;
<h3>Tabloda name sütunundaki veri ‘Ahmet’ ile başlayan ve phone sütununda ‘123123123’ olan verileri listelemek</h3>

 mysql SELECT * FROM [table_name] WHERE name = 'Ahmet%' AND phone = "123123123";
<h3>Tabloda name sütunundaki veri ‘Ahmet’ ile başlayan ve phone sütununda ‘123123123’ olan verileri 1,5 aralığında (5 adet) listelemek</h3>

 mysql SELECT * FROM [table_name] WHERE name = 'Ahmet%' AND phone = '123123123' LIMIT 1,5 ;
<h3>Tabloda rec sütunundaki veri ‘a’ ile başlayan verileri listelemek</h3>

 mysql SELECT * FROM [table_name] WHERE rec RLIKE '^a';
<h3>Bir sütundaki unique verileri listelemek</h3>

 mysql SELECT DISTINCT [column_name] FROM [table_name];
<h3>Tabloda belirlediğimiz sütundaki verileri belirleriğimiz bir artma(ascending – ASC) veya azalma(descenging – DESC) sırasına göre listeler</h3>

 mysql SELECT [column_1], [column_2] FROM [table_name] ORDER BY [column_2] ASC;
<h3>Tablodaki satır sayısını verir</h3>

 


              </div>
              <div className="col-9 col-lg-12 col-sm-12">
              <h2>BONUS</h2>
              <h2>CMD KOMUTLARI</h2>
<h3>calc.exe</h3> Hesap makinesini açar.

<h3>diskmgmt.msc</h3> Disk yönetimini açar.

<h3>devmgmt.msc</h3> Aygıt yöneticisini açar.

<h3>dfrg.msc</h3> Disk birleştiriciyi açar.

<h3>eudcedit.exe</h3> Karakter imal edebilirsiniz.

<h3>appwiz.cpl</h3> Program ekle kaldırı açar.

<h3>access.cpl</h3> Erişebilirlik seçeneklerini açar.

<h3>accwiz.exe</h3> Erişebilirlik sihirbazını açar.

<h3>desk.cpl</h3> Görüntü özelliklerini açar.

<h3>eventvwr.exe</h3> Olay görüntüleyicisini açar.

<h3>freecell.exe</h3> İskambil oyununu açar.

<h3>fsmgmt.msc</h3> Paylaşılan klasörler menüsünü açar.

<h3>hdwwiz.cpl</h3> Donanım ekleme sihirbazını açar.

<h3>iexpress.exe</h3> Setup programını açar.

<h3>inetcpl.cpl</h3> İnternet özelliklerini açar.

<h3>intl.cpl</h3> Bölge ve dil ayarlarını açar.

<h3>joy.cpl</h3> Oyun kontrollerini açar.

<h3>magnify.exe</h3> Büyüteçi açar.

<h3>main.cpl</h3> Fare özelliklerini açar.

<h3>mmsys.cpl</h3> Ses ayarlarını açar.

<h3>mspaint.exe</h3> Paint programını açar.

<h3>narrator.exe</h3> İngilizce ekran okuyucusunu açar.

<h3>ntbackup.exe</h3> Yedekleme sihirbazını açar.

<h3>nusrmgr.cpl</h3> Kullanıcı hesaplarını açar.

<h3>osk.exe</h3> Ekran klavyesi açar.

<h3>telnet.exe</h3> Telnet'i açar.

<h3>spider.exe</h3> Kağıt oyunu açar.

<h3>gpedit.msc</h3> Grup poliçesi açar.

<h3>msconfig.exe</h3> Sistem ayarlarını açar.

<h3>verifier.exe</h3> Sürücü monitörünü açar.

<h3>drwtsn32.exe</h3> Sorun tanıma aracını açar.

<h3>dxdiag.exe</h3> DirectX sürümünüzü öğrenmenizi sağlar.

<h3>mobsync.exe</h3> Senkronizasyon sağlar.

<h3>mplay32.exe</h3> Media Player'ın çok basit bir halini açar.

<h3>odbcad32.exe</h3> Database işleme sağlar.

<h3>packager.exe</h3> Obje paketleyiciyi açar.

<h3>perfmon.exe</h3> Sistem monitörünü açar.

<h3>progman.exe</h3> Masaüstü yöneticisini açar.

<h3>rasphone.exe</h3> Erişim defterini açar.

<h3>shrpubw.exe</h3> Network paylaşımı bilgisini açar.

<h3>sigverif.exe</h3> İmza denetleyicisini açar.

<h3>sysedit.exe</h3> Sistem yöneticisini açar.

<h3>syskey.exe</h3> Şifre databaseni açar.

<h3>sndrec32.exe </h3>Ses kaydedicisini açar.

<h3>timedate.cpl</h3> Tarih ayarlama penceresini açar.

<h3>tourstart.exe</h3> Windows XP turu başlatır.

<h3>winchat.exe</h3> Windows içinde bulunan chat programını açar.

<h3>winmine.exe</h3> Mayın Tarlası oyununu açar.

<h3>write.exe</h3> WordPad'i açar.

<h3>wupdmgr.exe</h3> Windows güncelleştirme penceresini açar.

<h3>explorer.exe</h3> Windows Gezgini?ni açar.

<h3>powercfg.cpl</h3> Güç seçeneklerini açar.

<h3>rasphone.exe</h3> Ağ bağlantılarını açar.

<h3>regedt32.exe</h3> Windows Kayıt Düzenleyicisi'ni açar.

<h3>regedit.exe</h3> Windows Kayıt Düzenleyicisi'ni açar.

<h3>sndvol32.exe</h3> Ses ayarlarını yapmanızı sağlar.

<h3>notepad.exe</h3> Not defterini açar.

<h3>taskmgr.exe</h3> Görev yöneticisini açar


              </div>
              
              </div>
              <Link to="/">
                  <button className="btn">Anasayfa <FiIcons.FiCornerDownLeft/></button></Link>
                  <iframe width="300" height="205" src="https://www.youtube.com/embed/mU6anWqZJcc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  
            </Tik>
        )
    }
}

const Tik=styled.div`
font-size:22px;
background-color:dodgerblue;
margin-top:32px;
padding-right:-92px;
line-height:50px;
border-radius:40px;
color:white;
padding-left:60px;
h2{
    font-size:40px;
font-weight:bold;
color:white;
margin-top:40px;
margin-bottom:40px;
text-decoration:underline;
text-align:center;
    
}
h3{
font-weight:bold;
font-size:30px;
margin-top:25px;
margin-bottom:20px;
text-align:left;
color:purple;
letter-spacing:3px;

}
button{
    font-size:25px;
    border-radius:30px 30px 30px 0;
    margin-left:450px;
    background-color:white;
    margin-bottom:20px;
}
img{
    margin-left:-20px;
    margin-top:40px;
    width:100%;
    border-radius:30px;
    border:10px solid white;
}
iframe{
    position:absolute;
    top:245px;
    right:430px;
    margin-left:5px;
    border-radius:30px;
    border:15px solid blue;
    
}

}
@media screen and (max-width:700px){
    background-color:rgb(124, 60, 197);
    font-size:22px;
    
margin-top:32px;
padding-right:-82px;
line-height:40px;
margin-left:23px;
h2{
    font-size:45px;
font-weight:bold;
color:white;
margin-top:40px;
margin-bottom:40px;
text-decoration:underline;
text-align:center;
    
}
iframe{
    position:absolute;
    bottom:0;
    right:130px;
    margin-left:5px;
    border-radius:30px;
    display:none;

}
h3{
font-weight:bold;
font-size:25px;
margin-top:30px;
margin-bottom:20px;
color:rgb(198, 109, 186);
}
button{
    font-size:25px;
    border-radius:30px 30px 30px 0;
    margin-left:-10px;
    margin-top:20px;
    background:rgb(124, 60, 197);
    border-color:rgb(124, 60, 197);
}
}

`;