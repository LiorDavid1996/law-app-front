import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  ordersLoading:false,
  orders:[]
}


export const getOrders = createAsyncThunk('orders/getAllOrders', async () => {
  return fetch('https://law-server.onrender.com/api/orders')
    .then((res) => res.json())
})
export const postOrders = createAsyncThunk('orders/create', async (body) => {

  return await fetch('https://law-server.onrender.com/api/orders/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',

    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .catch(error => console.log(error))
})



export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  extraReducers: {
    [getOrders.pending]: (state, action) => {
      state.ordersLoading = true
    },
    [getOrders.fulfilled]: (state, action) => {
      state.ordersLoading = false
      state.orders = action.payload
    },
    [getOrders.rejected]: (state, action) => {
      state.ordersLoading = false
    },
    [postOrders.pending]: (state, action) => {
      state.ordersLoading = true
    },
    [postOrders.fulfilled]: (state, action) => {
      state.ordersLoading = false
      state.orders = action.payload
    },
    [postOrders.rejected]: (state, action) => {
      state.ordersLoading = false
    },
  }
})

export default ordersSlice.reducer;



//  TODO add orders component and use data!

// const { orders, ordersLoading } = useSelector((state) => state.orders);
// const dispatch = useDispatch();
// console.log(orders);
// useEffect(() => {
//   dispatch(getOrders());
// }, []);