const dyplomyPion = [[],[]];
dyplomyPion[15] = ['img/Dyplomy/ProgramistaJavaWEB_1str_altkom.jpg','Programista Java WEB strona 1 w altkom']
dyplomyPion[14] = ['img/Dyplomy/ProgramistaJavaWEB_2str_altkom.jpg','Programista Java WEB strona 2 w altkom']
dyplomyPion[13] = ['img/Dyplomy/OcenaKompetencjiZawodowychDC_altkom.jpg','tytul']
dyplomyPion[12] = ['img/Dyplomy/RoleWZespoleProgramistycznym_altkom.jpg','tytul']
dyplomyPion[11] = ['img/Dyplomy/WzorceProjektoweNarzędziaPracyGrupowej_altkom.jpg','tytul']
dyplomyPion[10] = ['img/Dyplomy/AplikacjeWeboweWJezykuJava.jpg','tytul']
 dyplomyPion[9] = ['img/Dyplomy/BazyDanychRelacyjneINierelacyjneJęzykSQL_altkom.jpg','tytul']
 dyplomyPion[8] = ['img/Dyplomy/PodstawyProgramowania-BackEnd_altkom.jpg','tytul']
 dyplomyPion[7] = ['img/Dyplomy/EComerceWPraktyce_uouw.jpg','tytul']
 dyplomyPion[6] = ['img/Dyplomy/CertyfikatGIT_eduwebpl.jpg','tytul']
 dyplomyPion[5] = ['img/Dyplomy/AngOdZeraDoBohatIA2_uouw.jpg','tytul']
 dyplomyPion[4] = ['img/Dyplomy/AngielskiPoLatachA1_uouw.jpg','tytul']
 dyplomyPion[3] = ['img/Dyplomy/AngOdZeraDoBohatIIIA1A2_uouw.jpg','tytul']
 dyplomyPion[2] = ['img/Dyplomy/JakCięWidząAutoprezentacja_uouw.jpg','tytul']
 dyplomyPion[1] = ['img/Dyplomy/AngOdZeraDoBohatIIA1_uouw.jpg','tytul']
 dyplomyPion[0] = ['img/Dyplomy/AngielskiPoLatachA1_uouw.jpg','tytul']

const dyplomyPoziom = [];
dyplomyPoziom[23] = ['img/Dyplomy/SzybkiKursHTML5CSS3_udemy.jpg']
dyplomyPoziom[22] = ['img/Dyplomy/AdministratorBazDanych_strefaKursow.jpg']
dyplomyPoziom[21] = ['img/Dyplomy/KursMicrosoftSQLServerOdPodstaw_strefaKursow.jpg']
dyplomyPoziom[20] = ['img/Dyplomy/KursMongoDBnowoczesneBazyDanych_strefaKursow.jpg']
dyplomyPoziom[19] = ['img/Dyplomy/KursBazyDanychMySQLodPodstaw_strefaKursow.jpg']
dyplomyPoziom[18] = ['img/Dyplomy/KursSQLnowoczesneBazyDanych_strefaKursow.jpg']
dyplomyPoziom[17] = ['img/Dyplomy/Java-ambitnyStart-aplikacjaWebowa_udemy.jpg']
dyplomyPoziom[16] = ['img/Dyplomy/JavaPoziom2_strefaKursow.jpg']
dyplomyPoziom[15] = ['img/Dyplomy/JavaDeveloper_strefaKursow.jpg']
dyplomyPoziom[14] = ['img/Dyplomy/KursJAVAHibernateAplikacjeBazodanowe_strefaKursow.jpg']
dyplomyPoziom[13] = ['img/Dyplomy/WprowadzenieDoGitIGitHub_udamy.jpg']
dyplomyPoziom[12] = ['img/Dyplomy/NajpopularniejszeBibliotekiJAVA_strefaKursow.jpg']
dyplomyPoziom[11] = ['img/Dyplomy/SpringFrameworkOdPodstaw_strefaKursow.jpg']
dyplomyPoziom[10] = ['img/Dyplomy/BeginnerJavaJavaFXMavenJenkins_udemy.jpg']
 dyplomyPoziom[9] = ['img/Dyplomy/KursJAVATestyJednostkowe_strefaKursow.jpg']
 dyplomyPoziom[8] = ['img/Dyplomy/JavaOdPodstawDoEksperta_udemy.jpg']
 dyplomyPoziom[7] = ['img/Dyplomy/JavaWzorceProjektowe_strefaKursow.jpg']
 dyplomyPoziom[6] = ['img/Dyplomy/JavaŚredniozaawansowana_strefaKursow.jpg']
 dyplomyPoziom[5] = ['img/Dyplomy/DobrePraktykiPracyWZespole_strefaKursow.jpg']
 dyplomyPoziom[4] = ['img/Dyplomy/JDBCandMySQL_udemy.jpg']
 dyplomyPoziom[3] = ['img/Dyplomy/JDBCinSimpleWay_udemy.jpg']
 dyplomyPoziom[2] = ['img/Dyplomy/KursJavaNarzędziaDevelopera_strefaKursow.jpg']
 dyplomyPoziom[1] = ['img/Dyplomy/FundamentyJezykaJava_strefaKursow.jpg']
 dyplomyPoziom[0] = ['img/Dyplomy/KursProgramowaniaWJava_strefaKursow.jpg']

