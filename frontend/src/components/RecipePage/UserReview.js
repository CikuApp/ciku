import React from "react";
import PropTypes from "prop-types";
import { useRecoilValue, useRecoilState } from "recoil";

import userAtom from "recoil/user";
import WriteReviewButton from "./WriteReviewButton";

import { Icon } from "components/Presentation";

import defaultIcon from "assets/images/user.png";

function UserReview({ recipeId }) {
  const user = useRecoilValue(userAtom);
  return (
    <section className="my-16 flex items-center">
      <Icon
        size="md"
        shape="circle"
        className="mr-8"
        src={defaultIcon}
        alt={user.name}
      />
      <WriteReviewButton />
    </section>
  );
}

export default UserReview;

UserReview.propTypes = {
  recipeId: PropTypes.number,
};
