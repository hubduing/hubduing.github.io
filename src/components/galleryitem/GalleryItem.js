import React, {useState} from "react";
import './GalleryItem.scss'
import Img1 from '../../img/slides/portfolio1.png'
import Img2 from '../../img/slides/portfolio2.png'
import Img3 from '../../img/slides/portfolio3.png'
import Img4 from '../../img/slides/portfolio4.png'

import AddModal from "../modal/AddModal";

const GalleryItem = () => {

  const [modal, setModal] = useState({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false
  })


    return (
      <>
        <div className="gallery__item">
          <div className="galley__view">
            <div className="card1 card-prop"></div>
            <div className="text">
              <div className="bold">Documents</div>
            </div>
            <button className="button open-btn" onClick={() => setModal({
              ...modal, modal1: true
              })}>Learn more
            </button>
          </div>
        </div>

        <div className="gallery__item">
          <div className="galley__view">
            <div className="card2 card-prop"></div>
            <div className="text">
              <div className="bold">Documents</div>
            </div>
            <button className="button open-btn" onClick={() => setModal({
              ...modal, modal2: true
            })}>Learn more
            </button>
          </div>
        </div>

        <div className="gallery__item ">
          <div className="galley__view">
            <div className="card3 card-prop"></div>
            <div className="text">
              <div className="bold">Documents</div>
            </div>
            <button className="button open-btn" onClick={() => setModal({
              ...modal, modal3: true
            })}>Learn more
            </button>
          </div>
        </div>

        <div className="gallery__item ">
          <div className="galley__view">
            <div className="card4 card-prop"></div>
            <div className="text">
              <div className="bold">Documents</div>
            </div>
            <button className="button open-btn" onClick={() => setModal({
              ...modal, modal4: true
            })}>Learn more
            </button>
          </div>
        </div>


        <AddModal
          title={"Documents title"}
          isOpened={modal.modal1}
          onModalClose={() => setModal({...modal, modal1: false} )}
          text={"Lorem ipsum dolor sit amet."}
          detail={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
          "Et ipsam maxime necessitatibus, possimus sint unde voluptas. " +
          "Aperiam corporis fuga fugiat labore magni mollitia officia quas " +
          "sequi suscipit ullam? Atque blanditiis culpa distinctio doloremque " +
          "dolores, doloribus ducimus explicabo labore libero minus molestias " +
          "nihil nobis nostrum, perferendis provident quidem, reiciendis ut vero!"}
          url={"https://hubduing.github.io/ofdr/"}
        >
          <div className="_img">
            <img src={Img1} alt="slide"/>
          </div>
        </AddModal>
        <AddModal
          title={"Documents title"}
          isOpened={modal.modal2}
          onModalClose={() => setModal({...modal, modal2: false} )}
          text={"Lorem ipsum dolor sit amet."}
          detail={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
          "Et ipsam maxime necessitatibus, possimus sint unde voluptas. " +
          "Aperiam corporis fuga fugiat labore magni mollitia officia quas " +
          "sequi suscipit ullam? Atque blanditiis culpa distinctio doloremque " +
          "dolores, doloribus ducimus explicabo labore libero minus molestias " +
          "nihil nobis nostrum, perferendis provident quidem, reiciendis ut vero!"}
          url={"https://hubduing.github.io/project3/"}
        >
          <div className="_img">
            <img src={Img2} alt="slide"/>
          </div>
        </AddModal>

        <AddModal
          title={"Documents title"}
          isOpened={modal.modal3}
          onModalClose={() => setModal({...modal, modal3: false} )}
          text={"Lorem ipsum dolor sit amet."}
          detail={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
          "Et ipsam maxime necessitatibus, possimus sint unde voluptas. " +
          "Aperiam corporis fuga fugiat labore magni mollitia officia quas " +
          "sequi suscipit ullam? Atque blanditiis culpa distinctio doloremque " +
          "dolores, doloribus ducimus explicabo labore libero minus molestias " +
          "nihil nobis nostrum, perferendis provident quidem, reiciendis ut vero!"}
          url={"https://hubduing.github.io/project4/"}
        >
          <div className="_img">
            <img src={Img3} alt="slide"/>
          </div>
        </AddModal>
        <AddModal
          title={"Documents title"}
          isOpened={modal.modal4}
          onModalClose={() => setModal({...modal, modal4: false} )}
          text={"Lorem ipsum dolor sit amet."}
          detail={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
          "Et ipsam maxime necessitatibus, possimus sint unde voluptas. " +
          "Aperiam corporis fuga fugiat labore magni mollitia officia quas " +
          "sequi suscipit ullam? Atque blanditiis culpa distinctio doloremque " +
          "dolores, doloribus ducimus explicabo labore libero minus molestias " +
          "nihil nobis nostrum, perferendis provident quidem, reiciendis ut vero!"}
          url={"https://hubduing.github.io/project5/"}
        >
          <div className="_img">
            <img src={Img4} alt="slide"/>
          </div>
        </AddModal>

      </>
    )
}

export default GalleryItem