let carouselMax =  
'      <ol class="carousel-indicators">' +
'        <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>' +
'        <li data-target="#multi-item-example" data-slide-to="1"></li>' +
'      </ol>' +window.innerWidth+
'      <div class="carousel-inner" role="listbox">' +
'        <div class="carousel-item active">' +
'          <section class="diplomas">' +
'            <div class="flex-container">' +
'              <div class="flex-item pion">' +
'                <div class="dyplomPion leftTop"><img src=' + dyplomyPion[15][0] + ' alt="' + dyplomyPion[15][1] + '"></div>' +
'                <div class="dyplomPion leftBottom"><img src=' + dyplomyPion[14][0] + ' alt="' + dyplomyPion[12][1] + '"></div>' +
'              </div>' +
'              <div class="flex-item poziom">' +
'                <div class="dyplomPoziom Top"><img src=' + dyplomyPoziom[23] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom Center"><img src=' + dyplomyPoziom[19] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom Bottom"><img src=' + dyplomyPoziom[15] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item poziom">' +
'                <div class="dyplomPoziom Top"><img src=' + dyplomyPoziom[22] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom Center"><img src=' + dyplomyPoziom[18] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom Bottom"><img src=' + dyplomyPoziom[14] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item pion">' +
'                <div class="dyplomPion Top"><img src=' + dyplomyPion[12][0] + ' alt="dyplom"></div>' +
'                <div class="dyplomPion Bottom"><img src=' + dyplomyPion[11][0] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item poziom">' +
'                <div class="dyplomPoziom Top"><img src=' + dyplomyPoziom[21] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom Center"><img src=' + dyplomyPoziom[17] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom Bottom"><img src=' + dyplomyPoziom[13] + ' alt="dyplom"></div>' +
'              </div>' +
'               <div class="flex-item poziom">' +
'                  <div class="dyplomPoziom Top"><img src=' + dyplomyPoziom[20] + ' alt="dyplom"></div>' +
'                  <div class="dyplomPoziom Center"><img src=' + dyplomyPoziom[16] + ' alt="dyplom"></div>' +
'                  <div class="dyplomPoziom Bottom"><img src=' + dyplomyPoziom[12] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item pion">' +
'                <div class="dyplomPion rightTop"><img src=' + dyplomyPion[13][0] + ' alt="dyplom"></div>' +
'                <div class="dyplomPion rightBottom"><img src=' + dyplomyPion[10][0] + ' alt="dyplom"></div>' +
'              </div>' +
'            </div>' +
'          </section>' +
'        </div>' +
'        <div class="carousel-item">' +
'          <section class="diplomas">' +
'            <div class="flex-container">' +
'              <div class="flex-item pion">' +
'                <div class="dyplomPion leftTop"><img src=' + dyplomyPion[9][0] + ' alt="dyplom"></div>' +
'                <div class="dyplomPion leftBottom"><img src=' + dyplomyPion[6][0] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item poziom">' +
'                <div class="dyplomPoziom Top"><img src=' + dyplomyPoziom[11] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom Center"><img src=' + dyplomyPoziom[7] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom Bottom"><img src=' + dyplomyPoziom[3] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item poziom">' +
'                <div class="dyplomPoziom Top"><img src=' + dyplomyPoziom[10] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom Center"><img src=' + dyplomyPoziom[6] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom Bottom"><img src=' + dyplomyPoziom[2] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item pion">' +
'                <div class="dyplomPion Top"><img src=' + dyplomyPion[8][0] + ' alt="dyplom"></div>' +
'                <div class="dyplomPion Bottom"><img src=' + dyplomyPion[5][0] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item poziom">' +
'                <div class="dyplomPoziom Top"><img src=' + dyplomyPoziom[9] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom Center"><img src=' + dyplomyPoziom[5] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom Bottom"><img src=' + dyplomyPoziom[1] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item poziom">' +
'                  <div class="dyplomPoziom Top"><img src=' + dyplomyPoziom[8] + ' alt="dyplom"></div>' +
'                  <div class="dyplomPoziom Center"><img src=' + dyplomyPoziom[4] + ' alt="dyplom"></div>' +
'                  <div class="dyplomPoziom Bottom"><img src=' + dyplomyPoziom[0] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item pion">' +
'                <div class="dyplomPion rightTop"><img src=' + dyplomyPion[7][0] + ' alt="dyplom"></div>' +
'                <div class="dyplomPion rightBottom"><img src=' + dyplomyPion[4][0] + ' alt="dyplom"></div>' +
'              </div>' +
'            </div>' +
'          </section>' +
'        </div>' +
'      </div>';

