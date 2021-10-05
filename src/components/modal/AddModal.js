import React from 'react'
import './AddModal.scss'

const AddModal = props => {

  return (
    <div className={`modal__wrapper ${props.isOpened ? 'open' : 'close'}`} style={{ ...props.style }}>
      <div className="modal__body">
        <div className="modal__close" onClick={props.onModalClose}></div>
        {props.children}
        <div className="info-box">
          <div className="title">{props.title}</div>
          <div className="info-box__text">{props.text}</div>
          <div className="info-box__detail">{props.detail}
          </div>
          <a href={props.url} target="_blank">
            <div className="button visible">
              <div className="button-box">
                <i className="fas fa-external-link-alt"></i>
                <span>VIEW SITE</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )

}
export default AddModal