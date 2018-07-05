var movies = [
    {
        id: 1,
        title: 'Harry Potter i Kamień filozoficzny',
        desc: 'Film o czarodzieju',
        duration: '2 godz. 32 min.',
        year: '2001',
        img: 'https://ssl-gfx.filmweb.pl/po/05/71/30571/7529392.2.jpg'
  },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        duration: '1 godz. 29 min.',
        year: '1994',
        img: 'http://1.fwcdn.pl/po/68/78/6878/7046736.2.jpg'
  },
    {
        id: 3,
        title: 'Incepcja',
        year: '2010',
        duration: '2 godz. 28 min.',
        desc: 'Film o wszczepianiu myśli',
        img: 'http://1.fwcdn.pl/po/08/91/500891/7351782.2.jpg'
    },
    {
        id: 4,
        title: 'Księga ocalenia',
        duration: '1 godz. 58 min.',
        year: '2010',
        desc: 'Film o podróży w postapokaliptycznym świecie',
        img: 'https://ssl-gfx.filmweb.pl/po/03/56/450356/7308129.2.jpg'
    },
    {
        id: 5,
        title: 'Jestem legendą',
        duration: '1 godz. 41 min.',
        year: '2007',
        desc: 'Film o podróży w postapokaliptycznym świecie',
        img: 'https://ssl-gfx.filmweb.pl/po/78/01/217801/7182225.2.jpg'
    }
];

var MoviesList = React.createClass({
    propTypes: {
        movies: React.PropTypes.object.isRequired
    },
    render: function () {
        var moviesElements = movies.map((movie, id) => (
            React.createElement(Movie, {key: id, title: movie.title, duration: movie.duration, year: movie.year, desc: movie.desc, img: movie.img}
            )
    )
);
        return (
            React.createElement('div', {},
                React.createElement('h1', {}, 'Lista filmów'),
                React.createElement('ul', {}, moviesElements)
            )
        );
    }
});

var Movie = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        duration: React.PropTypes.string.isRequired,
        year: React.PropTypes.string.isRequired,
        desc: React.PropTypes.string.isRequired,
        img: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, {
                    title: this.props.title
                }),
                React.createElement(MovieDescription, {
                    duration: this.props.duration,
                    year: this.props.year,
                    desc: this.props.desc,
                    img: this.props.img
                })
            )
        );
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            React.createElement('h2', {}, this.props.title)
        );
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        duration: React.PropTypes.string.isRequired,
        year: React.PropTypes.string.isRequired,
        desc: React.PropTypes.string.isRequired,
        img: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            React.createElement('div', {},
                React.createElement('p', {}, 'Czas trwania: ', this.props.duration),
                React.createElement('p', {}, 'Data premiery: ', this.props.year),
                React.createElement('p', {}, 'Opis: ', this.props.desc),
                React.createElement('img', {
                    src: this.props.img
                })
            )
        );
    }
});

var element = React.createElement(MoviesList, {movies: movies});

ReactDOM.render(element, document.getElementById('app'));