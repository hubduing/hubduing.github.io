import Modal2 from "../src/components/modal/Modal2";
import Img1 from "../src/img/slides/portfolio1.png";
import React from "react";

<div className="gallery__item col-xxl-4 ">
  <div className="galley__view">
    <div className="card1 card-prop"></div>
    <div className="text">
      <div className="bold">Роллы</div>
    </div>
    <button className="button open-btn" onClick={() => setModalActive(true)}>Learn more</button>
  </div>
  <Modal2
    active={modalActive}
    setActive={setModalActive}
    key="1"
    urlModal="#!"
    imgModal={Img1}
    titleModal='sadgsadgsadg'
    textModal='Lorem ipsum dolor.'
    detailModal='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut cum cumque debitis delectus, deleniti eligendi est, eum excepturi facilis iste iusto laboriosam maxime modi nobis odit perferendis placeat quo quos ratione repellat reprehenderit saepe sequi tempore tenetur ullam vel.'
  >
  </Modal2>
</div>