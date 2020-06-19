export const ADD_PERSON= "ADD_PERSON";
export const onIncrement= "onIncrement";
export const onDecrement= "onDecrement";
export const onButtonResult= "onButtonResult";


export const addperson = (personData) => {
     return {
        type: ADD_PERSON,
        personData: personData
    };
}

export const add_person = (personData) => {console.log('action ......')
   return dispatch => {
       console.log("1");
        setTimeout(()=>{
             console.log("2");
                dispatch(addperson(personData));

        }, 2000)
         console.log("3");
   }
   
    return {
        type: ADD_PERSON,
        personData: personData
    };
};
