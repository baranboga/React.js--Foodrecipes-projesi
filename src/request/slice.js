import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
       value:[],
    },
    reducers: {
        increment: (state, action) => {

         
          const newItem = action.payload;

          if(state.value.find((a)=>a.idMeal===newItem.idMeal)){

            alert("girdiğiniz ürün zaten ekli")


          } else{

            state.value = [...state.value, newItem];
            console.log(state.value);


          }
         
        },
        
        decrement: (state, yuk) => {   

        },
       
        },
        
    });


export const selectFavorite = state => state.counter.value;
export const selecttoplam = state => state.counter.toplam;
export const selectbuyProducts = state => state.counter.buyList;
export const selectKeyword=state => state.counter.keyword;
export const { increment, decrement, incrementWithValue,  topla,buy ,sil} = counterSlice.actions;
export default counterSlice.reducer;



