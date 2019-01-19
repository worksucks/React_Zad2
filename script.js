var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    picture: 'https://www.pambazuka.org/sites/default/files/styles/flexslider_full/public/field/image/EW_Harry-Potter_Featured.jpg?itok=XphMvnG2'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    picture: 'https://static.antyweb.pl/wp-content/uploads/2018/11/23075023/krol-lew-2019-1420x670.jpg'
  },
  {
    id: 3,
    title: 'Sami Swoi',
    desc: 'Film o dwóch zwaśnionych rodach z kresów',
    picture: 'https://ssl-gfx.filmweb.pl/ph/11/13/1113/64278.2.jpg'
  },
];

var MovieTitle = React.createClass({

  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },

    render: function(){
      return React.createElement('h2', {}, this.props.movie.title)
    }
});

var MovieDescription = React.createClass({

  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },

    render: function() {
      return React.createElement('p', {}, this.props.movie.desc)
    }
});

var MoviePicture = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },

    render: function() {
      return React.createElement('img', {src:this.props.movie.picture})
    }

})


var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },

  render: function() {

    return React.createElement('li', {},
      React.createElement(MovieTitle, { movie: this.props.movie }),
      React.createElement(MovieDescription, { movie: this.props.movie }),
      React.createElement(MoviePicture, { movie: this.props.movie })
    )
  }
});

var abc = movies.map(function(item) {
  return React.createElement(Movie, {key: item.id, movie: item})
})

var element = React.createElement('ul', {}, abc);
ReactDOM.render(element, document.getElementById('app'));
