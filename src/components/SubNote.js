import React from "react";
import './SubNote.scss';

function SubNote() {
    return (
        <div className="SubListContainer">
            <div className="SubListBox">
                <h3 className="SubListName">라벨3</h3>
                <button style={{ height: 20, marginTop: 23, marginLeft: 10 }}>수정</button>
                <button style={{ height: 20, marginTop: 23, marginLeft: 5 }}>설정</button>
                <button style={{ height: 20, marginTop: 23, marginLeft: 5 }}>삭제</button>
            </div>
            <div className="SubListBox">
                <h3 className="SubListName" style={{ marginTop: 10, marginLeft: 15 }}>Test1</h3>
                <p className="SubListContent" style={{ marginTop: 40, marginLeft: -70 }}>미리보기 내용입니다.</p>
                <p className="SubListDate" style={{ marginTop: 15, marginLeft: 20 }}>2022.03.10</p>
            </div>
            <div className="SubListBox">
                <h3 className="SubListName" style={{ marginTop: 10, marginLeft: 15 }}>Test2</h3>
                <p className="SubListContent" style={{ marginTop: 40, marginLeft: -70 }}>미리보기 내용입니다.</p>
                <p className="SubListDate" style={{ marginTop: 15, marginLeft: 20 }}>2022.03.09</p>
            </div>
        </div>

    );
};

export default SubNote