import React, { useState } from "react";

const TwitterCard = ({ children, username, initialIsFollowing }) => {
  const [following, setFollowing] = useState(initialIsFollowing);

  const classText = following
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";
  const buttonText = following ? "Siguiendo" : "Seguir";

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="el avatar de midudev"
          src={`https://unavatar.io/${username}`}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{username}</span>
        </div>
      </header>
      <aside>
        <button className={classText} onClick={() => setFollowing(!following)}>
          <span className="tw-followCard-text">{buttonText}</span> 
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
};

export default TwitterCard;
