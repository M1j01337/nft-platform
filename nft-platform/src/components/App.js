import React, { Component } from "react";
import { connect } from 'react-redux';
import Web3 from 'web3'
import { loadWeb3, loadAccount  } from '../store/interactions'

class App extends Component {
	componentWillMount(){	
		this.loadBlockchainData(this.props.dispatch)
	}

	async loadBlockchainData(dispatch){
		const web3 = loadWeb3(dispatch)
		const network = await web3.eth.net.getNetworkType()
		const networkId = await web3.eth.net.getId()
		const accounts = await loadAccount(web3,dispatch)
	}
  

  render() {
    return (
      <div>
        hello world

      </div>
    );
  }
}
function mapStateToProps(state){
	return{

	}
}
export default connect(mapStateToProps)(App);

