/**
 * Created by ForeverW on 2017/4/26.
 */
app.controller("headerController", [ '$scope', function($scope) {
    /*Logo*/
    $scope.logSrc='/images/logo.png';

    /*HeaderGird*/
    $scope.headerGirdMyAccount='我的账户';
    $scope.headerGirdProvinceList=[
        {
            'province':'重庆'
        },
        {
            'province':'上海'
        },
        {
            'province':'北京'
        }
    ];

    $scope.online='商品大厅';
    $scope.headerBottomHomePage="主页";


    $scope.ClubJersey='俱乐部球衣';
    $scope.headerBottomClubJerseyList=[
        {
            'href':'/clubJersey/Premier-League',
            'clubName':'英超'
        },
        {
            'href':'/clubJersey/Bundesliga',
            'clubName':'德甲'
        },
        {
            'href':'/clubJersey/La-Liga',
            'clubName':'西甲'
        },
        {
            'href':'/clubJersey/Serie-A',
            'clubName':'意甲'
        },
        {
            'href':'/clubJersey/Ligue-1',
            'clubName':'法甲'
        },{
            'href':'/clubJersey/CSL',
            'clubName':'中超'
        }

    ];


    $scope.NationalTeamJersey='国家队球衣';
    $scope.headerBottomNationalTeamJerseyList=[
        {
            'href':'/nationalTeamJersey/Germany',
            'nationalTeamName':'德国'
        },
        {
            'href':'/nationalTeamJersey/Croatia',
            'nationalTeamName':'克罗地亚'
        },
        {
            'href':'/nationalTeamJersey/Belgium',
            'nationalTeamName':'比利时'
        },
        {
            'href':'/nationalTeamJersey/Iceland',
            'nationalTeamName':'冰岛'
        },
        {
            'href':'/nationalTeamJersey/China',
            'nationalTeamName':'中国'
        }
    ];

    $scope.FootballShoes='足球战靴';
    $scope.headerBottomFootballShoesList=[
        {
            'href':'/footballShoes/Nike',
            'footballShoesLabel':'Nike(耐克)'
        },
        {
            'href':'/footballShoes/Adidas',
            'footballShoesLabel':'Adidas(阿迪达斯)'
        },
        {
            'href':'/footballShoes/Umbro',
            'footballShoesLabel':'Umbro(茵宝)'
        },
        {
            'href':'/footballShoes/Mizuno',
            'footballShoesLabel':'Mizuno(美津浓)'
        },
        {
            'href':'/footballShoes/Anta',
            'footballShoesLabel':'ANTA(安踏)'
        },
        {
            'href':'/footballShoes/Puma',
            'footballShoesLabel':'puma(彪马)'
        }
    ];

    $scope.FootballBrand='足球品牌';
    $scope.ShoesEvaluation='球鞋评测';
    $scope.TeamLogoEmblem='球队队徽';


    $scope.FanForum='球迷论坛';
    $scope.headerBottomFanForumList=[
        {
            'href':'/fan-forum/Competition-hall',
            'fanForumOption':'比赛大厅'
        },
        {
            'href':'/fan-forum/Football-match',
            'fanForumOption':'约球比赛'
        },
        {
            'href':'/fan-forum/Daily-communication',
            'fanForumOption':'日常交流'
        }
    ];

    $scope.dropLanguageList=[
        {
            'species':'简体中文'
        },
        {
            'species':'英语'
        },
        {
            'species':'西班牙语'
        }
    ];

    $scope.dropModeList=[
        {
            'species':'隐身模式(ON)'
        },
        {
            'species':'隐身模式(OFF)'
        }
    ]
}]);