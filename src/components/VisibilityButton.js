
import React from 'react';


function VisibilityButton({showAll, showCaught, showUncaught }) {
    return (
        <div>
            <button onClick={showAll}>All</button>
            <button onClick={showCaught}>Caught</button>
            <button onClick={showUncaught}>Uncaught</button>
        </div>
    );
}

export default VisibilityButton;