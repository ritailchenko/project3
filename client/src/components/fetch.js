import React from 'react';

function Fetch () {

    function getList () {
        fetch('/details/3')
            .then(res => res.json())
            .then(list => console.log(list))
    }
        getList();  
        return (
            <div>
            </div>
        );

    
}
export default Fetch; 