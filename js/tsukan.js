let next = document.querySelector("#next");
let back = document.querySelector("#back");
let tsukan = document.querySelector("#tsukan");
let springText = document.querySelector("#springText");
let summerText = document.querySelector("#summerText");
let fallText = document.querySelector("#fallText");
let winterText = document.querySelector("#winterText");
let springZoomIn = document.querySelector("#springZoomIn");
let summerZoomIn = document.querySelector("#summerZoomIn");
let fallZoomIn = document.querySelector("#fallZoomIn");
let winterZoomIn = document.querySelector("#winterZoomIn");
let menutoprect=document.querySelector("#menutoprect");
let menu_windowcontent=document.querySelector("#menu_windowcontent");
let btn_menumb=document.querySelector("#btn_menumb");
let isMenuClick=false;

let pageTurn = false;

$(document).ready(function () {
    $('#next').on('click',function () {
        if(!pageTurn){
            $('#tsukan').addClass("bgiTsukan2");
        $('#next').addClass('displayNone');
        $('#back').addClass('displayBlock');
        $('#springText').addClass('alignCenter');
        $('#springText').addClass('ml');
        $('#fallText').addClass('alignRight');
        $('#fallText').addClass('mr');
        $('#fallText').addClass('w200');
        $('#summerText').addClass('alignLeft');
        $('#winterText').addClass('alignLeft');

        $('#springZoomIn').addClass('ZSpr2');
        $('#summerZoomIn').addClass('ZSum2');
        $('#fallZoomIn').addClass('ZF2');
        $('#winterZoomIn').addClass('ZW2');

        $("#springText").html("<u>原型</u>：關東長命寺櫻餅<br><u>特長</u>：三秒鐘把自己完美裹好<br><u>簡介</u>：害羞的長命寺櫻餅兔，<br>總是喜歡躲在粉色的餅皮棉被之中。興趣是睡覺。");
        $("#summerText").html("<u>原型</u>：方形錦玉羹<br><u>特長</u>：養魚<br><u>簡介</u>：方方正正的錦玉和菓子靈。性格有些一板一眼的，但很照顧自己體內的金魚夥伴。");
        $("#fallText").html("<u>原型</u>：生銅鑼燒<br><u>特長</u>：在商場用最低價格殺出一片天<br><u>簡介</u>：華麗又愛漂亮的小狐狸和菓子靈，喜歡用不同的配料及奶油裝飾自己，還會根據季節進行特色搭配。");
        $("#winterText").html("<u>原型</u>：方形麻糬/烤麻糬<br><u>特長</u>：用烤的脆脆的外皮打外皮鼓<br><u>簡介</u>：方形的小麻糬中誕生的和菓子靈，是一隻總是努力想要長高長胖的小鳥。十分珍惜自己的醬油圍巾。");
        pageTurn=true;
        }
        
    });
    $('#back').on('click',function () {
        if(pageTurn=true){
            $('#tsukan').removeClass("bgiTsukan2");
            $('#next').removeClass('displayNone');
            $('#back').removeClass('displayBlock');
            $('#springText').removeClass('alignCenter');
            $('#springText').removeClass('ml');
            $('#fallText').removeClass('alignRight');
            $('#fallText').removeClass('mr');
            $('#fallText').removeClass('w200');
            $('#summerText').removeClass('alignLeft');
            $('#winterText').removeClass('alignLeft');

            $('#springZoomIn').removeClass('ZSpr2');
            $('#summerZoomIn').removeClass('ZSum2');
            $('#fallZoomIn').removeClass('ZF2');
            $('#winterZoomIn').removeClass('ZW2');

            $("#springText").html("<u>原型</u>：關西道明寺櫻餅<br><u>特長</u>：在櫻吹雪下屹立不搖<br><u>簡介</u>：悠哉可愛的和菓子靈，<br>看似害羞但其實喜歡交朋友，<br>特色是屁股上的櫻花胎記。<br>喜歡鹽漬櫻葉的香氣。");
            $("#summerText").html("<u>原型</u>：圓形錦玉羹<br><u>特長</u>：可以吞掉比自己大一倍的金魚<br><u>簡介</u>：圓圓QQ的錦玉和菓子靈，活潑好動，常常像史萊姆一樣跳來跳去，總是讓體內的金魚暈車。");
            $("#fallText").html("<u>原型</u>：銅鑼燒<br><u>特長</u>：舉辦各種試膽大會<br><u>簡介</u>：喜歡擬態的銅鑼燒和菓子靈，喜歡惡作劇。常常會偷偷混在要拿去賣的銅鑼燒裡面。");
            $("#winterText").html("<u>原型</u>：圓形麻糬/鏡餅<br><u>特長</u>：偽裝成雪人<br><u>簡介</u>：圓圓的、白白胖胖的麻糬和菓子靈，喜歡安安靜靜地埋在雪裡，飛起來時會灑落糯米粉。");
            pageTurn = false;
        }
        
    });
        
    
    $('#menutoprect').on('click',function () {
        if(!isMenuClick) {
            $('#menu_windowcontent').slideDown(700);
            gsap.fromTo("#btn_menumb",0.6,{y:0},{y:150,ease:"sine.in"});
            isMenuClick = true;
        } else {
            $('#menu_windowcontent').slideUp(650);
            gsap.fromTo("#btn_menumb",0.5,{y:150},{y:0,ease:"sine.in"});
            isMenuClick = false;        
        }
    });
    
});
