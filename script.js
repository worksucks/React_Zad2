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


var Movie = React.createClass({
  propTypes: {
    movies: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('li', {key:this.props.movies.id},
          React.createElement('h2', {}, this.props.movies.title),
          React.createElement('p', {}, this.props.movies.desc),
          React.createElement('img', {src:this.props.movies.picture})
      )
    )
  },
});

var element = React.createElement(Movie, {movies: movies});
ReactDOM.render(element, document.getElementById('app'));
