/**
 * Created by ForeverW on 2017/4/26.
 */
var app = angular.module("indexApp", [], function(){

});

app.controller("indexCtrl", [ '$scope', function($scope){
    var banner={'bannerFirst':'选择你的足球战靴','bannerSecond':'CR7特别版','bannerKnowMore':'了解更多','bannerBuy':'购买'};
    /*banner*/
    $scope.bannerFirst=banner.bannerFirst;
    $scope.bannerSecond=banner.bannerSecond;
    $scope.bannerKnowMore=banner.bannerKnowMore;
    $scope.bannerBuy=banner.bannerBuy;

    /*sport your*/
    var sportYourSrc={
        'srcFirst':'/images/teams/Dortmund.jpg','srcSecond':'/images/teams/Real_Madrid.jpg','srcThird':'/images/teams/Atletico_Madrid.jpg',
        'srcFourth':'/images/teams/Barcelona.jpg', 'srcFifth':'/images/teams/Italy.jpg','srcSixth':'/images/teams/Manchester_United.jpg',
        'srcSeventh':'/images/teams/Chelsea.jpg', 'srcEighth':'/images/teams/Portugal.jpg','srcNinth':'/images/teams/Paris_Saint-Germain.jpg',
        'srcTenth':'/images/teams/Arsenal.jpg', 'srcEleventh':'/images/teams/Germany.jpg'
    };
    $scope.srcFirst=sportYourSrc.srcFirst;
    $scope.srcSecond=sportYourSrc.srcSecond;
    $scope.srcThird=sportYourSrc.srcThird;
    $scope.srcFourth=sportYourSrc.srcFourth;
    $scope.srcFifth=sportYourSrc.srcFifth;
    $scope.srcSixth=sportYourSrc.srcSixth;
    $scope.srcFifth=sportYourSrc.srcFifth;
    $scope.srcSeventh=sportYourSrc.srcSeventh;
    $scope.srcEighth=sportYourSrc.srcEighth;
    $scope.srcNinth=sportYourSrc.srcNinth;
    $scope.srcTenth=sportYourSrc.srcTenth;
    $scope.srcEleventh=sportYourSrc.srcEleventh;

    /*ContentGirds*/
    $scope.contentGirdsList=[
        {
            'src':'/images/content_grids/nike.png',
            'label':'Nike Magista Obra II AG Pro赤红/黑 足球鞋',
            'price':'￥2299',
            'href':'/content/shoesNike',
            'operation':'立即购买'
        },
        {
            'src':'/images/content_grids/adidas.png',
            'label':'Adidas ACE 17+ Purecontrol FG Dragon 黑/蓝 足球鞋',
            'price':'￥2199',
            'href':'/content/shoesAdidas',
            'operation':'立即购买'
        },
        {
            'src':'/images/content_grids/mizuno.png',
            'label':'Mizuno Morelia Neo II MD 珊瑚红/黑 足球鞋',
            'price':'￥1499',
            'href':'/content/shoesMizuno',
            'operation':'立即购买'
        }

    ];


    /*ContentTop*/

    $scope.contentTopList=[
        {
            'src':'/images/content_top/finallyball.jpg'
        },
        {
            'src':'/images/content_top/dragon_pack%20.jpg'
        },
        {
            'src':'/images/content_top/krasava.jpg'
        }
    ];

    /*ContentBottom*/

    $scope.ContentBottomslidesList=[
        {
            'src':'/images/content_bottom/Germany_2014.jpg',
            'title':'2014年巴西世界杯',
            'date':'14/7 /2014 - 03:00'
        },
        {
            'src':'/images/content_bottom/messi.jpg',
            'title':'年度最佳体育照片——《一步之遥》',
            'date':'12/2 /2015 -by鲍泰良'
        },
        {
            'src':'/images/content_bottom/nkp.jpg',
            'title':'足球圣地诺坎普，你的朝圣梦想实现了吗',
            'date':'25/2 /2017 -Messi'
        }
    ];


    /*BottomGirds*/
    $scope.bottomGirdsTitle='不容错过的足球资讯';
    $scope.bottomGirdsNewsViewAll='浏览全部';
    $scope.bottomGirdsNewsList=[
        {
            'date':'16/2',
            'content':'欧冠：2016/17赛季欧冠1/8决赛首回合一场焦点战在安联球场展开角逐，拜仁慕尼黑主场5比1大胜阿森纳，罗本先拔头筹...',
            'sortLabel':'The UEFA Champions League',
            'thumbsUpNum':' 315',
            'msgNum':'3',
            'more':'更多'
        },
        {
            'date':'15/11',
            'content':'国足：2018世界杯预选赛亚洲区12强赛展开小组第5轮赛事，中国国家男足在昆明0-0战平卡塔尔，里皮执教首秀未能率领国足取得12强赛首胜...',
            'sortLabel':'Chinese football',
            'thumbsUpNum':' 315',
            'msgNum':'3',
            'more':'更多'
        },
        {
            'date':'23/10',
            'content':'世界杯：2018年俄罗斯世界杯官方吉祥物正式揭晓，通过为期一个月的线上投票，学生设计师叶卡捷琳娜·博恰洛娃设计的西伯利亚平原狼形象最终被选定为俄罗斯世界杯官方吉祥物...',
            'sortLabel':'World Cup',
            'thumbsUpNum':' 315',
            'msgNum':'3',
            'more':'更多'
        }
    ];
    // table source define

}]);
