import React from 'react';

const Card = () => {
  return (
    <article className="group transition duration-700  hover:scale-105 flex rounded-md max-w-sm flex-col overflow-hidden border border-neutral-300 bg-neutral-50 hover:bg-orange-50 text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
      {/* Image */}
      <div className="h-44 md:h-64 overflow-hidden">
        <img
          src="https://penguinui.s3.amazonaws.com/component-assets/card-img-3.webp"
          className="object-cover transition duration-700 ease-out group-hover:scale-105"
          alt="CASIO G-SHOCK GA2100, Black face, black bands"
        />
      </div>
      {/* Content */}
      <div className="flex flex-col gap-4 p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 justify-between">
          {/* Title & Rating */}
          <div className="flex flex-col">
            <h3
              className="text-lg lg:text-xl font-bold text-neutral-900 dark:text-white"
              aria-describedby="productDescription"
            >
              CASIO G-SHOCK GA2100
            </h3>
            {/* Rating */}
            <div className="flex items-center gap-1">
              <span className="sr-only">Rated 3 stars</span>
              {[...Array(3)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 text-amber-500"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
              {[...Array(2)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 text-neutral-600/50 dark:text-neutral-300/50"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>
          <span className="text-xl">
            <span className="sr-only">Price</span>$99.99
          </span>
        </div>
        <p
          id="productDescription"
          className="mb-2 text-pretty text-sm"
        >
          The Casio G-Shock GA2100 is simply designed for easy
          timekeeping, featuring a sleek profile and clear display.
        </p>
        {/* Button */}
        <button
          type="button"
          className="flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap bg-black px-4 py-2 text-center text-sm font-medium tracking-wide text-neutral-100 transition   dark:text-black dark:focus-visible:outline-white rounded-md "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
            className="size-3.5"
          >
            <path
              fillRule="evenodd"
              d="M5 4a3 3 0 0 1 6 0v1h.643a1.5 1.5 0 0 1 1.492 1.35l.7 7A1.5 1.5 0 0 1 12.342 15H3.657a1.5 1.5 0 0 1-1.492-1.65l.7-7A1.5 1.5 0 0 1 4.357 5H5V4Zm4.5 0v1h-3V4a1.5 1.5 0 0 1 3 0Zm-3 3.75a.75.75 0 0 0-1.5 0v1a3 3 0 1 0 6 0v-1a.75.75 0 0 0-1.5 0v1a1.5 1.5 0 1 1-3 0v-1Z"
              clipRule="evenodd"
            />
          </svg>
          See more
        </button>
      </div>
    </article>
  );
};

export default Card;
