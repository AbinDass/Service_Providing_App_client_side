import React from "react";
import Draggable from "react-draggable";

const DragableChat = () => {
    return (
        <div className="bg-red-300">
            <Draggable>
                <div className="bg-blue-700">
                    <h1>Drag me around!</h1>
                </div>
            </Draggable>
        </div>
    );
};

export default DragableChat;
