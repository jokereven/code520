import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

export const DisbannerList = (data) => ({
	type: actionTypes.DIS_BANNEER_LIST,
	data: fromJS(data),
});

export const Disbanner = () => {
	return (dispatch) => {
		axios
			.get(`http://localhost:3000/banner&t=${new Date().getTime()}`)
			.then((res) => {
				const data = res;
				dispatch(DisbannerList(data.data));
			})
			.catch(() => {
				console.error('DisbannerList failed');
			});
	};
};