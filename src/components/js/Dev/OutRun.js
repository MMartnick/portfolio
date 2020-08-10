
import React from 'react';

import '../../css/SoftwareComponent.css';

function OutRun(props) {
    return (
        <div className="highlightDev">
            <section >
                <p className="subtitleDev">Out Runner</p>
                <p className="descDev">
                    Out Runner is a standard endless run and gun platformer designed for mobile devices.
                    Although it is a relatively basic project the intent for it was to build a game through to completion and gain experience in deploying it to an active user base through the Google Play Store.
                    After its initial release, I had the opportunity to receive user feedback and push updates to address any concerns players had such as responsive design for specific devices.
                    This project was built in OOP C# with the Unity game engine framework, implemented the Unity Ads and Analytics features, and deployed as an Android App Bundle.
                                         <p> &nbsp; </p>
                    <a href="https://play.google.com/store/apps/details?id=com.DefaultCompany.OutRunner" target="_blank" class="sublink">
                        >> Get it here...
                    </a>
                    <p>  </p>
                    </p>
            </section>

            <div className="softContent">
                <img src="/images/Design/outrun.png" alt="Outrunner Logo" className="devImg" />
                <iframe className="gameVid" width="560" height="315" src="https://www.youtube.com/embed/4uTy1rmPGwk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
            </div>
            <p className="padDev">
                &nbsp;
                    </p>  
        </div>
    )
}

export default OutRun;