
export const CommnetTheItem = async (orderId, itemId, comments) => {
	let _res = {};
	let url = `comments`;
	const obj = {
		orderid: orderId,
		itemid: itemId,
		comments: comments,
	};
	try {
		_res = await fetchRequest(getURL(url), {
			method: "POST",
			body: JSON.stringify(obj),
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(`Comment`),
			});
		}
	} catch (error) {
		message.error({
			message: translate(`Error`),
		});
		console.warn(error);
	} finally {
		getAllSalesItems(orderId);
	}
};



export const BulAcceptItemAcceptedStatus = async (orderId, itemid) => {
	let _res = {};
	let url = `salesitem/bulk/${orderId}/accept`;
	try {
		_res = await fetchRequest(getURL(url), {
			method: "PUT",
			body: JSON.stringify(itemid),
		});
		if (_res && _res.status === 200) {
			message.success({
				message: translate(`ItemStatusChanged`),
			});
			getAllSalesItems(orderId);
			store.dispatch({
				type: "removeAll",
			});
		}
	} catch (error) {
		message.success({
			message: translate(`Error`),
		});
		store.dispatch({
			type: "removeAll",
		});
		console.warn(error);
	}
};




export const getPendingOrdersCount = async () => {
	let _res = {};
	store.dispatch({ type: orderTypes.GET_ALL_PENDING_ORDER_COUNT_LOADING });
	let url = `salesorder?orderStatus=pending`;
	try {
		_res = await fetchRequest(getURL(url));
	} catch (error) {
		console.warn(error);
	} finally {
		if (_res.hasError) {
			store.dispatch({ type: orderTypes.GET_ALL_PENDING_ORDER_COUNT_FAILURE });
		} else {
			store.dispatch({
				type: orderTypes.GET_ALL_PENDING_ORDER_COUNT_SUCCESS,
				payload: _res.data.count,
			});
		}
	}
};

