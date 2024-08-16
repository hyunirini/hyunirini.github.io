window.basic = {
    "title": "정대현 ♥ 서예린 결혼합니다!",
    "groom": {
        "name": "정대현",
        "first_name": "대현",
        "phone": "01033176656",
        "bank": "토스",
        "account": "토스 1000-0048-8664",
        "parents": {
            "father": {
                "name": "정광진",
                "phone": "01031526656",
                "bank": "",
                "account": ""
            },
            "mother": {
                "name": "장경미",
                "phone": "01031526656",
                "bank": "국민",
                "account": "국민 570225-93-121456"
            }
        }
    },
    "bride": {
        "name": "서예린",
        "first_name": "예린",
        "phone": "01071732761",
        "bank": "신한",
        "account": "신한 110-355-850227",
        "parents": {
            "father": {
                "name": "서기제",
                "phone": "01071857835",
                "bank": "농협",
                "account": "농협 352-7379-7111-13"
            },
            "mother": {
                "name": "허수경",
                "phone": "01073882379",
                "bank": "농협",
                "account": "농협 352-1377-1003-93"
            }
        }
    },
    "date": {
        "year": "2024",
        "month": "11",
        "day": "23",
        "hour": "14",
        "minute": "00"
    },
    "honeymoon":{
        "location": "핀란드&노르웨이",
        "days": 14
    },
    "location": {
        "name": "마리드엘웨딩 대전",
        "address": "대전광역시 서구 만년로 69 6층 마리드엘웨딩",
        "x": "36.3677359",
        "y": "127.3806440"
    },
    "link": "https://hyunirini.github.io/",
    "kakao": {
        "description": "2024.11.23. 토요일 오후 14:00\n대전 마리드엘웨딩 마리드홀",
        "button": "모바일 청첩장 보기",
        "img": "https://drive.google.com/u/0/drive-viewer/AKGpihZdmKfjsNR528wQ9X8p2-GLf0X8eEHxzUxRD9qTq71SOtRH60aRb8xEQ_wNq7j4TLRjyhJpL4p2FCvI_rHzjtBZr890pi7z2Ts=s1600-rw-v1"
    },
    "info": {
        "description":"2024.11.23.(토) 오후 14:00 마리드엘웨딩 마리드홀",
        "greeting": "서로의 에너지가 되어 줄 평생의 반쪽을 찾았습니다.<br>같은 꿈을 꾸며, 함께 걸어갈 길을 열어가고자 합니다.<br><br>소중한 여러분을 모시고<br>저희 두 사람의 새로운 시작을 함께 하고자 하오니,<br>많이 와주시어 축복해주시면 감사하겠습니다.<br>",
        "wedding_date": "2024.11.23 토요일 오후 14:00",
        "wedding_location": "대전 마리드엘웨딩 마리드홀",
        "wedding_address": "대전광역시 서구 만년로 69 ( 만년동 337 )<br>마리드엘웨딩 6층"
    }
}
let scrollTop;
const holidays = [];
const numOfImages = 11;
const basicNumbers = 9;
const excludeNumbers = [];
const excludeNumbers2 = [];

