/**
 * Created by ForeverW on 2017/4/26.
 */
app.controller("footerController", [ '$scope', function($scope) {
    /*FooterLeft*/
    $scope.footerColumnFootballClub='FootBall';
    $scope.runGridOneList=[
        {
            'teamName':'多特蒙德',
            'href':'http://www.bvb.de/'
        },
        {
            'teamName':'马德里竞技',
            'href':'http://www.atleticodemadrid.com/'
        },
        {
            'teamName':'曼联',
            'href':'http://www.manunited.com.cn/'
        },
        {
            'teamName':'广州恒大',
            'href':'http://www.gzevergrandefc.com/'
        },
        {
            'teamName':'切尔西',
            'href':'http://china.chelseafc.com/'
        },
        {
            'teamName':'巴塞罗那',
            'href':'https://www.fcbarcelona.com/'
        }
    ];

    $scope.runGridTwoList=[
        {
            'teamName':'巴黎圣日耳曼',
            'href':'http://psg.fansdao.com/'
        },
        {
            'teamName':'阿森纳',
            'href':'http://www.arsenal.com/home'
        },
        {
            'teamName':'AC米兰',
            'href':'https://www.acmilan.com/it'
        }

    ];


    $scope.footerColumnLatestNews='最新动态';
    $scope.runGridThreeList=[
        {
            'teamName':'©版权所有',
            'href':''
        },
        {
            'teamName':'项目合伙人',
            'href':''
        },
        {
            'teamName':'消息反馈',
            'href':''
        },
        {
            'teamName':'政策与安全',
            'href':''
        },
        {
            'teamName':'隐私',
            'href':''
        },
        {
            'teamName':'关于我们',
            'href':''
        }
    ];

    $scope.runGridFourList=[
        {
            'teamName':'快速购物导航',
            'href':''
        },
        {
            'teamName':'合作招商',
            'href':''
        },
        {
            'teamName':'联系客服',
            'href':''
        },
    ];



    $scope.footerColumnMyAccount='我的账户';
    $scope.footerColumnLogin='登录';
    $scope.footerColumnMyEquipment='我的运动装备';
    $scope.footerColumnMyCollection='我的收藏';

    $scope.footerLetterTitle='足球经典语录';
    $scope.footerLetterLabel='Football Motto';
    $scope.footerLetterContent='我就是世界上最好的球员，我也是世界上第一第二第三的球员.';
    $scope.footerLetterName='Cristiano Ronaldo(C罗)';
    $scope.footerLetterKnowMore='登录了解更多';
    $scope.mySportCopyright='Copyright &copy; 2017.KuangPF All rights reserved.';




}]);