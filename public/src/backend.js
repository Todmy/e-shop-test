var _ = require('underscore');

module.exports = function backend($httpBackend) {
  var categories = [ 'first', 'second', 'third' ];
  var goods = [
    {
      'id': 1,
      'name': 'Lorem ipsum',
      'image': 'images/1.jpg',
      'description': 'Lorem ipsum dolor sit amet, cum id paulo oblique' +
      'ancillae. Eam vocibus senserit scriptorem ut, cu ignota repudiandae disputationi nec, legere sanctus nec ex.',
      'price': 12.52,
      'category': 'first'
    },
    {
      'id': 2,
      'name': 'Ullum euismod',
      'image': 'images/2.jpg',
      'description': 'Ullum euismod ornatus at mea, accusam dissentiet ad qui.' +
      'Meis nullam aliquid in mel, no blandit complectitur sea.',
      'price': 13.03,
      'category': 'first'
    },
    {
      'id': 3,
      'name': 'Vix dictas',
      'image': 'images/3.jpg',
      'description': 'Vix dictas euripidis ad. Quem dolor vim ne, id quando' +
      'salutandi pertinacia eos. Vel ne tacimates theophrastus.',
      'price': 22.33,
      'category': 'first'
    },
    {
      'id': 4,
      'name': 'Cum possim',
      'image': 'images/4.jpg',
      'description': 'Cum possim utamur forensibus ex, nobis accusam eos ut,' +
      'nulla congue ea sed. No his exerci luptatum, et falli sonet expetendis sea.',
      'price': 2.99,
      'category': 'first'
    },
    {
      'id': 5,
      'name': 'Sea libris',
      'image': 'images/5.jpg',
      'description': 'Sea libris aliquid aliquando id. Nam illud etiam' +
      'oportere cu, ne cum justo zril. Inani postulant instructior at eum, his te illud democritum.',
      'price': 0.71,
      'category': 'first'
    },
    {
      'id': 6,
      'name': 'Sale animal',
      'image': 'images/6.jpg',
      'description': 'Sale animal euripidis nam an. Ea qui fugit deleniti,' +
      'sea ei suas graece. Fuisset vituperata id vim.',
      'price': 55.99,
      'category': 'second'
    },
    {
      'id': 7,
      'name': 'In pri aliquam',
      'image': 'images/7.jpg',
      'description': 'In pri aliquam persequeris interpretaris, natum legere' +
      'adipiscing pro no, mea legimus intellegam at. Nec aeque ridens omittantur an, at mea eius labores',
      'price': 24.55,
      'category': 'second'
    },
    {
      'id': 8,
      'name': 'Electram ocurreret',
      'image': 'images/8.jpg',
      'description': 'Electram ocurreret vel an, sumo civibus honestatis in' +
      'pro. Fugit putant expetendis vis te. Vide postulant consetetur sea te, sit an perfecto vituperatoribus.',
      'price': 103.56,
      'category': 'second'
    },
    {
      'id': 9,
      'name': 'His ea volumus',
      'image': 'images/9.jpg',
      'description': 'His ea volumus consulatu. Pro cu omnium percipit. Et' +
      'pro sint facer appetere, prompta albucius in mel. Has dicit utamur ea.',
      'price': 11.55,
      'category': 'second'
    },
    {
      'id': 10,
      'name': 'Pri eu denique',
      'image': 'images/10.jpg',
      'description': 'Pri eu denique euripidis concludaturque. Vel an nonumes' +
      'scaevola consectetuer, option assentior has at. Sea mollis utamur no.',
      'price': 88.88,
      'category': 'second'
    },
    {
      'id': 11,
      'name': 'Lorem ipsum 2',
      'image': 'images/11.jpg',
      'description': 'Lorem ipsum dolor sit amet, cum id paulo oblique' +
      'ancillae. Eam vocibus senserit scriptorem ut, cu ignota repudiandae disputationi nec, legere sanctus nec ex.',
      'price': 22.55,
      'category': 'first'
    }
  ];

  $httpBackend.whenGET('/system/api/categories').respond({ resource: categories });

  $httpBackend.whenGET('/system/api/goods').respond({ resource: goods });

  $httpBackend.whenGET(/\/system\/api\/goods\/[\w]*/).respond(function(method, url) {
    var categoryName = url.split('/').reverse()[0];
    var filteredGoods = categoryName === 'all' ? goods : _.filter(goods, { category: categoryName });

    return [ 200, { resource: filteredGoods }, {} ];
  });

  $httpBackend.whenPOST('/system/api/sale').respond(function(method, url, data) {
    var products = _.pluck(JSON.parse(data), 'name');

    return [ 200, { message: 'You successfully bought goods', boughtGoods: products }, {} ];
  });

  $httpBackend.whenGET(/.*/).passThrough();
};