let carouselMid =  
'      <ol class="carousel-indicators">' +
'        <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>' +
'        <li data-target="#multi-item-example" data-slide-to="1"></li>' +
'        <li data-target="#multi-item-example" data-slide-to="2"></li>' +
'        <li data-target="#multi-item-example" data-slide-to="3"></li>' +
'      </ol>' +window.innerWidth+
'      <div class="carousel-inner" role="listbox">' +
'        <div class="carousel-item active">' +
'          <section class="diplomas">' +
'            <div class="flex-container">' +
'              <div class="flex-item pion">' +
'                <div class="dyplomPion leftTop"><img src=' + dyplomyPion[15][0] + ' alt="dyplom"></div>' +
'                <div class="dyplomPion leftBottom"><img src=' + dyplomyPion[14][0] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item poziom">' +
'                <div class="dyplomPoziom minLeftTop"><img src=' + dyplomyPoziom[23] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom minLeftCenter"><img src=' + dyplomyPoziom[21] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom minLeftBottom"><img src=' + dyplomyPoziom[19] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item poziom">' +
'                <div class="dyplomPoziom minRightTop"><img src=' + dyplomyPoziom[22] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom minRightCenter"><img src=' + dyplomyPoziom[20] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom minRightBottom"><img src=' + dyplomyPoziom[18] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item pion">' +
'                <div class="dyplomPion rightTop"><img src=' + dyplomyPion[13][0] + ' alt="dyplom"></div>' +
'                <div class="dyplomPion rightBottom"><img src=' + dyplomyPion[12][0] + ' alt="dyplom"></div>' +
'              </div>' +
'            </div>' +
'          </section>' +
'        </div>' +
'        <div class="carousel-item">' +
'          <section class="diplomas">' +
'            <div class="flex-container">' +
'              <div class="flex-item pion">' +
'                <div class="dyplomPion leftTop"><img src=' + dyplomyPion[11][0] + ' alt="dyplom"></div>' +
'                <div class="dyplomPion leftBottom"><img src=' + dyplomyPion[9][0] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item poziom">' +
'                <div class="dyplomPoziom minLeftTop"><img src=' + dyplomyPoziom[17] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom minLeftCenter"><img src=' + dyplomyPoziom[15] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom minLeftBottom"><img src=' + dyplomyPoziom[13] + ' alt="dyplom"></div>' +
'              </div>' +
'               <div class="flex-item poziom">' +
'                  <div class="dyplomPoziom minRightTop"><img src=' + dyplomyPoziom[16] + ' alt="dyplom"></div>' +
'                  <div class="dyplomPoziom minRightCenter"><img src=' + dyplomyPoziom[14] + ' alt="dyplom"></div>' +
'                  <div class="dyplomPoziom minRightBottom"><img src=' + dyplomyPoziom[12] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item pion">' +
'                <div class="dyplomPion rightTop"><img src=' + dyplomyPion[10][0] + ' alt="dyplom"></div>' +
'                <div class="dyplomPion rightBottom"><img src=' + dyplomyPion[8][0] + ' alt="dyplom"></div>' +
'              </div>' +
'            </div>' +
'          </section>' +
'        </div>' +
'        <div class="carousel-item">' +
'          <section class="diplomas">' +
'            <div class="flex-container">' +
'              <div class="flex-item pion">' +
'                <div class="dyplomPion leftTop"><img src=' + dyplomyPion[7][0] + ' alt="dyplom"></div>' +
'                <div class="dyplomPion leftBottom"><img src=' + dyplomyPion[5][0] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item poziom">' +
'                <div class="dyplomPoziom minLeftTop"><img src=' + dyplomyPoziom[11] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom minLeftCenter"><img src=' + dyplomyPoziom[9] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom minLeftBottom"><img src=' + dyplomyPoziom[7] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item poziom">' +
'                <div class="dyplomPoziom minRightTop"><img src=' + dyplomyPoziom[10] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom minRightCenter"><img src=' + dyplomyPoziom[8] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom minRightBottom"><img src=' + dyplomyPoziom[6] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item pion">' +
'                <div class="dyplomPion rightTop"><img src=' + dyplomyPion[6][0] + ' alt="dyplom"></div>' +
'                <div class="dyplomPion rightBottom"><img src=' + dyplomyPion[4][0] + ' alt="dyplom"></div>' +
'              </div>' +
'            </div>' +
'          </section>' +
'        </div>' +
'        <div class="carousel-item">' +
'          <section class="diplomas">' +
'            <div class="flex-container">' +
'              <div class="flex-item pion">' +
'                <div class="dyplomPion leftTop"><img src=' + dyplomyPion[3][0] + ' alt="dyplom"></div>' +
'                <div class="dyplomPion leftBottom"><img src=' + dyplomyPion[1][0] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item poziom">' +
'                <div class="dyplomPoziom minLeftTop"><img src=' + dyplomyPoziom[5] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom minLeftCenter"><img src=' + dyplomyPoziom[3] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom minLeftBottom"><img src=' + dyplomyPoziom[1] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item poziom">' +
'                  <div class="dyplomPoziom minRightTop"><img src=' + dyplomyPoziom[4] + ' alt="dyplom"></div>' +
'                  <div class="dyplomPoziom minRightCenter"><img src=' + dyplomyPoziom[2] + ' alt="dyplom"></div>' +
'                  <div class="dyplomPoziom minRightBottom"><img src=' + dyplomyPoziom[0] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item pion">' +
'                <div class="dyplomPion rightTop"><img src=' + dyplomyPion[2][0] + ' alt="dyplom"></div>' +
'                <div class="dyplomPion rightBottom"><img src=' + dyplomyPion[0][0] + ' alt="dyplom"></div>' +
'              </div>' +
'            </div>' +
'          </section>' +
'        </div>' +
'      </div>';

