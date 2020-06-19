import React from 'react';

const initialState = {
    persons:[]
}

const personreducer = (state = initialState, action)=> {

    console.log("reducers");
    if (action.type === "ADD_PERSON") { console.log("add person");
          const newPerson ={
              id: new Date(),
              name: action.personData.name,
              age: action.personData.age
          }
          return {
              ...state,
              persons:state.persons.concat(newPerson)
          }
    }
    return state;

}
export default  personreducer;