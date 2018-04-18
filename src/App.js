import React, { Component } from 'react';
import logo from './logo.svg';

const listJson = [
  {
    key: 0,
    name: 'Steven Rogers',
    date: '17-05-2018'
  }, {
    key: 1,
    name: 'Mark',
    date: '17-05-2018'

  }, {
    key: 2,
    name: 'Tony Stark',
    date: '17-05-2018'
  }, {
    key: 3,
    name: 'Karstark',
    date: '17-05-2018'

  },{
    key: 4,
    name: 'Lannister',
    date: '17-05-2018'
  },{
    key: 5,
    name: 'Martell',
    date: '16-06-2018'
  }
]
class List extends Component {
  render() {
    return (
      <ul>
        {
          this.props.items.map((item) => {
            return <li className="item" key={item.key}><p>{item.name}</p><span>{item.date}</span></li>
          })
        }
      </ul>
    )
  }
};
class App extends Component {
  state = { list: listJson }
  filterList(e) {
    let updatedList = listJson.filter((item) => {
      let search = []
      search = item.name.split("").map((i, key) => {
        let index = e.target.value.toLocaleLowerCase().split("").indexOf(i.toLocaleLowerCase());
        return index !== -1 ? index : null;;
      }).filter((i,k) => i != null);
      search = [ ...new Set(search) ] 
      console.log(search)
      return item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1 || search.length > 2;
    });
    this.setState({ list: updatedList });
  }
  render() {
    return (
      <div>
        <header>
          <h3>Notes</h3>
        </header>
        <div class="container">
          <div class="row">
            <div class="col-12 ">
              <input className="input" onChange={this.filterList.bind(this)} placeholder="Pesquise por um nota" type="text" />
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <span className="note">Notas</span>
              <List items={this.state.list} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
