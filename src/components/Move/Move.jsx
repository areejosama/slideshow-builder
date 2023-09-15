import React, { useState } from 'react';
import Moveable from "react-moveable";

export default function App({ dynamicValue }) {
    return (
        <div className="root">
            <div className="container">
                <div className="target target1"
                    style={{
                        left: "10px",
                        top: "10px",
                        borderRadius: "25px",
                    }}>
                    <div dangerouslySetInnerHTML={{ __html: dynamicValue }} />
                    </div>
                  <Moveable
                    target={".target1"}
                    draggable={true}
                    roundable={true}
                    resizable={true}
                    isDisplayShadowRoundControls={"horizontal"}
                    roundClickable={"control"}
                    roundPadding={6}
                    onRound={e => {
                        console.log("ROUND", e.borderRadius);
                    }}
                    onRender={e => {
                        e.target.style.cssText += e.cssText;
                    }}
                    onRenderEnd={e => {
                        e.target.style.cssText += e.cssText;
                    }}
                />

            </div>
        </div>
    );
}