
var index = 1;

const dyplomyPion = [];
dyplomy[12] = ['image/Dyplomy/RoleWZespoleProgramistycznym_altkom.jpg', 'altkom']
dyplomy[11] = ['image/Dyplomy/Wzorce projektowe, narzędzia pracy grupowej_altkom.jpg', 'altkom']
dyplomy[10] = ['image/Dyplomy/AplikacjeWeboweWJezykuJava.jpg', 'altkom']
dyplomy[9] = ['image/Dyplomy/Bazy danych relacyjne i nierelacyjne. Język SQL_altkom.jpg', 'altkom']
dyplomy[8] = ['image/Dyplomy/Podstawy programowania - back end_altkom.jpg', 'altkom']
dyplomy[6] = ['image/Dyplomy/EComerceWPraktyce_uouw.jpg', 'uouw']
dyplomy[6] = ['image/Dyplomy/CertyfikatGIT_eduwebpl.jpg', 'pionowo']
dyplomy[5] = ['image/Dyplomy/AngOdZeraDoBohatIA2_uouw.jpg', 'uouw']
dyplomy[4] = ['image/Dyplomy/AngielskiPoLatachA1_uouw.jpg', 'uouw']
dyplomy[3] = ['image/Dyplomy/AngOdZeraDoBohatIIIA1A2_uouw.jpg', 'uouw']
dyplomy[2] = ['image/Dyplomy/JakCięWidząAutoprezentacja_uouw.jpg', 'uouw']
dyplomy[1] = ['image/Dyplomy/AngOdZeraDoBohatIIA1_uouw.jpg', 'uouw']
dyplomy[0] = ['image/Dyplomy/ScenaDlaKażdego_uouw.jpg', 'uouw']

const dyplomyPoziom = [];
dyplomy[25] = ['image/Dyplomy/JavaDeveloper_strefaKursow.png', 'strefaKursow']
dyplomy[24] = ['image/Dyplomy/AdministratorBazDanych_strefaKursow.png', 'strefaKursow']
dyplomy[23] = ['image/Dyplomy/SzybkiKursHTML5CSS3_udemy.jpg', 'udemy']
dyplomy[22] = ['image/Dyplomy/KursMicrosoftSQLServerOdPodstaw_strefaKursow.jpg', 'strefaKursow']
dyplomy[21] = ['image/Dyplomy/KursMongoDBnowoczesneBazyDanych_strefaKursow.jpg', 'strefaKursow']
dyplomy[20] = ['image/Dyplomy/KursBazyDanychMySQLodPodstaw_strefaKursow.jpg', 'strefaKursow']
dyplomy[19] = ['image/Dyplomy/KursSQLnowoczesneBazyDanych_strefaKursow.jpg', 'strefaKursow']
dyplomy[18] = ['image/Dyplomy/Java-ambitnyStart-aplikacjaWebowa_udemy.jpg', 'udemy']
dyplomy[17] = ['image/Dyplomy/JavaPoziom2_strefaKursow.jpg', 'strefaKursow']
dyplomy[16] = ['image/Dyplomy/KursJAVAHibernateAplikacjeBazodanowe_strefaKursow.jpg', 'strefaKursow']
dyplomy[15] = ['image/Dyplomy/WprowadzenieDoGitIGitHub_udamy.jpg', 'udemy']
dyplomy[14] = ['image/Dyplomy/WireframingWithBalsamiq_udemy.jpg', 'udemy']
dyplomy[13] = ['image/Dyplomy/NajpopularniejszeBibliotekiJAVA_strefaKursow.jpg', 'strefaKursow']
dyplomy[12] = ['image/Dyplomy/SpringFrameworkOdPodstaw_strefaKursow.jpg', 'strefaKursow']
dyplomy[11] = ['image/Dyplomy/KursJAVATestyJednostkowe_strefaKursow.jpg', 'strefaKursow']
dyplomy[10] = ['image/Dyplomy/BeginnerJavaJavaFXMavenJenkins_udemy.jpg', 'udemy']
dyplomy[9] = ['image/Dyplomy/JavaOdPodstawDoEksperta_udemy.jpg', 'udemy']
dyplomy[8] = ['image/Dyplomy/JavaWzorceProjektowe_strefaKursow.jpg', 'strefaKursow']
dyplomy[7] = ['image/Dyplomy/JavaŚredniozaawansowana_strefaKursow.jpg', 'strefaKursow']
dyplomy[6] = ['image/Dyplomy/DobrePraktykiPracyWZespole_strefaKursow.jpg', 'strefaKursow']
dyplomy[5] = ['image/Dyplomy/KursJavaNarzędziaDevelopera_strefaKursow.jpg', 'strefaKursow']
dyplomy[4] = ['image/Dyplomy/JDBCandMySQL_udemy.jpg', 'udemy']
dyplomy[3] = ['image/Dyplomy/JDBCinSimpleWay _udemy.jpg', 'udemy']
dyplomy[2] = ['image/Dyplomy/FundamentyJezykaJava_strefaKursow.jpg', 'strefaKursow']
dyplomy[1] = ['image/Dyplomy/Certyfikat_codeORG.jpg', 'strefaKursow']
dyplomy[0] = ['image/Dyplomy/KursProgramowaniaWJava_strefaKursow.jpg', 'strefaKursow']

const div = document.querySelector(".wstawiany");

for (let i = dyplomy.length - 1; i >= 0; i--) {
    var img = document.createElement('img');
    img.src = dyplomy[i][0];
    img.classList = dyplomy[i][1];
    img.alt = (dyplomy[i][0]).substr(14, (dyplomy[i][0]).length - 18);
    div.appendChild(img);
    // console.log('obrazek:', dyplomy[i][0], ' class:', dyplomy[i][1], ' i:', i)
}


var images = document.querySelectorAll('img');
// console.log('ilość dyplomów', dyplomy.length)

function showImage(n) {
    images[n].classList.add('visible');
}

function hideImage(n) {
    images[n].classList.remove('visible');
}

images[0].classList.add('visible');
showImage(1);

function update() {
    if (index === images.length - 1)
        index = 1;
    if (index === 1)
        index = images.length - 1;
}

function goNext() {
    hideImage(index);
    if (index === images.length - 1)
        index = 0;
    index++;
    showImage(index);
    // console.log(index)
}

function goPrev() {
    hideImage(index);
    if (index === 1)
        index = images.length;
    index--;
    showImage(index);
    // console.log(index)
}

var next = document.querySelector('#next');
var prev = document.querySelector('#prev');
next.addEventListener('click', goNext);
prev.addEventListener('click', goPrev);
