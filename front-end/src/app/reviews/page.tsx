"use client";
import { useState } from "react";
import classNames from "classnames";
import Form from "@/components/Form/form";
import Comment from "@/components/Comment/comment";
import IComment from "@/Interfaces/Comments";
import mockComments from '../../../mock-tool/mockComments'

export default function Reviews() {
  const [comments, setComments] = useState([...mockComments]);
  const [expanded, setExpanded] = useState(false);
  const expandedHandler = () => {
    setExpanded(!expanded);
  };
  const isReedMoreReviews = comments.length > 1;
  return (
    <div className="p-20">
      <div
        className={classNames(
          { "h-fit": expanded },
          { "h-48 overflow-y-hidden": !expanded }
        )}
      >
        {comments.map((comment: IComment) => {
          return <Comment {...comment} />;
        })}
      </div>

      {isReedMoreReviews && (
        <div
          className="underline font-bold pt-5 cursor-pointer ..."
          onClick={expandedHandler}
        >
          {expanded? 'LESS REVIEWS': 'ALL REVIEWS'}
        </div>
      )}
      <div className="pt-10 ...">
        <h1 className="text-3xl">Leave a Review</h1>
        <p className="pb-1 ...">
          Your email address will not be published. Required fields are marked *
        </p>
        <div>
          <Form setComments={setComments} />
        </div>
      </div>
    </div>
  );
}
