module.exports = function backend($httpBackend) {
  var goods = [
    {
      'name': 'Lorem ipsum',
      'image': 'images/1.jpg',
      'description': 'Lorem ipsum dolor sit amet, cum id paulo oblique' +
      'ancillae. Eam vocibus senserit scriptorem ut, cu ignota repudiandae disputationi nec, legere sanctus nec ex.',
      'price': '12.5',
      'category': 'first'
    },
    {
      'name': 'Ullum euismod',
      'image': 'images/2.jpg',
      'description': 'Ullum euismod ornatus at mea, accusam dissentiet ad qui.' +
      'Meis nullam aliquid in mel, no blandit complectitur sea.',
      'price': '13.0',
      'category': 'first'
    },
    {
      'name': 'Vix dictas',
      'image': 'images/3.jpg',
      'description': 'Vix dictas euripidis ad. Quem dolor vim ne, id quando' +
      'salutandi pertinacia eos. Vel ne tacimates theophrastus.',
      'price': '22.3',
      'category': 'first'
    },
    {
      'name': 'Cum possim',
      'image': 'images/4.jpg',
      'description': 'Cum possim utamur forensibus ex, nobis accusam eos ut,' +
      'nulla congue ea sed. No his exerci luptatum, et falli sonet expetendis sea.',
      'price': '2.99',
      'category': 'first'
    },
    {
      'name': 'Sea libris',
      'image': 'images/5.jpg',
      'description': 'Sea libris aliquid aliquando id. Nam illud etiam' +
      'oportere cu, ne cum justo zril. Inani postulant instructior at eum, his te illud democritum.',
      'price': '0.7',
      'category': 'first'
    },
    {
      'name': 'Sale animal',
      'image': 'images/6.jpg',
      'description': 'Sale animal euripidis nam an. Ea qui fugit deleniti,' +
      'sea ei suas graece. Fuisset vituperata id vim.',
      'price': '55',
      'category': 'second'
    },
    {
      'name': 'In pri aliquam',
      'image': 'images/7.jpg',
      'description': 'In pri aliquam persequeris interpretaris, natum legere' +
      'adipiscing pro no, mea legimus intellegam at. Nec aeque ridens omittantur an, at mea eius labores',
      'price': '24.5',
      'category': 'second'
    },
    {
      'name': 'Electram ocurreret',
      'image': 'images/8.jpg',
      'description': 'Electram ocurreret vel an, sumo civibus honestatis in' +
      'pro. Fugit putant expetendis vis te. Vide postulant consetetur sea te, sit an perfecto vituperatoribus.',
      'price': '103.5',
      'category': 'second'
    },
    {
      'name': 'His ea volumus',
      'image': 'images/9.jpg',
      'description': 'His ea volumus consulatu. Pro cu omnium percipit. Et' +
      'pro sint facer appetere, prompta albucius in mel. Has dicit utamur ea.',
      'price': '11.5',
      'category': 'second'
    },
    {
      'name': 'Pri eu denique',
      'image': 'images/10.jpg',
      'description': 'Pri eu denique euripidis concludaturque. Vel an nonumes' +
      'scaevola consectetuer, option assentior has at. Sea mollis utamur no.',
      'price': '88.8',
      'category': 'second'
    },
    {
      'name': 'Lorem ipsum 2',
      'image': 'images/11.jpg',
      'description': 'Lorem ipsum dolor sit amet, cum id paulo oblique' +
      'ancillae. Eam vocibus senserit scriptorem ut, cu ignota repudiandae disputationi nec, legere sanctus nec ex.',
      'price': '22.5',
      'category': 'first'
    }
  ];

  $httpBackend.whenGET('/system/api/goods').respond(goods);

  $httpBackend.whenPOST('/system/api/sale').respond(function(method, url, data) {
    var products = _.pluck(data, 'name');

    return [ 200, 'You successfully buy: ' + products ];
  });

  $httpBackend.whenGET(/.*/).passThrough();
};
