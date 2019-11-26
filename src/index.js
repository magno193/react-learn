import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  {category: 'Eletronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  {category: 'Eletronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  {category: 'Eletronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

/*@function 
* Contém a totalidade do exemplo
*/
class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    });
  }

  render(){
    return(
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

/*@function 
* Recebe todo o input do usuário
*/
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e){
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e){
    this.props.onInStockChange(e.target.checked);
  }

  render(){
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    return(
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
        />
        <p>
          <input
            type="checkbox"
            checked={inStockOnly}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

/*@function 
* Exibe e filtra a coleção de dados baseado
* no input do usuário
*/
class ProductTable extends React.Component {
  render(){
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }

      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });

    return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbo>{rows}</tbo>
      </table>
    );
  }
}

/*@class 
* Exibe um cabeçalho para cada categoria
*/
class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;

    return(
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

/*@class 
* Exibe uma linha para cada produto
*/
class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ? 
      product.name :
      <span style={{color: "red"}}>
        {product.name}
      </span>

  return(
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
  }
}

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS}/>,
  document.getElementById('root')
);