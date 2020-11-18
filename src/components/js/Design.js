import React from 'react';
import ReactGA from 'react-ga';

import { createBrowserHistory } from 'history';



import '../css/SoftwareComponent.css';
import DesImages from './Design/DesImages';

const trackingId = "UA-175309816-1";
const history = createBrowserHistory();

ReactGA.initialize(trackingId);
ReactGA.set({
    category: "Browser History",
    action: "User came to des page",
})

history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

function Design(props) {
    return (
        <div>
            <section id="pagetitle">
                <p id="topic">Graphic Design</p>
            </section>

            <DesImages></DesImages>
        </div>
    )
}

export default Design;