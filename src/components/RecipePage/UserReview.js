import React from "react";
import PropTypes from "prop-types";
import { useRecoilValue, useRecoilState } from "recoil";

import userAtom from "recoil/user";
import WriteReviewButton from "./WriteReviewButton";

function UserReview({ recipeId }) {
  const user = useRecoilValue(userAtom);
  return (
    <section>
      <img src={user.icon} alt={user.name} />
      <WriteReviewButton />
    </section>
  );
}

export default UserReview;

UserReview.propTypes = {
  recipeId: PropTypes.number,
};
