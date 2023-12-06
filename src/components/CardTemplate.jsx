import React from "react";
import like from "../assets/like.png";
import liked from "../assets/liked.png";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
export const CardTemplate = ({ userId, tweet, likeCountPrev, img }) => {
  const [likeCount, setLikeCount] = useState(likeCountPrev);
  const [isLike, setIsLike] = useState(false);
  const handelLike = (e) => {
    if (!isLike) {
      e.target.src = liked;
      setLikeCount((prev) => prev + 1);
      setIsLike(true);
    } else {
      e.target.src = like;
      setLikeCount((prev) => prev - 1);
      setIsLike(false);
    }
  };
  return (
    <div>
      <Card className="mt-6 w-96 m-5 ring-1 shadow-black ring-gray-400 min-h-fit">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2 flex">
            <img
              src={img}
              alt=""
              srcset=""
              className="rounded-full mr-2 ring-2 ring-black"
              width={30}
              height={30}
            />
            {userId}
          </Typography>
          <Typography>{tweet}</Typography>
        </CardBody>
        <CardFooter className="pt-0 flex">
          <img
            src={like}
            alt=""
            srcset=""
            onClick={handelLike}
            width={24}
            height={24}
          />
          <h3 className="pl-3">{likeCount}</h3>
        </CardFooter>
      </Card>
    </div>
  );
};
