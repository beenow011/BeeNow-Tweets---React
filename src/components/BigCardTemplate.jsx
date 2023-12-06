import React from "react";
import like from "../assets/like.png";
import liked from "../assets/liked.png";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export const BigCardTemplate = ({ userId, tweet, likeCountPrev, img }) => {
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
      <Card className="mt-6 w-full ">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={img} alt="card-image" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
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
