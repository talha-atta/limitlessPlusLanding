(function($) {

  var GOALS_RATINGS = {
    '1' : {
      'focus' : 0.7,
      'energy' : 0.85,
      'memory' : 0.9,
      'clarity' : 0.7,
      'mood' : 0.8,
      'learning' : 0.8,
      'short_term_memory' : 0.75,
      'long_term_memory' : 0.8,
      'motivation' : 0.9
    },
    '2' : {
      'focus' : 0.85,
      'energy' : 0.7,
      'memory' : 0.7,
      'clarity' : 0.9,
      'mood' : 0.8,
      'learning' : 0.75,
      'short_term_memory' : 0.8,
      'long_term_memory' : 0.8,
      'motivation' : 0.65
    },
    '3' : {
      'focus' : 0.9,
      'energy' : 0.75,
      'memory' : 0.7,
      'clarity' : 0.8,
      'mood' : 0.75,
      'learning' : 0.9,
      'short_term_memory' : 0.95,
      'long_term_memory' : 0.9,
      'motivation' : 0.82
    },
    '4' : {
      'focus' : 0.85,
      'energy' : 0.7,
      'memory' : 0.7,
      'clarity' : 0.9,
      'mood' : 0.8,
      'learning' : 0.75,
      'short_term_memory' : 0.9,
      'long_term_memory' : 0.95,
      'motivation' : 0.88
    }
  };

  var renderName = function(name) {
    var $name = $('#name');
    if (name) {
      $name.text(name + '\'s Formulas');
    }
  };

  var renderGoals = function(goals, bucket) {
    var ratings = GOALS_RATINGS[ bucket ] || GOALS_RATINGS[ '4' ];

    // Goals summary section
    var $container = $('.goals-summary');
    if (goals.length) {
      $container.show();
      var $goals = $container.find('.goals').empty();
      var filtered = goals.filter(function(goal) {
        var key = goal.toLowerCase().replace(/\s/g, '_');
        return ratings[ key ];
      });
      filtered.forEach(function(goal) {
        var key = goal.toLowerCase().replace(/\s/g, '_');
        var rating = ratings[ key ];
        var $goal = $('<div class="goal"></div>').appendTo($goals);
        if (filtered.length < 4) {
          $goal.css('height', '30px');
        }
        $('<div></div>').text(goal).appendTo($goal);
        var $wrapper = $('<div></div>').appendTo($goal);
        $('<div></div>').css('width', rating * 100 + '%').appendTo($wrapper);
      });
    } else {
      $container.hide();
    }
  };

  var loadSession = function(session) {
    if (!Cookies.get('session')) {
      Cookies.set('session', session, { domain: '.placeboproof.com', expires: 30 });
      Cookies.set('session', session, { domain: '.placeboproof.me', expires: 30 });
    }
    /* $.ajax({
      url : 'https://profile.placeboproof.com/sessions/' + session,
      dataType : 'json'
    }).done(function(lead) {
      name = name || lead.firstName;
      goals = goals.length ? goals : lead.goals;

      renderName(name);
      renderGoals(goals, bucket);
    }).fail(function (jqXHR, textStatus) {
      console.error('AJAX FAILED');
    }); */
  };

  var identifySession = function(session) {
    _cio.identify({ 'id' : session });
    mixpanel.identify(session);
  };

  var name, goals, bucket;

  var init = function() {
    //var session = window.placeboproof.getQueryParam('session') || Cookies.get('session');
    var session = Cookies.get('session');
    var lead = {};

    if (session) {
      loadSession(session);
      identifySession(session);
    }

    //mixpanel.track('View Results', { 'variant' : '1' });

    // var name = window.placeboproof.getQueryParam('name') || Cookies.get('name');
    // Cookies.set('name', name);
    //name = window.placeboproof.getQueryParam('name');
    name = Cookies.get('name');

    // var strGoals = window.placeboproof.getQueryParam('goals') || Cookies.get('goals');
    // Cookies.set('goals', strGoals);
    //var strGoals = window.placeboproof.getQueryParam('goals')
    var strGoals = Cookies.get('goals')
    goals = (
      strGoals ?
        strGoals
          .split(',')
          .filter(function(goal) { return goal; })
          .map(function(goal) { return goal.trim(); }) :
        []
    );

    // var strBucket = window.placeboproof.getQueryParam('bucket') || Cookies.get('bucket') || '4';
    // Cookies.set('bucket', strBucket);
    //var strBucket = window.placeboproof.getQueryParam('bucket') || '4';
    var strBucket = '4';
    var matches = strBucket.match(/\d+/);
    bucket = (matches ? matches[ 0 ] : strBucket);

    renderName(name);
    renderGoals(goals, bucket);
  };

  init();
})(jQuery);