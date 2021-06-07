
import React from 'react';

const Calendly = () => {
    return (
        <div style={ {height: "800px"} }>
            <iframe
                src="https://calendly.com/{USERNAME}/OPTIONALEVENTNAME"
                width={"100%"}
                height={"100%"}
                frameBorder={"0"}
            />
        </div>
);
}
export default Calendly;



