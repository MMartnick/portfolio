
import React from 'react';

import '../../css/Des.css';

function GameArt(props) {
    return (
        <div className="highlightDes">
            <section >
                <p className="subtitleDes">Game Art</p>
                <p className="descDes">
                    Like album art, game art crosses over different disciplines but ultimately requires the skills that come with digital image editing tools.
                    Much of this is a newer experience for me but it ranges from designing sprite sheets to 3D model texturing.
                    Below I have included examples of textures I have done for an unreleased 2.5D side scrolling game.
                    I have also included a sample sprite sheet for an ongoing project which focuses on hand drawn animations rather than pixel art.
                    </p>
            </section>

            <div className="gameart">
                <img src="/images/Design/greentxt.jpg" alt="Character texture from unfinished game" className="gameImg" />
                <img src="/images/Design/building.jpg" alt="Building texture from unfinished game" className="gameImg" />
                <img src="/images/Design/testsprite.png" alt="Spritesheet for Artificial Nocturne" className="gameImg" />
                <img src="/images/Design/whitetxt.jpg" alt="Character texture from unfinished game" className="gameImg" />
            </div>

            <p className="padDes">
                &nbsp;
                    </p>  
            </div>
    )
}

export default GameArt;