import * as React from "react";
import "./detail.css";
function Detail() {
  return (
    <div className="detail">
      <div className="user">
        <img src="/avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor, sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat settings</span>
            <img src="/arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="/arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="/arrowUp.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/432738296_3801507353412855_1940033459778751965_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGHCjhbum31eVbHokSv3ATWnLcOmJSeZzuctw6YlJ5nOxTZPnMJPscC1Mg4L1_Z3QMk8oPk3S6Az424HXILB7Ke&_nc_ohc=GH8wrZ_sJzYQ7kNvgFrEJyW&_nc_ht=scontent.fhan5-2.fna&oh=00_AYA0b5mEGccx_MHYSwnkgMMWMt9wAri83w6SJFuPoSw6nw&oe=66806E29"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="/download.png" alt=""  className="icon"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/432738296_3801507353412855_1940033459778751965_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGHCjhbum31eVbHokSv3ATWnLcOmJSeZzuctw6YlJ5nOxTZPnMJPscC1Mg4L1_Z3QMk8oPk3S6Az424HXILB7Ke&_nc_ohc=GH8wrZ_sJzYQ7kNvgFrEJyW&_nc_ht=scontent.fhan5-2.fna&oh=00_AYA0b5mEGccx_MHYSwnkgMMWMt9wAri83w6SJFuPoSw6nw&oe=66806E29"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="/download.png" alt=""  className="icon"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/432738296_3801507353412855_1940033459778751965_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGHCjhbum31eVbHokSv3ATWnLcOmJSeZzuctw6YlJ5nOxTZPnMJPscC1Mg4L1_Z3QMk8oPk3S6Az424HXILB7Ke&_nc_ohc=GH8wrZ_sJzYQ7kNvgFrEJyW&_nc_ht=scontent.fhan5-2.fna&oh=00_AYA0b5mEGccx_MHYSwnkgMMWMt9wAri83w6SJFuPoSw6nw&oe=66806E29"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="/download.png" alt=""  className="icon"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/432738296_3801507353412855_1940033459778751965_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGHCjhbum31eVbHokSv3ATWnLcOmJSeZzuctw6YlJ5nOxTZPnMJPscC1Mg4L1_Z3QMk8oPk3S6Az424HXILB7Ke&_nc_ohc=GH8wrZ_sJzYQ7kNvgFrEJyW&_nc_ht=scontent.fhan5-2.fna&oh=00_AYA0b5mEGccx_MHYSwnkgMMWMt9wAri83w6SJFuPoSw6nw&oe=66806E29"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="/download.png" alt=""  className="icon"/>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="/arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block user</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
}

export default Detail;
