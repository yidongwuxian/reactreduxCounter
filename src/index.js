import React                            from 'react';
import ReactDOM                         from 'react-dom';
import { Provider, connect }            from 'react-redux';
import Counter                          from './components/Counter';
import { counterStore }                 from './stores/CounterStore';
import { CounterReducer }               from './reducers/CounterReducer';
import { increaseAction, deduceAction } from './actions/CounterAction';
import registerServiceWorker            from './registerServiceWorker';

function mapStateToProps(state){
	return {
		value: state.count
	}
}

function mapDispatchToProps(dispatch){
	return {
		onIncreaseClick: () => dispatch(increaseAction),
		onDeduceClick:   () => dispatch(deduceAction)
	}
}

const App  = connect(mapStateToProps,mapDispatchToProps)(Counter)

const targetEL = document.getElementById('root')

ReactDOM.render(
	<Provider store={counterStore}>
		<App />
	</Provider>,
	targetEL
);
registerServiceWorker();