import React from 'react';
import CityList from '../containers/city_list';

const App = (props) => {
  return
    <div className="app">
      <p>React + Redux starter</p>
      <CityList cities={cities} />
    </div>;
};

export default App;
