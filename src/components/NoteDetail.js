import React from "react";
import './NoteDetail.scss';

function NoteDetail() {
    return (
        <div className="Parent">
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
                <div className="MainListBox">
                    <h3 className="MainListName">추가하기</h3>
                </div>
            </div>
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
                    <p className="SubListDate" style={{ marginTop: 15, marginLeft: 20 }}>2022.03.08</p>
                </div>
                <div className="SubListBox">
                    <h3 className="SubListName" style={{ marginTop: 10, marginLeft: 15 }}>Test2</h3>
                    <p className="SubListContent" style={{ marginTop: 40, marginLeft: -70 }}>미리보기 내용입니다.</p>
                    <p className="SubListDate" style={{ marginTop: 15, marginLeft: 20 }}>2022.03.07</p>
                </div>
            </div>
            <div className="DetailContainer">
                <div className="DetailTitleBox">
                    <h2 className="DetailListName">제목</h2>
                </div>
            </div>
        </div>
    );
};

export default NoteDetail;