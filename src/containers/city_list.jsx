import React, { Component } from 'react';
import City from './city';

const cities = [
  { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
  { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
  { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' },
];

const CityList = (props) => {
  return(
    <div>
      {
        cities.map((city, i) => <City
          key={i+1}
          name= {city.name}
          adress={city.address}
          slug={city.slug}
        />)
      }
    </div>
  )}

// class CityList extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>TO DO</p>
//       </div>
//   )}
// }


export default CityList;

























// import React, { Component } from 'react';
// // import { bindActionCreators } from 'redux';
// // import { connect } from 'react-redux';
// import City from '../city';

// // import { setFlats } from '../actions';

// class FlatList extends Component {
//   // static defaultProps = {
//   //   flats: [{
//   //     "name": "Charm at the Steps of Montmartre",
//   //     "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
//   //     "price": 164,
//   //     "priceCurrency": "EUR"
//   //   },{
//   //     "name": "Charm at the Steps of Sacre-Coeur",
//   //     "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
//   //     "price": 164,
//   //     "priceCurrency": "EUR"
//   //   }]
//   // }

//   componentWillMount() {
//     this.props.setFlats();
//   }

//   render() {
//     return (
//       <div className="flat-list col-sm-7">
//         {this.props.flats.map((flat) => {
//           return <Flat key={flat.name} flat={flat} />;
//         })}
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     flats: state.flats
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { setFlats },
//     dispatch
//   );
// }

// // export default FlatList;
// export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
