import React from 'react';

const BONUS = () => {
    return (
        <div>
            <div>
                <h2>How to react Works</h2>
                <p>A virtual DOM, which is a JS replica of a DOM tree, is used by React. As a result, when reading or writing to the DOM, it will use the virtual representation. The virtual DOM will then make every effort to update the browser's DOM as quickly as feasible.
Unlike browser DOM components, React elements are basic objects that are straightforward to create. React DOM updates the DOM to match the React elements.
The rationale behind this is that JS is extremely fast, thus having a DOM tree in it to speed up operations is beneficial. </p>
            </div>
            <div>
                <h2>What a Difference between Prop VS State</h2>
                <p>Props and state are inextricably intertwined. The state of a component is frequently used as the props of a child component. The child receives props as the second parameter in the parent's render method. Props are used to convey data from one component to another. The state is a sort of local data storage that is accessible only by the component and cannot be shared with other components.</p>
            </div>
        </div>
    );
};

export default BONUS;