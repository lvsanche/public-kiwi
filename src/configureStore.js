import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import gradesApp from './services/reducers';
import { loadState, saveState } from './localStorage';

const addLoggingToDispatch = (store) => {
	const rawDispatch = store.dispatch;
	return (action) => {
		console.group(action.type);
		console.log('%c prev state', 'color: gray', store.getState());
		console.log('%c action', 'color: blue', action);
		console.log('%c dispatch', 'color: red', rawDispatch);
		const returnValue = rawDispatch(action);
		console.log('%c next state', 'color: green', store.getState());
		console.groupEnd(action.type);
		return returnValue;
	};
};


const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(gradesApp, persistedState);

  if( process.env.NODE_ENV !== 'production') {
  	store.dispatch = addLoggingToDispatch(store);
  }

  store.subscribe(throttle(() => {
    saveState({
		standards: store.getState().standards,
	  students: store.getState().students,
		sessionState: store.getState().sessionState,
		tempNewClasses: store.getState().tempNewClasses,
		assessments: store.getState().assessments
    });
  }, 1000));

  return store;
};

export default configureStore;
