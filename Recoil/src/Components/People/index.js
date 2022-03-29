import React, { useState, useId } from 'react';
import { useRecoilValue } from "recoil"
import { peopleSelector } from "../../Recoil"

export const Person = () => {
  const [newPerson, setnewPerson] = useState();
  const people = useRecoilValue(peopleSelector(newPerson));
  const id = useId();

  return (
    <>
      <h1>
        Person State (Selector):
      </h1>
      {/* In future make this a user input, hardcoded for now */}
      <button
        disabled={newPerson}
        onClick={() => {
          setnewPerson({name: 'Annie', age: 20, country: 'Germany'})
        }}
      >
        Add New Person
      </button>
      <div>
        People Data JSON dump: <pre>{JSON.stringify(people)}</pre>
        <h3>People:</h3>
        {people.map(({ name, age, country }, i) => (
          <pre style={{ marginTop: 30 }} key={id}>
            <p>
              Person ID: {i+1}
            </p>
            <p>
              name: {name}
            </p>
            <p>
              age: {age}
            </p>
            <p>
              country: {country}
            </p>
          </pre>
        ))}
      </div>
    </>
  )
};