$(document).ready(function (){

    setText();

    new WOW().init();

    $('.popup').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        callbacks: {
            beforeOpen: function () {
                $('body').css("overflow", "hidden");
                $('body').css("touch-action", "none");
            },
            open: function () {
                $('body').css("overflow", "hidden");
                $('body').css("touch-action", "none");
            },
            close: function() {
                $('body').css("overflow", "");
                $('body').css("touch-action", "pan-y");
            },
        }
    });

    setGallery('gallery-html');

    // let msnry = $('#grid-container').masonry({
    //     itemSelector: '.grid-item',
    //     percentPosition: true,
    //     gutter : 20,
    //     transitionDuration: 0
    // });

    // imagesLoaded( '#grid-container' ).on( 'progress', function() {
    //     $('#grid-container').masonry('layout');
    // });

    $('.grid-item').magnificPopup({
        fixedContentPos: true,
        delegate: 'img',
        type:'image',
        gallery: {
            enabled: true,
            tCounter: '%curr% / %total%'
        },
        callbacks: {
            beforeOpen: function () {
                $('body').css("overflow", "hidden");
                $('body').css("touch-action", "none");
            },
            open: function () {
                $('body').css("overflow", "hidden");
                $('body').css("touch-action", "none");
                $('figure>img').parent().bind('contextmenu', function(e){ return false; });
            },
            imageLoadComplete: function () {
                $('body').css("overflow", "hidden");
                $('body').css("touch-action", "none");
            },
            close: function() {
                $('body').css("overflow", "");
                $('body').css("touch-action", "pan-y");
            },
            elementParse: function(qw) {
                qw.src = qw.el.attr('src');
            }
        }
    });

    $('#map-popup').magnificPopup({
        items: [
            {
                src: './img/map/map1.jpg'
            }
        ],
        gallery: {
            enabled: true,
            tCounter: '%curr% / %total%'
        },
        type: 'image',
        callbacks: {
            beforeOpen: function () {
                $('body').css("overflow", "hidden");
                $('body').css("touch-action", "none");
            },
            open: function () {
                $('body').css("overflow", "hidden");
                $('body').css("touch-action", "none");
            },
            close: function() {
                $('body').css("overflow", "");
                $('body').css("touch-action", "pan-y");
            },
        }
    });

    drawCalendar(window.basic.date);
    loadCountdown(window.basic.date,window.basic.honeymoon);

    getKakaoMap(window.basic.location);

});

function setText(){

    $('#txt-title').html(window.basic.title);
    $('.txt-groom').html(window.basic.groom.name);
    $('.txt-groom-first').html(window.basic.groom.first_name);
    $('.txt-groom-father').html(window.basic.groom.parents.father.name);
    $('.txt-groom-mother').html(window.basic.groom.parents.mother.name);
    $('.txt-bride').html(window.basic.bride.name);
    $('.txt-bride-first').html(window.basic.bride.first_name);
    $('.txt-bride-father').html(window.basic.bride.parents.father.name);
    $('.txt-bride-mother').html(window.basic.bride.parents.mother.name);
    $('#txt-greeting').html(window.basic.info.greeting);
    $('.txt-date').html(window.basic.info.wedding_date);
    $('.txt-location').html(window.basic.info.wedding_location);
    $('#txt-address').html(window.basic.info.wedding_address);

    $('.txt-groom-account').html(window.basic.groom.account);
    $('.txt-groom-father-account').html(window.basic.groom.parents.father.account);
    $('.txt-groom-mother-account').html(window.basic.groom.parents.mother.account);
    $('.txt-bride-account').html(window.basic.bride.account);
    $('.txt-bride-father-account').html(window.basic.bride.parents.father.account);
    $('.txt-bride-mother-account').html(window.basic.bride.parents.mother.account);

    let groom_tel = document.getElementById("groom-tel");
    groom_tel.onclick = function() {
        window.location.href = "tel:"+window.basic.groom.phone;
    };
    let groom_sms = document.getElementById("groom-sms");
    groom_sms.onclick = function() {
        window.location.href = "sms:"+window.basic.groom.phone;
    };

    let groom_father_tel = document.getElementById("groom-father-tel");
    groom_father_tel.onclick = function() {
        window.location.href = "tel:"+window.basic.groom.parents.father.phone;
    };

    let groom_father_sms = document.getElementById("groom-father-sms");
    groom_father_sms.onclick = function() {
        window.location.href = "sms:"+window.basic.groom.parents.father.phone;
    };

    let groom_mother_tel = document.getElementById("groom-mother-tel");
    groom_mother_tel.onclick = function() {
        window.location.href = "tel:"+window.basic.groom.parents.mother.phone;
    };

    let groom_mother_sms = document.getElementById("groom-mother-sms");
    groom_mother_sms.onclick = function() {
        window.location.href = "sms:"+window.basic.groom.parents.mother.phone;
    };

    let bride_tel = document.getElementById("bride-tel");
    bride_tel.onclick = function() {
        window.location.href = "tel:"+window.basic.bride.phone;
    };
    let bride_sms = document.getElementById("bride-sms");
    bride_sms.onclick = function() {
        window.location.href = "sms:"+window.basic.bride.phone;
    };

    let bride_father_tel = document.getElementById("bride-father-tel");
    bride_father_tel.onclick = function() {
        window.location.href = "tel:"+window.basic.bride.parents.father.phone;
    };

    let bride_father_sms = document.getElementById("bride-father-sms");
    bride_father_sms.onclick = function() {
        window.location.href = "sms:"+window.basic.bride.parents.father.phone;
    };

    let bride_mother_tel = document.getElementById("bride-mother-tel");
    bride_mother_tel.onclick = function() {
        window.location.href = "tel:"+window.basic.bride.parents.mother.phone;
    };

    let bride_mother_sms = document.getElementById("bride-mother-sms");
    bride_mother_sms.onclick = function() {
        window.location.href = "sms:"+window.basic.bride.parents.mother.phone;
    };
}

