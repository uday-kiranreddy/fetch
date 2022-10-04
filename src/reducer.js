const reducer=(state,action)=>{
 if(action.type=="LOADING"){
    return{...state,loading:true};
 }
 return state;
}
export default reducer;