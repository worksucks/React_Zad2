var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    picture: 'https://static.antyweb.pl/wp-content/uploads/2018/11/23075023/krol-lew-2019-1420x670.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    picture: 'https://static.antyweb.pl/wp-content/uploads/2018/11/23075023/krol-lew-2019-1420x670.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    picture: 'https://static.antyweb.pl/wp-content/uploads/2018/11/23075023/krol-lew-2019-1420x670.jpg'
  },
];

var MovieTitle = React.createClass({

  propTypes: {
    movies: React.PropTypes.object.isRequired,
  },

    render: function(){
      return React.createElement('h2', {}, movie.title),
    };
});

var MovieDescription = React.createClass({

  propTypes: {
    movies: React.PropTypes.object.isRequired,
  },

    render: function() {
      return React.createElement('p', {}, movie.desc),
    };
});

var MoviePicture = React.createClass({
  propTypes: {
    movies: React.PropTypes.image.isRequired,
  },

    render: function() {
      return React.createElement('img', {src:movie.picture}),
    };

})


var Movie = React.createClass({
  propTypes: {
    movies: React.PropTypes.object.isRequired,
  },

  render: function() {
    return React.createElement('li', {},
      return React.createElement('MovieTitle',{}, movietitle.MovieTitle),
      return React.createElement('MovieDescription', {}, moviedescription.MovieDescription),
      return React.createElement('MoviePicture',{}, image.MoviePicture)
    )
  },
});

var element = React.createElement(Movie, {key: movies});
ReactDOM.render(element, document.getElementById('app'));