function drawCalendar(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const year = parseInt(date.year);
    const month = parseInt(date.month);
    const day = parseInt(date.day);

    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDayOfMonth = new Date(year, month - 1, 1).getDay();

    const calendarContainer = document.getElementById("calendar");

    let calendarHTML = `
    <div class="mb-2">${monthNames[month - 1]} ${year}</div>
    <div class="week">
        ${["일", "월", "화", "수", "목", "금", "토"].map((day, index) => `<div class="${'day'}">${day}</div>`).join('')}
    </div>`;

    let dayCount = 1;
    for (let i = 0; i < 6; i++) {
        let line = "";
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDayOfMonth) {
                line += "<div class='empty'></div>";
            } else if (dayCount > daysInMonth) {
                break;
            } else {
                let dateClass = "";
                if (holidays.includes(dayCount)) {
                    dateClass = "holiday";
                }
                if (dayCount === day) {
                    dateClass = "highlight";
                }
                line += `<div class='day ${dateClass}'>${dayCount}</div>`;
                dayCount++;
            }
        }
        calendarHTML += "<div class='week'>" + line + "</div>";
        if (dayCount > daysInMonth) {
            break;
        }
    }

    calendarContainer.innerHTML = calendarHTML;
}

function loadCountdown(date,honeymoon){

    const wTime = new Date(date.year,parseInt(date.month)-1,date.day,date.hour, date.minute);
    const wDay = new Date(date.year,parseInt(date.month)-1,parseInt(date.day)+1,date.hour, date.minute);

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    const wDate = wDay;
    wDate.setDate(wDay.getDate() - 1);
    wDate.setHours(0, 0, 0, 0);

    if(currentDate <= wDate) {
        $('#date-countdown').countdown({until: wTime, timezone: +9});//format: 'dHMS', compact: true,
        $('#dday-countdown').countdown({until: wDate, format: 'd', compact: true, layout: '{dn}', timezone: +9});
        $('#countdown-text1').html('결혼식이');
        let wTxt = '남았습니다.';
        if (currentDate.getTime() === wDate.getTime()) {
            wTxt +='<br><br>오셔서 지켜봐 주시고 축하해 주세요!';
        }
        $('#countdown-text2').html(wTxt);

    }else{
        const honeymoonDate = wDate;
        honeymoonDate.setDate(wDate.getDate() + (honeymoon.days));
        honeymoonDate.setHours(0, 0, 0, 0);

        $('#date-countdown').countdown({ since: wTime, timezone: +9 });//format: 'dHMS', compact: true,
        $('#dday-countdown').countdown({ since: wTime, format: 'd', compact: true, layout: '{dn}', timezone: +9 });
        $('#countdown-text1').html('결혼한 지');
        let wTxt = '되었습니다.';

        if(currentDate <= honeymoonDate){
            wTxt +='<br><br>'+honeymoon.location+'에서 행복한 시간을 보내고 있습니다!';
        }
        $('#countdown-text2').html(wTxt);
    }
}

