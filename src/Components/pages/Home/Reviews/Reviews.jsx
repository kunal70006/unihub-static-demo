import React, { useEffect, useState } from "react";
import "./Reviews.scss";

import reviewsData from "./reviewsData";

const Reviews = () => {
  const [prevId, updatePrevId] = useState(1);
  const [currentId, updateCurrentId] = useState(1);
  const [nextId, updateNextId] = useState(2);

  useEffect(() => {
    const carouselHandler = (e) => {
      const targetId = nextId;
      // only if a different dot is clicked
      if (targetId !== currentId) {
        //list of reviews
        const carousel = document.querySelector(".reviews-carousel");

        //list of dots
        const dots = document.querySelector(".dotNav");
        //getting current review from page

        if (prevId) {
          const prevReview = carousel.children[prevId - 1];
          // const prevDot = dots.children[prevId - 1];
          prevReview.classList.remove("moveDown");
        }

        const currentReview = carousel.children[currentId - 1];
        const currentDot = dots.children[currentId - 1];

        const targetReview = carousel.children[targetId - 1];
        const targetDot = dots.children[targetId - 1];

        currentReview.classList.add("moveLeft");
        currentReview.classList.remove("current");
        targetReview.classList.add("current");

        currentDot.classList.remove("current");
        targetDot.classList.add("current");

        updatePrevId(currentId);
        updateCurrentId(targetId);
        updateNextId(targetId === 3 ? 1 : targetId + 1);
      }
    };

    setTimeout(() => {
      carouselHandler();
    }, 15000); //time in milliseconds for carousel change.
  }, [currentId, prevId, nextId]);

  return (
    <div className="reviews-section">
      <div className="main">
        <div className="heading">What Our Students Say About Us</div>
        <div className="reviews">
          <div className="reviews-carousel">
            {reviewsData.map((review) => {
              return (
                <div
                  className={
                    review.id === currentId
                      ? "review-box current"
                      : "review-box"
                  }
                  key={review.id}
                  id={review.id}
                >
                  <p>{review.content}</p>
                  <div className="person">
                    <div className="image">
                      <img src={review.image} alt="" />
                    </div>
                    <div className="info">
                      <p className="name">{review.name}</p>
                      <p className="position">{review.position}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="dotNav">
            {reviewsData.map((review) => {
              return (
                <button
                  key={review.id}
                  className={review.id === 1 ? "dot current" : "dot"}
                  id={review.id}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="box" id="pink"></div>
      <div className="box" id="purple"></div>
      <div className="box" id="green"></div>
      <div className="box" id="blue"></div>
    </div>
  );
};

export default Reviews;
