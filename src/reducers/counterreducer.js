const count=0;

const counteReducer =(state=count,action)=>{
    switch(action.type){
        case "INCREMENT":
            return state+action.payload;
            
        case "DECREMENT":
            return state - action.payload;
          
        default:
            return state;        

    }
};
export default counteReducer;