function getKakaoMap(location){
    const container = document.getElementById('map');

    const xy = new kakao.maps.LatLng(location.x, location.y);
    let options = {
        center: xy,
        //draggable: false,
        level: 5
    };

    let map = new kakao.maps.Map(container, options);

    let marker = new kakao.maps.Marker({
        position: xy,
        map: map
    });

    marker.setPosition(xy);
}
function morePhoto(){
    $('#grid-container .hidden-photo').removeClass('visually-hidden');

    $('#more-photo').addClass('visually-hidden');
    $('#hide-photo').removeClass('visually-hidden');


    // 스크롤 위치 저장
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
}
function hidePhoto(){
    $('#grid-container .hidden-photo').addClass('visually-hidden');
    // imagesLoaded( '#grid-container' ).on( 'progress', function() {
    //     $('#grid-container').masonry('layout');
    // });
    $('#more-photo').removeClass('visually-hidden');
    $('#hide-photo').addClass('visually-hidden');

    window.scrollTo(0, scrollTop);
}
function setGallery(id){

    let parentElement = document.getElementById(id);

    let randomImageNumbers = [];
    randomImageNumbers = Array.from({length: numOfImages}, (_, index) => index + 1);
    //랜덤 이미지 번호 배열 생성
    // while (randomImageNumbers.length < numOfImages) {
    //     let randomNum = Math.floor(Math.random() * numOfImages) + 1;
    //     if (!randomImageNumbers.includes(randomNum)) {
    //         randomImageNumbers.push(randomNum);
    //     }
    // }

    let cnt = 0;
    randomImageNumbers.forEach(function(imageNumber) {

        if(excludeNumbers.includes(imageNumber)||excludeNumbers2.includes(imageNumber)){
            return;
        }
        let divElement = document.createElement('div');
        cnt++;
        if(cnt <= basicNumbers){
            divElement.className = 'grid-item';
        }else{
            divElement.className = 'grid-item hidden-photo visually-hidden';
        }

        let imgElement = document.createElement('img');
        imgElement.src = './img/gallery/' + imageNumber + '.jpg';

        divElement.appendChild(imgElement);

        parentElement.appendChild(divElement);
    });
}
function kakaoShare() {
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: window.basic.title,
            description: window.basic.kakao.description,
            imageUrl: window.basic.kakao.img,
            imageHeight: 550,
            link: {
                mobileWebUrl: window.basic.link,
                webUrl: window.basic.link,
            },
        },
        buttons: [
            {
                title: window.basic.kakao.button,
                link: {
                    mobileWebUrl: window.basic.link,
                    webUrl: window.basic.link,
                },
            },
        ],
    });
}
function startNavigation() {
    //https://developers.kakao.com/docs/latest/ko/local/dev-guide#address-coord
    Kakao.Navi.start({
        name: window.basic.location.name,
        x: window.basic.location.x,
        y: window.basic.location.x,
        coordType: 'wgs84',
    });
}
function copyLink(){

    let url = window.document.location.href;
    copyToClipboard(url);
    alert('대현♥예린 청첩장 주소가 복사되었습니다.');
}

function copyAccount(val){

    let account, name, bank;

    switch (val){
        case 'groom':
            account=window.basic.groom.account;
            name=window.basic.groom.name;
            bank=window.basic.groom.bank;
            break;
        case 'groom-father':
            account=window.basic.groom.parents.father.account;
            name=window.basic.groom.parents.father.name;
            bank=window.basic.groom.parents.father.bank;
            break;
        case 'groom-mother':
            account=window.basic.groom.parents.mother.account;
            name=window.basic.groom.parents.mother.name;
            bank=window.basic.groom.parents.mother.bank;
            break;
        case 'bride':
            account=window.basic.bride.account;
            name=window.basic.bride.name;
            bank=window.basic.bride.bank;
            break;
        case 'bride-father':
            account=window.basic.bride.parents.father.account;
            name=window.basic.bride.parents.father.name;
            bank=window.basic.bride.parents.father.bank;
            break;
        case 'bride-mother':
            account=window.basic.bride.parents.mother.account;
            name=window.basic.bride.parents.mother.name;
            bank=window.basic.bride.parents.mother.bank;
            break;
        default : break;
    }
    copyToClipboard(account);
    let txt = name+'님의 '+bank;
    if(bank=='토스'){
        txt+='뱅크 계좌번호가 복사되었습니다.';
    }else{
        txt+='은행 계좌번호가 복사되었습니다.';
    }
    alert(txt);
}

function copyToClipboard(val) {
    let t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
}
