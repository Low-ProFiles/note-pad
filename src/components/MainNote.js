import React from "react";
import './MainNote.scss';

function MainNote() {
    return (
        <div className="MainListContainer">
            <div className="MainListBox">
                <h3 className="MainListName">전체메모(10)</h3>
            </div>
            <href to="./Note1">
                <div className="MainListBox">
                    <h3 className="MainListName">라벨1(0)</h3>
                </div>
            </href>
            <href to="./Note2">
                <div className="MainListBox">
                    <h3 className="MainListName">라벨2(1)</h3>
                </div>
            </href>
            <href to="./Note3">
                <div className="MainListBox">
                    <h3 className="MainListName">라벨3(2)</h3>
                </div>
            </href>
            <href to="./Note4">
                <div className="MainListBox">
                    <h3 className="MainListName">라벨4(3)</h3>
                </div>
            </href>
            <href to="./Note5">
                <div className="MainListBox">
                    <h3 className="MainListName">라벨5(4)</h3>
                </div>
            </href>
            <div className="MainListBox" style={{ borderTop: 'solid', position: 'fixed', bottom: 105.5 }}>
                <h3 className="MainListName">추가하기</h3>
            </div>
        </div>
    );
};

export default MainNote;