let carouselMidMin =  
'      <ol class="carousel-indicators">' +
'        <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>' +
'        <li data-target="#multi-item-example" data-slide-to="1"></li>' +
'        <li data-target="#multi-item-example" data-slide-to="2"></li>' +
'        <li data-target="#multi-item-example" data-slide-to="3"></li>' +
'      </ol>' + window.innerWidth+
'      <div class="carousel-inner" role="listbox">' +
'        <div class="carousel-item active">' +
'          <section class="diplomas">' +
'            <div class="flex-container">' +
'              <div class="flex-item pion">' +
'                <div class="dyplomPion leftTop"><img src=' + dyplomyPion[15][0] + ' alt="dyplom"></div>' +
'                <div class="dyplomPion leftBottom"><img src=' + dyplomyPion[14][0] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item poziom">' +
'                <div class="dyplomPoziom minRightTop"><img src=' + dyplomyPoziom[23] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom minRightCenter"><img src=' + dyplomyPoziom[21] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom minRightBottom"><img src=' + dyplomyPoziom[19] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item poziom">' +
'                <div class="dyplomPoziom rightTop"><img src=' + dyplomyPoziom[22] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom rightCenter"><img src=' + dyplomyPoziom[20] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom rightBottom"><img src=' + dyplomyPoziom[18] + ' alt="dyplom"></div>' +
'              </div>' +
'            </div>' +
'          </section>' +
'        </div>' +
'        <div class="carousel-item">' +
'          <section class="diplomas">' +
'            <div class="flex-container">' +
'              <div class="flex-item poziom">' +
'                <div class="dyplomPoziom leftTop"><img src=' + dyplomyPoziom[17] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom leftCenter"><img src=' + dyplomyPoziom[15] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom leftBottom"><img src=' + dyplomyPoziom[13] + ' alt="dyplom"></div>' +
'              </div>' +
'               <div class="flex-item poziom">' +
'                  <div class="dyplomPoziom minLeftTop"><img src=' + dyplomyPoziom[16] + ' alt="dyplom"></div>' +
'                  <div class="dyplomPoziom minLeftCenter"><img src=' + dyplomyPoziom[14] + ' alt="dyplom"></div>' +
'                  <div class="dyplomPoziom minLeftBottom"><img src=' + dyplomyPoziom[12] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item pion">' +
'                <div class="dyplomPion rightTop"><img src=' + dyplomyPion[13][0] + ' alt="dyplom"></div>' +
'                <div class="dyplomPion rightBottom"><img src=' + dyplomyPion[12][0] + ' alt="dyplom"></div>' +
'              </div>' +
'            </div>' +
'          </section>' +
'        </div>' +
'        <div class="carousel-item">' +
'          <section class="diplomas">' +
'            <div class="flex-container">' +
'              <div class="flex-item pion">' +
'                <div class="dyplomPion leftTop"><img src=' + dyplomyPion[11][0] + ' alt="dyplom"></div>' +
'                <div class="dyplomPion leftBottom"><img src=' + dyplomyPion[10][0] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item poziom">' +
'                <div class="dyplomPoziom minRightTop"><img src=' + dyplomyPoziom[11] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom minRightCenter"><img src=' + dyplomyPoziom[9] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom minRightBottom"><img src=' + dyplomyPoziom[7] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item poziom">' +
'                <div class="dyplomPoziom rightTop"><img src=' + dyplomyPoziom[10] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom rightCenter"><img src=' + dyplomyPoziom[8] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom rightBottom"><img src=' + dyplomyPoziom[6] + ' alt="dyplom"></div>' +
'              </div>' +
'            </div>' +
'          </section>' +
'        </div>' +
'        <div class="carousel-item">' +
'          <section class="diplomas">' +
'            <div class="flex-container">' +
'              <div class="flex-item poziom">' +
'                <div class="dyplomPoziom leftTop"><img src=' + dyplomyPoziom[5] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom leftCenter"><img src=' + dyplomyPoziom[3] + ' alt="dyplom"></div>' +
'                <div class="dyplomPoziom leftBottom"><img src=' + dyplomyPoziom[1] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item poziom">' +
'                  <div class="dyplomPoziom minLeftTop"><img src=' + dyplomyPoziom[4] + ' alt="dyplom"></div>' +
'                  <div class="dyplomPoziom minLeftCenter"><img src=' + dyplomyPoziom[2] + ' alt="dyplom"></div>' +
'                  <div class="dyplomPoziom minLeftBottom"><img src=' + dyplomyPoziom[0] + ' alt="dyplom"></div>' +
'              </div>' +
'              <div class="flex-item pion">' +
'                <div class="dyplomPion rightTop"><img src=' + dyplomyPion[9][0] + ' alt="dyplom"></div>' +
'                <div class="dyplomPion rightBottom"><img src=' + dyplomyPion[8][0] + ' alt="dyplom"></div>' +
'              </div>' +
'            </div>' +
'          </section>' +
'        </div>' +
'      </div>';

let elementCarousel = document.querySelector('#multi-item-example');

document.addEventListener('DOMContentLoaded', function() {
    elementCarousel.innerHTML = carouselMax;
    console.log(window.innerWidth);
    if (window.innerWidth < 460) {
        elementCarousel.innerHTML = carouselMid;
        console.log(window.innerWidth);
    };
    if (window.innerWidth < 320) {
        elementCarousel.innerHTML = carouselMidMin;
        console.log(window.innerWidth);
    };
});