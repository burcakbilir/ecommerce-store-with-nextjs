const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    selectedCategory: [],
}

const filterSlice = createSlice({
    name:"filter",
    initialState,
    reducers: {
        toggleCategory: (state,action) => {
            const category = action.payload
            if(state.selectedCategory.includes(category)){
                state.selectedCategory = state.selectedCategory.filter((item)=> item !== category)
            }
            else{
                state.selectedCategory.push(category)
            }
        },
        clearAllFilters: () => initialState
    }

})

export const {toggleCategory, togglePriceRange, toggleSort, clearAllFilters} = filterSlice.actions
export default filterSlice.reducer